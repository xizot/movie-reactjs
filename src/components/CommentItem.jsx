import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAvatarURL } from "../helper/reusble";
import { DeleteOutlined } from "@ant-design/icons";

function CommentItem({ id, content, name, date, userID, handleDeleteComment }) {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        console.log(user);
        getAvatarURL(userID)
            .then((res) => {
                setAvatarUrl(res.uri);
            })
            .catch(() => setAvatarUrl(null));
    }, [userID, user]);
    return (
        <div className="c-comment" id={id}>
            {user && user._id === userID ? (
                <div
                    className="c-comment__delete"
                    onClick={() => handleDeleteComment(id)}
                >
                    <DeleteOutlined />
                </div>
            ) : (
                <></>
            )}
            <div className="c-comment__image">
                <img
                    src={
                        avatarUrl
                            ? avatarUrl
                            : process.env.PUBLIC_URL +
                              "/assets/img/no-avatar.png"
                    }
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className="c-comment__info">
                <span className="c-comment__name">{name}</span>
                <span className="c-comment__date">
                    {new Date(date).toLocaleDateString()}
                </span>
                <p className="c-comment__text">{content}</p>
            </div>
        </div>
    );
}

export default CommentItem;
