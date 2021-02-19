import React, { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import SearchItem from "../components/SearchItem";
import queryString from "query-string";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import {
    changeSearchKey,
    getFilter,
    getSearch,
} from "../actions/search.action";
import { catFilter } from "./../helper";
function Search({ location }) {
    const { search } = location;
    const searchKey = useSelector((state) => state.search.searchKey);
    const searchResults = useSelector((state) => state.search.data);
    const searchFilter = useSelector((state) => state.search.filter);
    const isFilter = useSelector((state) => state.search.isFilter);

    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleSearchValue = (e) => {
        let value = e.target.value;
        dispatch(changeSearchKey(value));
    };
    const handleCatChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setCat((state) => {
            return state.map((item) => {
                item.select = false;
                if (item.value === value) {
                    item.select = isChecked;
                }
                dispatch(getFilter(value));
                return item;
            });
        });
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(getSearch(searchKey));
    };
    useEffect(() => {
        if (search && search.length) {
            const searchVal = queryString.parse(search).q;
            dispatch(changeSearchKey(searchVal));
            dispatch(getSearch(searchVal));
        }
        $(".js-toggle").on("click", function () {
            $(this).parent().find("ul").slideToggle();
            $(this).toggleClass("is-open");
        });
        setCat(catFilter);
    }, [dispatch, search]);

    return (
        <div className="p-search">
            <div className="l-container">
                <div className="p-search__content js-dark-here">
                    <div className="p-search__left">
                        <h3>Search</h3>
                        <div className="p-search__filter">
                            <div className="p-search__filter__control js-toggle ">
                                <h4>Categories</h4>
                                <PlusOutlined className="plus" />
                                <MinusOutlined className="minus" />
                            </div>
                            <ul>
                                {cat.length &&
                                    cat.map((item) => (
                                        <li key={item.value}>
                                            <input
                                                type="radio"
                                                name={item.name}
                                                value={item.value}
                                                checked={item.select}
                                                onChange={(e) =>
                                                    handleCatChange(e)
                                                }
                                            />
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
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
                                    onChange={(e) => handleSearchValue(e)}
                                    value={searchKey}
                                />
                            </form>

                            <select className="p-search__sort">
                                <option value="">Sort by: Latest</option>
                                <option value="">Sort by: Top Rate</option>
                                <option value="">Sort by: A-Z</option>
                                <option value="">Sort by: Z-A</option>
                            </select>
                        </div>

                        <div className="p-search__list row">
                            {isFilter
                                ? (searchFilter.length &&
                                      searchFilter.map((item, index) => (
                                          <React.Fragment key={index}>
                                              <SearchItem
                                                  id={item._id}
                                                  image={item.posterPath}
                                                  name={item.title}
                                                  rated={item.popularity}
                                                  cat={item.genres.join(", ")}
                                                  overview={
                                                      item.overview.substring(
                                                          0,
                                                          150
                                                      ) + "..."
                                                  }
                                                  type={
                                                      item.tvShow
                                                          ? "tvshow"
                                                          : "movie"
                                                  }
                                              />
                                          </React.Fragment>
                                      ))) || (
                                      <p className="p-search__list--empty">
                                          No filter results found
                                      </p>
                                  )
                                : (searchResults.length &&
                                      searchResults.map((item, index) => (
                                          <React.Fragment key={index}>
                                              <SearchItem
                                                  id={item._id}
                                                  image={item.posterPath}
                                                  name={item.title}
                                                  rated={item.popularity}
                                                  actor=""
                                                  cat={item.genres.join(", ")}
                                                  overview={
                                                      item.overview.substring(
                                                          0,
                                                          150
                                                      ) + "..."
                                                  }
                                                  type={
                                                      item.tvShow
                                                          ? "tvshow"
                                                          : "movie"
                                                  }
                                              />
                                          </React.Fragment>
                                      ))) || (
                                      <p className="p-search__list--empty">
                                          No search results found
                                      </p>
                                  )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
