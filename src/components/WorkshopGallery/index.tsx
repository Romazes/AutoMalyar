'use client';
import { WorkshopGalleryCarousel } from './WorkshopGalleryCarousel';

import Img3 from '@/../public/images/classic-paint-car.png';
import Img4 from '@/../public/images/gallery-1.png';
import Img5 from '@/../public/images/gallery-2.jpg';
import Img1 from '@/../public/images/metallic-paint-car.png';
import Img2 from '@/../public/images/oil-paint-car.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const WorkshopGallery = () => {
  const imageList = [
    { id: 0, img: Img1, imgAlt: 'img 0' },
    { id: 1, img: Img3, imgAlt: 'img 1' },
    { id: 2, img: Img2, imgAlt: 'img 2' },
    { id: 3, img: Img4, imgAlt: 'img 3' },
    { id: 4, img: Img5, imgAlt: 'img 4' },
  ];

  return (
    <div className="grid select-none lg:grid-cols-[1fr_1fr_1fr]">
      <div className="lg:row-span-2">
        <WorkshopGalleryCarousel images={imageList.slice(3, 5)} />
      </div>
      <div className="lg:col-span-1">
        <WorkshopGalleryCarousel images={imageList.slice(0, 3)} />
      </div>
      <div className="lg:col-span-1">
        <WorkshopGalleryCarousel images={imageList.slice(1, 3).reverse()} />
      </div>
      <div className="lg:col-span-2">
        <WorkshopGalleryCarousel images={imageList.slice(0, 3)} />
      </div>
    </div>
  );
};
