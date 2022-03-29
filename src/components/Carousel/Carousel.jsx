import React from 'react';

//Import Bootstrap
import { Carousel } from 'react-bootstrap';

//Static resources
import banner from '../../staticResources/banner1.jpg';
import banner2 from '../../staticResources/banner2.jpg';
import banner3 from '../../staticResources/banner3.jpg';

//Style
import styles from './Carousel.module.css';

const CarrouselBanner = () => {
    return (
        <div>
            <div className={styles.Home__CarrouselContainer}>
                <Carousel className={styles.firstCarousel}>
                    <Carousel.Item>
                        <img
                            height='100%'
                            className='d-block w-100'
                            src={banner}
                            alt='First slide'
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            height='100%'
                            className='d-block w-100'
                            src={banner2}
                            alt='Second slide'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height='100%'
                            className='d-block w-100'
                            src={banner3}
                            alt='Third slide'
                        />
                    </Carousel.Item>
                </Carousel>
                <Carousel className={styles.secondCarousel}>
                    <Carousel.Item className={styles.carouselItem}>
                        <iframe
                            height='450px'
                            width='600px'
                            src='https://www.youtube.com/embed/KREBGtEeW9U'
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen></iframe>
                    </Carousel.Item>

                    <Carousel.Item>
                        <iframe
                            height='450px'
                            width='600px'
                            src='https://www.youtube.com/embed/6QkTCmhOzuA'
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe
                            height='450px'
                            width='600px'
                            src='https://www.youtube.com/embed/eW7Twd85m2g'
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen></iframe>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default CarrouselBanner;
