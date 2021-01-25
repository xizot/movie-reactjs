import React from "react";
import Item2 from "./../components/Item2";
import { Link } from "react-router-dom";
import Slider2 from "react-slick";

function List2({ subtitle, title, list }) {
    console.log(list);
    const SampleNextArrow = (props) => {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    };

    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
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
        <section className="p-top2 ">
            <div className="l-container">
                <div className="p-top2__title u-fade">
                    <h4 className="c-subtitle">{subtitle}</h4>
                    <h3 className="c-title">{title}</h3>
                </div>
                <div className="p-top2__content">
                    {list.length && (
                        <Slider2 {...settings}>
                            {list.map((f, idx) => (
                                <Item2
                                    key={idx}
                                    id={f.id}
                                    image={f.image}
                                    resolution={f.resolution}
                                    rated={f.rated}
                                    minutes={f.minutes}
                                    name={f.name}
                                    age={f.age}
                                    cat={f.cat}
                                />
                            ))}
                        </Slider2>
                    )}
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

export default List2;
