import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />
      <div className="p-search">
        <div className="l-container">
          <div className="p-search__content">
            <div className="p-search__left">
              <h3>Search</h3>
              <div className="p-search__filter">
                <h4>Type</h4>
                <ul>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <span>Action</span>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <span>Romantic</span>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <span>All</span>
                  </li>
                </ul>
              </div>
              <div className="p-search__filter">
                <h4>Date</h4>
                <ul>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <span>2020</span>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <span>2019</span>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <span>All</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-search__right">
              <div className="p-search__top">
                <form action="">
                  <SearchOutlined />
                  <input type="search" placeholder="Enter your film" />
                </form>

                <select className="p-search__sort">
                  <option value="">Sort by: Latest</option>
                  <option value="">Sort by: Top Rate</option>
                  <option value="">Sort by: A-Z</option>
                  <option value="">Sort by: Z-A</option>
                </select>
              </div>

              <div className="p-search__list">
                <div className="c-search-item">
                  <div className="c-search-item__img">
                    <img src="" alt="" />
                  </div>
                  <div className="c-search-item__name">Hello may cung</div>
                  <div className="c-search-item__bottom">
                    <div className="c-search-item__rated">5.0</div>
                    <div className="c-search-item__actor">SOTN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
