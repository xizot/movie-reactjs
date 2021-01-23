import React, { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import SearchItem from "../components/SearchItem";
import $ from "jquery";
function Search() {
    const [searchKey, setSearchKey] = useState("");
    const [date, setDate] = useState([]);
    const [cat, setCat] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        if (value && value.length) {
            setSearchKey(value);
        }
    };
    const handleDateChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        let allFlag = true;
        setDate((state) => {
            return state.map((item, length) => {
                if (value === "all") {
                    item.select = isChecked;
                    return item;
                }
                if (item.value === value) {
                    item.select = isChecked;
                }

                if (!item.select && item.value !== "all") allFlag = false;
                if (item.value === "all" && allFlag) {
                    item.select = true;
                } else if (item.value === "all" && !allFlag) {
                    item.select = false;
                }
                return item;
            });
        });
    };
    const handleCatChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        let allFlag = true;
        setCat((state) => {
            return state.map((item, length) => {
                if (value === "all") {
                    item.select = isChecked;
                    return item;
                }
                if (item.value === value) {
                    item.select = isChecked;
                }

                if (!item.select && item.value !== "all") allFlag = false;
                if (item.value === "all" && allFlag) {
                    item.select = true;
                } else if (item.value === "all" && !allFlag) {
                    item.select = false;
                }
                return item;
            });
        });
    };
    const submitSearch = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
    }, [searchKey]);
    return (
        <div className="p-search">
            <div className="l-container">
                <div className="p-search__content">
                    <div className="p-search__left">
                        <h3>History</h3>
                    </div>
                    <div className="p-search__right">
                        <div className="p-search__top">
                            <form action="" onSubmit={(e) => submitSearch(e)}>
                                <div
                                    className="search-icon"
                                    onClick={(e) => submitSearch(e)}
                                >
                                    <SearchOutlined />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your film"
                                    onChange={(e) => handleSearch(e)}
                                    value={searchKey}
                                />
                            </form>

                            <select className="p-search__sort">
                                <option value="">Sort by: Latest</option>
                            </select>
                        </div>

                        <div className="p-search__list row">
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
