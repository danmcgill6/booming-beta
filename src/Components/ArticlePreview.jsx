import React, { Component } from "react";

const ArticlePreview = ({image, title, description}) => {
    return(
        <div class="card">
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="#" class="btn btn-primary">View</a>
        </div>
        </div>
    )
}

export default ArticlePreview;






