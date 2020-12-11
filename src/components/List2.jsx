import React from 'react'
import Item2 from "./../components/Item2";
import { Link } from "react-router-dom";

function List2({subtitle, title, list}) {
    return (
        <section className="p-top2">
            <div className="l-container">
                <div className="p-top2__title ">
                    <h4 className="c-subtitle">{subtitle}</h4>
                    <h3 className="c-title">{title}</h3>
                </div>
                <div className="p-top2__content row ">
                    {list.length && list.map((f,idx) => (
                        <Item2
                            key = {idx}
                            id = {f.id}
                            image = {f.image}
                            resolution = {f.resolution}
                            rated = {f.rated}
                            minutes = {f.minutes}
                            name = {f.name}
                            age = {f.age}
                            cat = {f.cat}
                        />

                    ))}
                </div>
                <Link to="/movie" className="c-btn c-btn--primary c-more">
                    BROWSE ALL MOVIES
                </Link>
            </div>
        </section>

    )
}

export default List2
