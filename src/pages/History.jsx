import React from "react";
import SearchItem from "../components/SearchItem";

//chua xong 
function Search() {

    return (
        <div className="p-search">
            <div className="l-container">
                <div className="p-search__content">
                    <div className="p-search__left">
                       
                    </div>
                    <div className="p-search__right">
                        <div className="p-search__top">
                            <h3>History</h3>
                        </div>

                        <div className="p-search__list row">
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                                watched="2.0"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                                watched="3.0"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                                watched="1.0"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                            />
                            <SearchItem
                                link="/movie"
                                image="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                name="Sotn can all"
                                rated="5.0"
                                actor="SOTN"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
