import React from "react";

function CommentItem({id, avatar, content, name }) {
    return (
        <div className="c-comment" id={id}>
            <div className="c-comment__image">
                <img src={avatar} alt="" />
            </div>
            <div className="c-comment__info">
                <span className="c-comment__name">{name}</span>
                <p className="c-comment__text">{content}</p>
            </div>
        </div>
    );
}

export default CommentItem;
