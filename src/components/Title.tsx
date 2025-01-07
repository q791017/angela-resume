'use client';

import { useTranslations } from 'next-intl';

type TitleProps = {
  title: string
}

function Title({ title }: Readonly<TitleProps>) {
  const t = useTranslations();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="font-bold text-xl">{t(title)}</div>
      <div className="border-b border-b-gray-300" />
    </div>
  );
}

export default Title;
