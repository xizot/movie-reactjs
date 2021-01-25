import React from "react";
import Item1 from "./../components/Item1";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function List1({ subtitle, title, list }) {
    const SampleNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section className="p-top1 ">
            <div className="l-container">
                <div className="p-top1__title u-fade">
                    <h4 className="c-subtitle">{subtitle}</h4>
                    <h3 className="c-title">{title}</h3>
                </div>
                <div className="p-top1__content">
                    <Slider {...settings}>
                        {list.length &&
                            list.map((f, idx) => (
                                <Item1
                                    key={idx}
                                    id={f.id}
                                    image={f.image}
                                    cat={f.cat}
                                    name={f.name}
                                    chapter={f.chapter}
                                />
                            ))}
                    </Slider>
                </div>
                <Link
                    to="/movie"
                    className="c-btn c-btn--primary c-more u-fade"
                >
                    BROWSE ALL MOVIES
                </Link>
            </div>
        </section>
    );
}

export default List1;
