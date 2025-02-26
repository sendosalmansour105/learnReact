import React from "react";
import NovelData from "./NovelData";

function NovelBlog(){
    const novel={
        title:'harry',
        auther:"kd",
        description:"ddd ddd kkk",
        type:"1"
    };

    return(
        <div>
            <h2>Noval Functions</h2>
            <NovelData title={novel.title}
                       auther={novel.auther}
                       description={novel.description}
                       type={novel.type}
            />
        </div>
    )
}
export default NovelBlog