import React, { useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/user.action";
// import { history } from "./../helper";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
function AddFilm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Header />
      {user && user.role === "admin" ? (
        <div className="p-admin">
          <div className="p-admin__content">
            <div className="p-admin__left">
              <div className="p-admin__option">
                <Link to="/">
                  <HomeOutlined />
                  <p>Trang Chủ</p>
                </Link>
              </div>
              <div className="p-admin__option">
                <img
                  src="https://provider-static.plex.tv/icons/vod-560.svg"
                  alt=""
                />
                <p>Movie & Show</p>
              </div>
              <div className="p-admin__option">
                <img
                  src="https://provider-static.plex.tv/icons/epg-560.svg"
                  alt=""
                />
                <p>TV & Show</p>
              </div>
            </div>
            <div className="p-admin__right"></div>
          </div>
        </div>
      ) : (
        "Bạn không có quyền truy cập"
      )}
      <Footer />
    </>
  );
}

export default AddFilm;
