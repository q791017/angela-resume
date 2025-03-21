'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Dribbble, Github, Linkedin, Translate } from 'react-bootstrap-icons';

import Card from '@/components/Card';
import IconButton from '@/components/IconButton';
import RegButton from '@/components/RegButton';
import Title from '@/components/Title';
import Figma from '@/components/icon/Figma';

import awwwardsImage from '@/../public/img-awwwards.png';
import dailyUiImage from '@/../public/img-dailyUi.png';
import figmaImage from '@/../public/img-figmaDemo.png';
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
  { value: 'value1', href: 'https://dribbble.com/q791017', imageSrc: dailyUiImage },
  {
    value: 'value2',
    href: 'https://www.figma.com/proto/I3P67ED6VkdrcKT0RgTSjN/Northern-Catholic-Youth-Center?node-id=355-2203&starting-point-node-id=355%3A2203&t=pNAL9P4FBvHW4vAQ-1',
    imageSrc: figmaImage,
  },
  { value: 'value3', href: 'https://www.awwwards.com/sites/steina', imageSrc: awwwardsImage },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (key: string) => {
    router.replace({ pathname }, { locale: key });
  };

  return (
    <div className="w-full min-h-screen relative">
      <Image src={backgroundImage} alt="background-image" className="fixed z-0 h-screen" />
      <div className="z-10 relative flex w-full flex-col py-5 sm:py-10 sm:px-20 gap-20 px-5 max-w-screen-lg mx-auto bg-white/50 shadow-customize">
        <RegButton
          onClick={() => onClick(locale === 'en-US' ? 'zh-TW' : 'en-US')}
          ariaLabel="Language Switch"
        >
          <Translate />
          {t(`locale.${locale}`)}
        </RegButton>
        <div className="flex justify-center mb-4 items-center">
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
        </div>
        <div className="flex flex-col w-full lg:gap-16 gap-10 items-start">
          <div className="contentStyle">
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
          <div className="contentStyle">
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
        </div>
        <div className="flex flex-col justify-center items-start gap-6 mx-auto w-full">
          <Title title={'project.title'} />
          <a
            href="https://friendship.catholic.org.tw/"
            aria-label="Catholic Friendship House page"
            className="text-gray-400 font-semibold rounded-md shadow-customize hover:shadow-hover hover:duration-400 max-w-fit mb-4"
          >
            <Image src={webImage} alt="webImage" className="rounded-md border border-gray-200 " />
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
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 mx-auto w-full">
          <Title title={'uiAttachment.title'} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardItems.map(({ href, imageSrc, value }) => (
              <Card key={value} href={href} imageSrc={imageSrc} cardValue={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
