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

import Card from '@/components/Card';
import ControlButton from '@/components/ControlButton';
import IconButton from '@/components/IconButton';
import RegButton from '@/components/RegButton';
import Title from '@/components/Title';
import Figma from '@/components/icon/Figma';

import fsNewImage from '@/../public/img-FS-new.png';
import fsOldImage from '@/../public/img-FS-old.png';
import awwwardsImage from '@/../public/img-awwwards.png';
import dailyUiImage from '@/../public/img-dailyUi.png';
import webImage from '@/../public/img-index.png';
import avaImage from '@/../public/img_ava.png';
import backgroundImage from '@/../public/img_background.jpg';
import { usePathname, useRouter } from '@/i18n/routing';

const personalInfo = {
  name: '陳雅涵',
  englishName: 'ANGELA',
  email: 'q791017@gmail.com',
  mobile: '0933-212-492',
};

const uiTools = [
  {
    title: 'designSoftware',
    description: 'Figma / Photoshop / Illustrator / CoreDraw',
  },
  {
    title: 'engineeringSoftware',
    description: 'ProE(Creo) / SolidWorks / KeyShot',
  },
];

const ui = [
  {
    title: 'features',
    items: [
      { value: 'feature1' },
      { value: 'feature2' },
      { value: 'feature3' },
      { value: 'feature4' },
      { value: 'feature5' },
    ],
  },
];

const frontEndTools = [
  {
    title: 'language',
    description: 'HTML5 / CSS3 / JavaScript (ES6+) / TypeScript / React / Next.js',
  },
  {
    title: 'develop',
    description: 'Git / VS Code / Node.js / Vercel / Browser DevTools',
  },
];

const frontEnd = [
  {
    title: 'develop',
    items: [{ value: 'develop1' }, { value: 'develop2' }, { value: 'develop3' }],
  },
  {
    title: 'test',
    items: [{ value: 'test1' }, { value: 'test2' }, { value: 'test3' }],
  },
  {
    title: 'design',
    items: [{ value: 'design1' }, { value: 'design2' }],
  },
];

const school = [
  {
    title: 'title',
    duration: '2009 - 2013',
    school: 'school',
    department: 'department',
  },
];

const experience = [
  {
    duration: 'Aug 2018 - Jun 2023',
    company: 'company1',
    position: 'position1',
    description: 'description1',
  },
  {
    duration: 'Jul 2013 - Jul 2017',
    company: 'company2',
    position: 'position2',
    description: 'description2',
  },
];

const projectInfoTool = [
  {
    title: 'toolTitle',
    items: [
      { value: 'design' },
      { value: 'frameWork' },
      { value: 'style' },
      { value: 'storage' },
      { value: 'auth' },
      { value: 'deploy' },
      { value: 'intl' },
      { value: 'listener' },
      { value: 'dns' },
      { value: 'quality' },
    ],
  },
];

const projectInfoFunction = [
  {
    title: 'functionTitle',
    items: [
      { value: 'user', details: [{ detail: 'userDetail' }] },
      {
        value: 'manage',
        details: [
          { detail: 'manageDetail1' },
          { detail: 'manageDetail2' },
          { detail: 'manageDetail3' },
        ],
      },
    ],
  },
];

const cardItems = [
  { value: 'value1', imageSrc: dailyUiImage },
  { value: 'value2', imageSrc: fsOldImage },
  { value: 'value3', imageSrc: fsNewImage },
  { value: 'value4', imageSrc: awwwardsImage },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const developRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => [topRef, summaryRef, experienceRef, developRef, uiRef], []);

  const currentIndex = useRef(0);

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
            console.log(i);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

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
    console.log(isBottom);
  };

  const scrollTop = () => {
    sections[0].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    console.log(isBottom);
  };

  const translateOnClick = (key: string) => {
    router.replace({ pathname }, { locale: key });
  };

  return (
    <div className="w-full min-h-screen relative">
      <Image src={backgroundImage} alt="background-image" className="fixed z-0 h-screen" />
      <div className="z-10 relative flex w-full justify-between">
        <div className="fixed px-4 py-4 h-screen flex flex-col justify-end gap-10">
          <div className="flex flex-col gap-6">
            <ControlButton
              ariaLabel="to previous item"
              icon={<ChevronUp />}
              onClick={scrollUp}
              className={isTop ? 'opacity-0 cursor-not-allowed' : ''}
            />
            <ControlButton
              ariaLabel="to next item"
              icon={<ChevronDown />}
              onClick={scrollDown}
              className={isBottom ? 'hidden' : ''}
            />
            <ControlButton
              ariaLabel="to top"
              icon={<ChevronBarUp />}
              onClick={scrollTop}
              className={isBottom ? 'flex' : 'hidden'}
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
                <div className="text-2xl font-bold">{personalInfo.name}</div>
                <div className="font-bold text-lg sm:text-2xl">{personalInfo.englishName}</div>
              </div>
              <div className="border-b border-b-gray-300 w-full" />
              <div className="nameTitleIndent flex flex-col gap-2 text-sm leading-tight text-wrap">
                <div>{personalInfo.email}</div>
                <div>{personalInfo.mobile}</div>
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
              {uiTools.map(({ title, description }) => (
                <div key={title} className="flex flex-col gap-2 ml-4">
                  <div className="font-semibold text-gray-800">{t(`ui.${title}`)}</div>
                  <div className="text-gray-600 ml-4">{description}</div>
                </div>
              ))}
              {ui.map(({ title, items }) => (
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
              {frontEndTools.map(({ title, description }) => (
                <div key={title} className="flex flex-col gap-2 ml-4">
                  <div className="font-semibold text-gray-800">{t(`frontEnd.${title}`)}</div>
                  <div className="text-gray-600 ml-4">{description}</div>
                </div>
              ))}
              {frontEnd.map(({ title, items }) => (
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
              {experience.map(({ duration, company, position, description }) => (
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
              {school.map(({ duration, school, department }) => (
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
                {projectInfoTool.map(({ title, items }) => (
                  <div key={title} className="flex flex-col gap-2">
                    <div className="font-semibold">{t(`project.${title}`)}</div>
                    {items.map(({ value }) => (
                      <div key={value} className="text-gray-600 ml-4">
                        {t(`project.${value}`)}
                      </div>
                    ))}
                  </div>
                ))}
                {projectInfoFunction.map(({ title, items }) => (
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardItems.map(({ imageSrc, value }) => (
                  <Card key={value} imageSrc={imageSrc} cardValue={value} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
