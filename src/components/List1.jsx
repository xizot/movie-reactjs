import React from "react";
import Item1 from "./../components/Item1";
import { Link } from "react-router-dom";
function List1({ subtitle, title, list }) {
    return (
        <section className="p-top1 ">
            <div className="l-container">
                <div className="p-top1__title u-fade">
                    <h4 className="c-subtitle">{subtitle}</h4>
                    <h3 className="c-title">{title}</h3>
                </div>
                <div className="p-top1__content row u-fade">
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
                </div>
                <Link to="/movie" className="c-btn c-btn--primary c-more u-fade">
                    BROWSE ALL MOVIES
                </Link>
            </div>
        </section>
    );
}

export default List1;
