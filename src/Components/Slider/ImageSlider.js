import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { IconButton } from '@mui/material';
import { IconOutlineArrowLeft, IconOutlineArrowRight } from '../buttons/Button';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='academinc_training'>
            <h1 className="academic_training_title">Formación academica</h1>
            <div className='slider'>
                <IconButton
                    size="small"
                    className="leftBtn"
                    onClick={prevSlide}
                >
                    <IconOutlineArrowLeft />
                </IconButton>

                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}>
                            {index === current && (
                                <div className='container__items' style={{ backgroundImage: `url("${slide.image}")` }}>
                                    <h1 className="title_card">Análisis de datos</h1>
                                    <p className="description_card">2018 - UFRP</p>
                                </div>
                            )}
                        </div>
                    );
                })}
                <IconButton
                    size="small"
                    className="rigthBtn"
                    onClick={nextSlide}
                >
                    <IconOutlineArrowRight />
                </IconButton>
            </div>
        </section>
    );
};

export default ImageSlider;