import React from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardApartment} from "../redux/slices/cardSlice";
import {AppDispatch, RootState} from "../redux/store";
import uniqid from "uniqid";
import SwiperCore, {Autoplay, Controller, Lazy, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {priceFormatter} from "../utils/priceFormatter";

const Card: React.FC = () => {
    SwiperCore.use([Autoplay, Controller, Lazy, Thumbs])
    const [cardSwiper, setCardSwiper] = React.useState<SwiperCore>();
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();
    const {title} = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const {cardApartment} = useSelector((state: RootState) => state.card)
    React.useEffect(() => {
        if (title) dispatch(fetchCardApartment(title))
    }, [])
    return (
        <>
            {
                cardApartment
                    ?
                    <>
                        <Breadcrumbs/>
                        <section className="card">
                            <div className="card__slider">
                                <div className="card__sliderbox">
                                    <Swiper className="card-swiper" modules={[Thumbs]}
                                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                            slidesPerView={1}
                                            watchOverflow
                                            autoplay
                                            loop
                                    >
                                        {cardApartment && cardApartment[0].photos.map(photo => (
                                            <SwiperSlide key={uniqid()}>
                                                <img
                                                    src={photo}
                                                    alt=""
                                                    className="card-swiper__img"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <Swiper className="bottom-swiper"
                                            modules={[Thumbs]}
                                            thumbs={{swiper: cardSwiper}}
                                            watchSlidesProgress
                                            watchOverflow
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={20}
                                            slidesPerView={4}
                                            breakpoints={{
                                                1025: {
                                                    direction: 'horizontal',
                                                },
                                                769: {
                                                    direction: 'vertical',
                                                    slidesPerView: 5
                                                },
                                                768: {
                                                    direction: 'horizontal',
                                                }
                                            }}
                                            slideToClickedSlide
                                    >
                                        {cardApartment && cardApartment[0].photos.map(photo => (
                                            <SwiperSlide key={uniqid()}>
                                                <img
                                                    src={photo}
                                                    alt=""
                                                    className="card-swiper__img"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="card__textbox showOnMobile">
                                    <h1 className="card__title">
                                        {cardApartment && cardApartment[0].title}
                                    </h1>
                                    <div className="offers__location">
                                        <svg className="icon">
                                            <use xlinkHref="#map-target"></use>
                                        </svg>
                                        <div
                                            className="offers__locationtext">{cardApartment && cardApartment[0].district}</div>
                                    </div>
                                    <div
                                        className="offers__price">{cardApartment && priceFormatter(+cardApartment[0].price, 'price')} ₴
                                    </div>
                                    <div
                                        className="offers__pricebottom">{cardApartment && priceFormatter(cardApartment[0].priceForM2, 'priceForM2')} ₴
                                        за м²
                                    </div>
                                    <div className="catalog__areas">
                                        <div className="catalog__areastext">
                                            Загальна площа<span>{cardApartment && cardApartment[0].area} м²</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__titleinner">Про квартиру</div>
                                <div className="card__desc">
                                    {cardApartment && cardApartment[0].description.map(text => (
                                        <p key={uniqid()}>
                                            {text}
                                        </p>
                                    ))}
                                </div>
                                <div className="card__titleinner">Інфраструктура</div>
                                <div className="card__desc">
                                    {cardApartment && cardApartment[0].location.map(text => (
                                        <p key={uniqid()}>
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="card__textbox">
                                <h1 className="card__title hideOnMobile">
                                    {cardApartment && cardApartment[0].title}
                                </h1>
                                <div className="offers__location hideOnMobile">
                                    <svg className="icon">
                                        <use xlinkHref="#map-target"></use>
                                    </svg>
                                    <div
                                        className="offers__locationtext">{cardApartment && cardApartment[0].district}</div>
                                </div>
                                <div
                                    className="offers__price hideOnMobile">{cardApartment && priceFormatter(+cardApartment[0].price, 'price')} ₴
                                </div>
                                <div
                                    className="offers__pricebottom hideOnMobile">{cardApartment && priceFormatter(cardApartment[0].priceForM2, 'priceForM2')} ₴
                                    за м²
                                </div>
                                <div className="catalog__areas hideOnMobile">
                                    <div className="catalog__areastext">
                                        Загальна площа<span>{cardApartment && cardApartment[0].area} м²</span>
                                    </div>
                                </div>
                                <div className="card__titleinner">О доме</div>
                                <ul className="card__about">
                                    {cardApartment && cardApartment[0].features.map(feature => (
                                        <li key={uniqid()} className="card__option">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </>
                    : <div>not found</div>
            }
        </>
    );
};

export default Card;