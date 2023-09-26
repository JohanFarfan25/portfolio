import "./academic-training.css";
import { AcademicTrainingList } from "./AcademicTrainingList";
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { IconOutlineArrowLeft, IconOutlineArrowRight } from '../../buttons/Button';
import RotativeImagen from "../../RotativeImagen";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProfesionalAcademicTraining = () => {

    const [select, setSelect] = useState();

    const nextSlide = () => {
        select?.slideNext()
    };

    const prevSlide = () => {
        select?.slidePrev()
    };


    return (
        <section className='academinc_training' id="trainning">
            <h1 className="academic_training_title">Formación academica</h1>
            <h3 className="academic_training_subTitle">Profesional, Tecnólogos, Técnicos</h3>
            <div className='slider'>
                <IconButton
                    size="small"
                    className="leftBtn"
                    onClick={prevSlide}
                >
                    <IconOutlineArrowLeft />
                </IconButton>

                <Swiper
                    className="style_card"
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
                    onSwiper={setSelect}
                    loop
                >
                    {AcademicTrainingList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='container__items style_card' key={index}>
                                <div className="image" >
                                    <RotativeImagen front_image={item.front_image} back_image={item.back_image} />
                                </div>
                                <h1 className="title_card">{item.title}</h1>
                                <p className="description_card">{item.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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

export default ProfesionalAcademicTraining