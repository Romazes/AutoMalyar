'use client';
import { WorkshopGalleryCarousel } from './WorkshopGalleryCarousel';

import ImgLeftBlock1 from '@/../public/images/gallery-left-block-1.png';
import ImgLeftBlock2 from '@/../public/images/gallery-left-block-2.png';
import ImgRightBlockBellow1 from '@/../public/images/gallery-right-block-below-1.png';
import ImgRightBlockBellow2 from '@/../public/images/gallery-right-block-below-2.png';
import ImgRightBlockUpper1 from '@/../public/images/gallery-right-block-upper-1.png';
import ImgRightBlockUpper2 from '@/../public/images/gallery-right-block-upper-2.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const WorkshopGallery = () => {
  const imageList = [
    {
      id: 0,
      img: ImgLeftBlock1,
      imgAlt: 'пошкоджене ліве переднє крило автівки після ДТП',
    },
    { id: 1, img: ImgLeftBlock2, imgAlt: 'відремонтоване ліве переднє крило' },
    {
      id: 2,
      img: ImgRightBlockUpper1,
      imgAlt: 'пошкоджене праве крило автівки після ДТП',
    },
    {
      id: 3,
      img: ImgRightBlockUpper2,
      imgAlt: 'відремонтоване праве крило автівки',
    },
    {
      id: 4,
      img: ImgRightBlockBellow1,
      imgAlt: 'ушкодження правої двері автомобіля після ДТП',
    },
    {
      id: 5,
      img: ImgRightBlockBellow2,
      imgAlt: 'відремонтовані праві двері автомобіля',
    },
  ];

  return (
    <div
      id="gallery-section"
      className="grid select-none lg:grid-cols-[1.185fr_1fr_1fr]"
    >
      <div className="lg:row-span-2">
        <WorkshopGalleryCarousel images={imageList.slice(0, 2)} />
      </div>
      <div className="lg:col-span-2">
        <WorkshopGalleryCarousel
          images={imageList.slice(2, 4)}
          intervalChangeImageMilliSecond={3500}
        />
      </div>
      <div className="lg:col-span-2">
        <WorkshopGalleryCarousel
          images={imageList.slice(4, 6)}
          intervalChangeImageMilliSecond={4000}
        />
      </div>
    </div>
  );
};
