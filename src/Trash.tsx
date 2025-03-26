import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/system'
import {useStyles} from './styles/home';
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
// import function to register Swiper custom elements
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface Props {
    children: any;
    handleSwiper: () => void;

}

const nextHandler = (swiper: SwiperClass,  handleSwiper: () => void) => {
    handleSwiper()
    swiper.slideNext()
}
const prevHandler = (swiper: SwiperClass,  handleSwiper: () => void) => {
    handleSwiper()
    swiper.slidePrev()
}

const SwiperButtonNext: React.FC<Props> = ({ children, handleSwiper }) => {
    const swiper = useSwiper();
    return <button onClick={()=> nextHandler(swiper, handleSwiper)}>{children}</button>;
};
const SwiperButtonPrev: React.FC<Props> = ({ children, handleSwiper }) => {
    const swiper = useSwiper();
    return <button onClick={()=> prevHandler(swiper, handleSwiper)}>{children}</button>;
};



const HomeContainer: React.FC = () => {
    const classes = useStyles()
    var [currentDotState, setCurrentDotState] = useState<any>(0)
    var currentDot = 2
    const Hero = styled('section')({})
    const swiperRef = useRef<any>(null)

    useEffect(()=>{
        if(swiperRef.current){
            setCurrentDotState(swiperRef.current.firstElementChild.querySelector(".swiper-slide-active").ariaLabel[0])
        }
    }, [])

    const handleSwiper =()=>{
        if(swiperRef.current){
            setCurrentDotState(swiperRef.current.firstElementChild.querySelector(".swiper-slide-active").ariaLabel[0])
        }
    }


  return (
        <Hero id='hero-section'>
            <div id='counter'>
                <div className={classes.currentSideNumber}>{currentDotState}</div>
                <span className={classes.sideNumberSpan}>/</span>
                <div className={classes.sideNumber}>7</div>
            </div>
            {/* <div className={classes.trackDots}>
                <div className={currentDot === 0 ? classes.boxDotActive : classes.boxDot}></div>
                <div className={currentDot === 1 ? classes.boxDotActive : classes.boxDot}></div>
                <div className={currentDot === 2 ? classes.boxDotActive : classes.boxDot}></div>
                <div className={currentDot === 3 ? classes.boxDotActive : classes.boxDot}></div>
                <div className={currentDot === 4 ? classes.boxDotActive : classes.boxDot}></div>
                <div className={currentDot === 5 ? classes.boxDotActive : classes.boxDot}></div>
                <div className={currentDot === 6 ? classes.boxDotActive : classes.boxDot}></div>

            </div> */}
            <section>
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]} 
                    slidesPerView={1}
                    ref={swiperRef}>


                    <SwiperButtonPrev handleSwiper={handleSwiper}>
                        <div className={classes.sliderButtonLeft}>
                            <TfiAngleLeft  className={classes.buttonIcon}/>
                        </div>
                    </SwiperButtonPrev>
                    <SwiperButtonNext handleSwiper={handleSwiper}>
                        <div className={classes.sliderButtonRight}>
                            <TfiAngleRight  className={classes.buttonIcon}/>
                        </div>
                    </SwiperButtonNext>
                   
                    <div></div>




                    <SwiperSlide>
                        <div>
                            <img src="/imgs/fin1.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'contain'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="/imgs/fin2.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'contain'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea1} style={{position: 'absolute', width: '100%', height: '100%', top: '254px',}}>
                                    <h2 className={classes.textAreaH2}>STUDENT LOANS</h2>
                                    <p className={classes.textAreaP}>Get the Financial Support You Need for College</p>
                                    <div className={classes.slideButton}>
                                        <a href="" className={classes.textAreaPBtn}>Click Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin3.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'cover',}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea2} style={{position: 'absolute', width: '100%', height: '100%', top: '84px',}}>
                                    <h2 className={classes.textAreaH2} style={{color: 'rgb(66, 36, 99)'}}>Does your family have a safety net if the unexpected hits?</h2>
                                    <p className={classes.textAreaP}>Protect your loan balance or loan payments today!</p>
                                    <div className={classes.slideButton}>
                                        <a href="" className={classes.textAreaPBtn}>Click Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin4.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea3} style={{position: 'absolute', width: '100%', height: '100%', top: '204px',}}>
                                    <h2 className={classes.textAreaH2} style={{color: '#eee', marginBottom: '20px'}}>We're Here To Help You GET THE CAR YOU WANT</h2>
                                    <div className={classes.slideButton}>
                                        <a href="" className={classes.textAreaPBtn}>Get Pre-Approved Today</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin5.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer}>
                                <div className={classes.textArea4} style={{position: 'absolute', width: '100%', height: '100%', top: '204px',}}>
                                    <h2 className={classes.textAreaH2} style={{color: '#eee'}}>Mechanical Breakdown Protection</h2>
                                    <p className={classes.textAreaP}>Protect your loan balance or loan payments today!</p>
                                    <div className={classes.slideButton}>
                                        <a href="" className={classes.textAreaPBtn}>More Details Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin6.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div className={classes.textContainer} style={{maxWidth: '100%'}}>
                                <div className={classes.textArea5} style={{position: 'absolute', width: '100%', height: '100%', top: '254px', maxWidth: '100%', textAlign: 'center',}}>
                                    <h2 className={classes.textAreaH2} style={{color: 'rgb(34, 34, 34)'}}>Need Cash Fast?</h2>
                                    <p className={classes.textAreaP} style={{color: 'rgb(34, 34, 34)', marginBottom: '40px'}}>Check Out Our Cash N' Dash Payday Alternative Loan</p>
                                    <div className={classes.slideButton}>
                                        <a href="" className={classes.textAreaPBtn}>More Details Here</a>
                                    </div>
                                </div>
                            </div>
                            <img src="/imgs/fin7.jpg" alt="" style={{verticalAlign: "middle", width: '100%', height: '100vh', objectFit: 'cover'}}/>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
        </Hero>
  )
}

export default HomeContainer
