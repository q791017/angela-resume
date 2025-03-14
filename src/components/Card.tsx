'use client';

import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';

type CardProps = {
  href: string;
  imageSrc: StaticImageData;
  cardValue: string;
};

function Card({ href, imageSrc, cardValue }: Readonly<CardProps>) {
  const t = useTranslations();
  return (
    <a
      href={href}
      className="bg-white rounded-md flex flex-col items-center overflow-hidden border border-gray-200 shadow-customize hover:duration-400 hover:shadow-hover"
    >
      <Image src={imageSrc} alt="UI-image" className="min-h-40 w-full shadow-md" />
      <p className="p-2">{t(`uiAttachment.${cardValue}`)}</p>
    </a>
  );
}

export default Card;
