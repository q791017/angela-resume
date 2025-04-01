'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  ChevronBarUp,
  ChevronDown,
  ChevronUp,
  Dribbble,
  Github,
  Linkedin,
  Translate,
} from 'react-bootstrap-icons';

import CardComponent from '@/components/CardComponent';
import ControlButton from '@/components/ControlButton';
import IconButton from '@/components/IconButton';
import RegButton from '@/components/RegButton';
import Title from '@/components/Title';
import Figma from '@/components/icon/Figma';
import { Progress } from '@/components/ui/progress';

import webImage from '@/../public/images/img-fsNew-thumb.png';
import avaImage from '@/../public/images/img_ava.png';
import backgroundImage from '@/../public/images/img_background.jpg';
import { usePathname, useRouter } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const [resumeLoading, setResumeLoading] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeDataProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const topRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const developRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => [topRef, summaryRef, experienceRef, developRef, uiRef], []);

  const currentIndex = useRef(0);

  const loadContentData = async () => {
    try {
      setResumeLoading(10);
      const interval = setInterval(() => {
        setResumeLoading((prev) => Math.min(prev + 10, 80));
      }, 200);

      const response = await fetch('/resumeContent.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch resumeContent.json with status:${response.status}`);
      }
      const resumeData = await response.json();

      clearInterval(interval);
      setResumeLoading(100);
      setResumeData(resumeData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('Error loading resume data:', err);
      setResumeLoading(0);
    }
  };

  useEffect(() => {
    loadContentData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i].current;
        if (section) {
          const offsetTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= offsetTop - 50 && scrollY < offsetTop + sectionHeight) {
            currentIndex.current = i;
            setIsTop(i === 0);
            setIsBottom(i === sections.length - 1 || scrollY + windowHeight >= pageHeight - 50);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="font-bold p-8">
          {t('refresh.error')}: {error}
        </div>
        <RegButton
          onClick={() => {
            setError(null);
            loadContentData();
          }}
          ariaLabel="refresh"
        >
          {t('refresh.refresh')}
        </RegButton>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <div className="font-bold p-8 text-gray-800">{t('refresh.loading')}</div>
        <Progress value={resumeLoading} className="w-[20%]" />
      </div>
    );
  }

  const scrollUp = () => {
    if (currentIndex.current > 0) {
      currentIndex.current--;
      sections[currentIndex.current].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollDown = () => {
    if (currentIndex.current < sections.length - 1) {
      currentIndex.current++;
      sections[currentIndex.current].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollTop = () => {
    sections[0].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const translateOnClick = (key: string) => {
    router.replace({ pathname }, { locale: key });
  };

  return (
    <div className="w-full min-h-screen relative">
      <Image src={backgroundImage} alt="background-image" className="fixed z-0 h-screen" />
      <div className="z-10 relative flex w-full justify-between">
        <div className="fixed p-5 h-screen flex flex-col justify-end gap-10">
          <div className="flex flex-col gap-6">
            <ControlButton
              ariaLabel="to previous item"
              icon={<ChevronUp />}
              onClick={scrollUp}
              className={[
                isTop ? 'opacity-40 !cursor-not-allowed' : '',
                isBottom ? 'hidden' : '',
              ].join('')}
            />
            <ControlButton
              ariaLabel="to top"
              icon={<ChevronBarUp />}
              onClick={scrollTop}
              className={isBottom ? 'flex' : 'hidden'}
            />
            <ControlButton
              ariaLabel="to next item"
              icon={<ChevronDown />}
              onClick={scrollDown}
              className={isBottom ? 'opacity-40 !cursor-not-allowed' : ''}
            />
          </div>
          <ControlButton
            onClick={() => translateOnClick(locale === 'en-US' ? 'zh-TW' : 'en-US')}
            ariaLabel="Language Switch"
            icon={<Translate />}
            buttonText={t(`locale.${locale}`)}
          />
        </div>
        <div className="flex w-full flex-col py-5 gap-20 px-5 max-w-screen-lg mx-auto sm:py-10 sm:px-20 bg-white/50 shadow-customize">
          <section ref={topRef} className="flex justify-center mb-4 items-center">
            <Image
              src={avaImage}
              alt="ava-image"
              className="min-w-52 max-w-60 w-full h-auto"
              priority
            />
            <div className="flex flex-col gap-3 sm:gap-4 w-1/2">
              <div className="nameTitleIndent md:pl-0 pl-2 flex flex-col sm:flex-row sm:gap-2">
                <div className="text-2xl font-bold">{resumeData.personalInfo.name}</div>
                <div className="font-bold text-lg sm:text-2xl">
                  {resumeData.personalInfo.englishName}
                </div>
              </div>
              <div className="border-b border-b-gray-300 w-full" />
              <div className="nameTitleIndent flex flex-col gap-2 text-sm leading-tight text-wrap">
                <div>{resumeData.personalInfo.email}</div>
                <div>{resumeData.personalInfo.mobile}</div>
              </div>
              <div className="nameTitleIndent flex gap-2">
                <IconButton
                  buttonHref="https://github.com/q791017/angela-resume"
                  ariaLabel="Github Page"
                >
                  <Github />
                </IconButton>
                <IconButton buttonHref="https://dribbble.com/q791017" ariaLabel="Dribbble Page">
                  <Dribbble />
                </IconButton>
                <IconButton
                  buttonHref="https://www.linkedin.com/in/ya-han-chen-000339159"
                  ariaLabel="Linkedin Page"
                >
                  <Linkedin />
                </IconButton>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full lg:gap-16 gap-10 items-start">
            <div className="contentStyle" ref={summaryRef}>
              <Title title={'ui.uiTitle'} />
              {resumeData.uiTools.map(({ title, description }) => (
                <div key={title} className="flex flex-col gap-2 ml-4">
                  <div className="font-semibold text-gray-800">{t(`ui.${title}`)}</div>
                  <div className="text-gray-600 ml-4">{description}</div>
                </div>
              ))}
              {resumeData.ui.map(({ title, items }) => (
                <div key={title} className="flex flex-col gap-2 ml-4">
                  <div className="font-semibold text-gray-800">{t(`ui.${title}`)}</div>
                  <ul className="list-disc flex flex-col gap-2 pl-2">
                    {items.map(({ value }) => (
                      <li key={value} className="text-gray-600 ml-4">
                        {t(`uiFeatures.${value}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="contentStyle">
              <Title title={'frontEnd.frontEndTitle'} />
              {resumeData.frontEndTools.map(({ title, description }) => (
                <div key={title} className="flex flex-col gap-2 ml-4">
                  <div className="font-semibold text-gray-800">{t(`frontEnd.${title}`)}</div>
                  <div className="text-gray-600 ml-4">{description}</div>
                </div>
              ))}
              {resumeData.frontEnd.map(({ title, items }) => (
                <div key={title} className="flex flex-col gap-2 ml-4">
                  <div className="font-semibold text-gray-800">{t(`frontEnd.${title}`)}</div>
                  <ul className="list-disc flex flex-col gap-2 pl-2">
                    {items.map(({ value }) => (
                      <li key={value} className="text-gray-600 ml-4">
                        {t(`frontEndDescription.${value}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="contentStyle" ref={experienceRef}>
              <Title title={'experience.title'} />
              {resumeData.experience.map(({ duration, company, position, description }) => (
                <div key={company} className="flex flex-col gap-2 ml-4 text-gray-600">
                  <div className="text-sm">{duration}</div>
                  <div className="font-semibold text-gray-800">
                    {t(`experience.${company}`)} - {t(`experience.${position}`)}
                  </div>
                  <div>{t(`experience.${description}`)}</div>
                </div>
              ))}
            </div>
            <div className="contentStyle">
              <Title title={'school.title'} />
              {resumeData.school.map(({ duration, school, department }) => (
                <div key={school} className="flex flex-col gap-2 ml-4 text-gray-600">
                  <div className="text-sm">{duration}</div>
                  <div className="font-semibold text-gray-800">{t(`school.${school}`)}</div>
                  <div>{t(`school.${department}`)}</div>
                </div>
              ))}
            </div>
            <div className="contentStyle">
              <Title title={'english.title'} />
              <div className="flex flex-col gap-2 ml-4 text-gray-600">
                <div className="text-sm">{t('english.exam')}</div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-start gap-6 mx-auto w-full"
              ref={developRef}
            >
              <Title title={'project.title'} />
              <a
                href="https://friendship.catholic.org.tw/"
                aria-label="Catholic Friendship House page"
                className="text-gray-400 font-semibold rounded-md shadow-customize hover:shadow-hover hover:duration-400 max-w-fit mb-4"
              >
                <Image
                  src={webImage}
                  alt="webImage"
                  className="rounded-md border border-gray-200 "
                />
              </a>
              <div className="ml-4 flex flex-col gap-4">
                {resumeData.projectInfoTool.map(({ title, items }) => (
                  <div key={title} className="flex flex-col gap-2">
                    <div className="font-semibold">{t(`project.${title}`)}</div>
                    {items.map(({ value }) => (
                      <div key={value} className="text-gray-600 ml-4">
                        {t(`project.${value}`)}
                      </div>
                    ))}
                  </div>
                ))}
                {resumeData.projectInfoFunction.map(({ title, items }) => (
                  <div key={title} className="flex flex-col gap-4">
                    <div className="font-semibold">{t(`project.${title}`)}</div>
                    {items.map(({ value, details }) => (
                      <div key={value} className="text-gray-600 ml-4 flex flex-col gap-2">
                        {t(`project.${value}`)}
                        <ul className="list-disc flex flex-col gap-2 pl-2">
                          {details.map(({ detail }) => (
                            <li key={detail} className="text-gray-600 ml-4">
                              {t(`project.${detail}`)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="flex gap-5">
                  <RegButton
                    buttonHref="https://github.com/FriendshipHouse/catholic-friendship-app"
                    ariaLabel="Github Page"
                  >
                    <Github />
                    GitHub
                  </RegButton>
                  <RegButton
                    buttonHref="https://www.figma.com/design/I3P67ED6VkdrcKT0RgTSjN/Northern-Catholic-Youth-Center?node-id=2-2&t=r8W5arXXfmrPMl2D-1"
                    ariaLabel="Figma Page"
                  >
                    <Figma className="w-4 h-auto text-gray-500" />
                    Figma Pages
                  </RegButton>
                  <RegButton
                    buttonHref="https://www.figma.com/proto/I3P67ED6VkdrcKT0RgTSjN/Northern-Catholic-Youth-Center?node-id=355-2203&starting-point-node-id=355%3A2203&t=pNAL9P4FBvHW4vAQ-1"
                    ariaLabel="Figma Page"
                  >
                    <Figma className="w-4 h-auto text-gray-500" />
                    Figma Prototype
                  </RegButton>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-start gap-6 mx-auto w-full"
              ref={uiRef}
            >
              <Title title={'uiAttachment.title'} />
              <CardComponent />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
