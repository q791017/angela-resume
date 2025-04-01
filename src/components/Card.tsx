'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

type CardProps = {
  imageSrc: string;
  cardValue: string;
  onClick?: () => void;
};

function Card({ imageSrc, cardValue, onClick }: Readonly<CardProps>) {
  const t = useTranslations();
  return (
    <button
      className="bg-white rounded-md flex flex-col items-center overflow-hidden border border-gray-200 shadow-customize hover:duration-400 hover:shadow-hover"
      onClick={onClick}
    >
      <Image
        src={imageSrc}
        alt="UI-image"
        className="min-h-40 w-full shadow-md"
        width={300}
        height={300}
      />
      <p className="p-2">{t(`uiAttachment.${cardValue}`)}</p>
    </button>
  );
}

export default Card;
