import "./academic-training-courses.css";
import { AcademicTrainingCoursesList } from "./AcademicTrainingList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AcademicTrainingCourses = () => {

    return (
        <section className='academinc_training_courses' id="trainning">
            <h3 className="academic_training_courses_subTitle">Cursos</h3>
            <div className='slider_courses'>
                <Swiper
                      spaceBetween={15}
                      slidesPerView={3}
                      autoplay={{
                        delay: 1800,
                        disableOnInteraction: true,
                      }}
                      modules={[Autoplay, Controller]}
                      loop
                    >
                      {AcademicTrainingCoursesList.map((item, index) => (
                        <SwiperSlide className="swiper_slide" key={index}>
                          <div className="swiper_slide_div">
                            <img  src={item.front_image} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
            </div>


        </section>
    );
};

export default AcademicTrainingCourses