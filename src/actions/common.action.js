import axios from "../axios";
import { useAuthorization } from "../helper";

export const deleteByID = (mediaId, type) => {
    const url = type === "movie" ? "/media/movie" : "/media/tv";
    return new Promise((resolve, reject) => {
        axios
            .patch(url, { mediaId }, { headers: useAuthorization() })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
