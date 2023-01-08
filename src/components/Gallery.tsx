import { Image } from '@chakra-ui/react';
import 'lightgallery/css/lightgallery.css';
import LightGallery, { LightGalleryProps } from 'lightgallery/react';
import { useId } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GalleryImage {
    srcThumb: string,
    srcFull: string,
    alt: string
}

interface GalleryProps extends LightGalleryProps {
    galleryItems: GalleryImage[]
}

function Gallery({ galleryItems }: GalleryProps) {
    const id = useId().replaceAll(':', '_')
    return (
        <LightGallery selector={`.gallery-${id}-img`} licenseKey='1234-5678-123-4567'>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                initialSlide={1}>
                    
                {galleryItems.map(({ srcThumb, srcFull, alt }, idx) => (
                    <SwiperSlide style={{ width: 'auto' }} key={idx}>
                        <a className={`gallery-${id}-img`} href={srcFull}>
                            <Image maxH='250px' w='auto' borderRadius='base' src={srcThumb} alt={alt} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </LightGallery>
    )
}

export default Gallery