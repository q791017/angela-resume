'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import Card from './Card';
import Modal from './Modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

type CardDataProps = {
  title: string;
  thumbnail: string;
  images: string[];
};

function CardComponent() {
  const [cardData, setCardData] = useState<CardDataProps[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardDataProps | null>(null);

  useEffect(() => {
    const loadCardData = async () => {
      try {
        const response = await fetch('/images/designImages.json');
        if (!response.ok) {
          throw new Error('Failed to fetch designImages.json');
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error('Error loading card data', error);
      }
    };
    loadCardData();
  }, []);

  return (
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card) => (
        <Card
          key={card.title}
          imageSrc={card.thumbnail}
          cardValue={card.title}
          onClick={() => setSelectedCard(card)}
        />
      ))}
      <Modal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
        {selectedCard && (
          <Carousel className="flex w-full items-center justify-center gap-4">
            <CarouselPrevious />
            <CarouselContent className="">
              {selectedCard.images.map((image, index) => (
                <CarouselItem key={image}>
                  {image.endsWith('.mp4') ? (
                    <video
                      src={image}
                      width={600}
                      height={300}
                      controls
                      className="rounded-md min-w-full"
                    />
                  ) : (
                    <Image
                      key={image}
                      src={image}
                      alt={`image ${index + 1}`}
                      width={600}
                      height={300}
                      unoptimized
                      className="rounded-md min-w-full object-contain"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        )}
      </Modal>
    </div>
  );
}

export default CardComponent;
