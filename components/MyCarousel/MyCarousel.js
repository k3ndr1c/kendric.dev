import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Dots } from '@brainhubeu/react-carousel';
import utilStyles from '../../styles/utils.module.css'


const Carousel = dynamic(
  () => import('@brainhubeu/react-carousel'),
  { ssr: false }
 );


export default function MyCarousel({ images }) {
  const [value, setValue] = useState(0);
  
  return (
    <>
      <Carousel
        value={value}
        onChange={setValue}
      >
        {images.map((imgSrc, index) => (
          <img 
            className={utilStyles.imageMaxSize}
            key={index} 
            src={imgSrc}
          />
        )
      )}
      </Carousel>
      <Dots 
        value={value} 
        onChange={setValue} 
        number={images.length}
      />
    </>
  )
 }