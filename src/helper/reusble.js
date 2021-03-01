import axios from "../axios";
import { useAuthorization } from "./useAuthorization";

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
            .get(`/comment/${mediaId}?page=${page}`)
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
