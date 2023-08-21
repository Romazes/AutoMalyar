import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

interface IImage {
  id: number;
  img: StaticImageData;
  imgAlt: string;
}
interface IWorkshopGalleryCarouselProps {
  images: IImage[];
}

export const WorkshopGalleryCarousel: FC<IWorkshopGalleryCarouselProps> = ({
  images,
}) => {
  return (
    <Carousel
      animationHandler={'slide'}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={true}
      showStatus={false}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={100}
    >
      {images.map((x) => (
        <div key={x.id}>
          <Image src={x.img} alt={x.imgAlt} />
        </div>
      ))}
    </Carousel>
  );
};
