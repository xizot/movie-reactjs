import axios from "../axios";
import { useAuthorization } from "./useAuthorization";

export const getAvatarURL = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/user/${id}/avatar`)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};

export const getImageList = (id, type) => {
    let query = `/tmdb/movie/${id}/images`;
    if (type === "tv") {
        query = `/tmdb/tv/${id}/images`;
    }
    return new Promise((resolve, reject) => {
        axios
            .get(query, { headers: useAuthorization() })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};
export const getComment = (mediaId, page = 1) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/comment/${mediaId}?page=${page}&limit=10`)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export const postComment = (mediaId, content) => {
    return new Promise((resolve, reject) => {
        axios
            .post(
                `/comment`,
                { mediaId, content },
                { headers: useAuthorization() }
            )
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export const deleteComment = (commentId) => {
    return new Promise((resolve, reject) => {
        axios
            .patch("/comment", { commentId }, { headers: useAuthorization() })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export const getRatingCount = (mediaId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/rating/${mediaId}/count`)
            .then((res) => resolve(res.data.liked))
            .catch((err) => reject(err));
    });
};

export const checkLiked = (mediaId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/rating/${mediaId}/check`, { headers: useAuthorization() })
            .then((res) => resolve(res.data))
            .catch(() => reject(null));
    });
};

export const checkAdd = (mediaId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/watchlist/${mediaId}`, { headers: useAuthorization() })
            .then((res) => resolve(res.data))
            .catch(() => reject(null));
    });
};

export const addMedia = (mediaId) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/watchlist`, { mediaId }, { headers: useAuthorization() })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};
export const removeWatchList = (mediaId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/watchlist/${mediaId}`, { headers: useAuthorization() })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};
export const rateMedia = (mediaId, rating = "none") => {
    return new Promise((resolve, reject) => {
        axios
            .post(
                `/rating`,
                { mediaId, rating },
                { headers: useAuthorization() }
            )
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};

export const getPopular = () => {
    return new Promise((resolve, reject) => {
        axios
            .get("/media/fetch?sort=popularity:-1&limit=3&type=movie")
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export const sendVerify = () => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/auth/sendconfirmemail/`, { headers: useAuthorization() })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};
