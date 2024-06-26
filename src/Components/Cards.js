import { useState } from "react";
import Card from "./Card";




function Cards(props){
    
    let courses=props.courses;
    let cat=props.cat;
    // console.log(courses)
    function getCourses(){
        if(cat==='All'){
            let allCourse=[];
            Object.values(courses).forEach(array=>{
                array.forEach(detaildata=>{
                    allCourse.push(detaildata);
                });
            });
            // console.log(allCourse);
            return allCourse;
        }else{
            return courses[cat];
        }
    }

    return(
        <div className="flex justify-center flex-wrap w-5/6 p-3">
            {
                getCourses().map((detail)=>{
                    return <Card  key={detail.id} detail={detail}></Card>
                    // return <Card pushPopLikes={pushPopLikes} setLikedArray={setLikedArray} likedArray={likedArray} key={detail.id} detail={detail}></Card>
                })
            }
        </div>
    )
}

export default Cards;