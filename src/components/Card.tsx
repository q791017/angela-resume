'use client'

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image"

type CardProps = {
    href: string,
    imageSrc: StaticImageData;
    cardValue: string;
}

function Card({ href, imageSrc, cardValue }: Readonly<CardProps>) {
    const t = useTranslations()
    return (
        <a href={href} className="bg-white shadow-customize rounded-md flex flex-col items-center overflow-hidden hover:brightness-90 hover:duration-400">
            <Image src={imageSrc} alt="UI-image" className="min-h-40 w-full shadow-md" />
            <p className="p-2">{t(`ui.${cardValue}`)}</p>
        </a>
    )
}

export default Card;