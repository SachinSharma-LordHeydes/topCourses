import { useState } from "react";

import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from "react-toastify";

function Card(props){
    let detail=props.detail;


    const [likedArray,setLikedArray]=useState([]);
    function pushPopLikes(LikeTitle){
        if(likedArray.includes(LikeTitle)){
            const newLikedArray = likedArray.filter(item => item !== LikeTitle);
            
            setLikedArray(newLikedArray);
            toast.warning('Like removed from '+ LikeTitle);
            console.log(newLikedArray)
            // console.log("Unclicked "+LikeTitle)
        }else{
            const newLikedArray = [...likedArray, LikeTitle];
            setLikedArray(newLikedArray);
            toast.success('Liked To '+LikeTitle)
            console.log(newLikedArray)
            // console.log("clicked "+LikeTitle)
        }
    }

    // console.log(detail.title)
    return(
        <div className='p-2 w-1/4 m-3 bg-slate-900 text-white'>
            <div className='relative'>
                <img src={detail.image.url}></img>
            <div className=' bg-white rounded-full p-0.5 absolute right-0.5 bottom-0.5'>
                {/* <FcLike onClick={()=>pushPopLikes(detail.title)}></FcLike> */}
                {
                    (!likedArray.includes(detail.title))?
                    (<FcLikePlaceholder size={19} onClick={()=>pushPopLikes(detail.title)}/>):
                    (<FcLike size={19} onClick={()=>pushPopLikes(detail.title)}></FcLike>)
                }
            </div>
            </div>
            <div className='text-lg font-bold'>
                {detail.title}
            </div>
            <div className='text-sm '>
                {/* {detail.description} */}
                {
                    (detail.description.length<100) ? (detail.description):
                    (detail.description.substr(0,100) + "...")
                }
            </div>
        </div>
    )
}

export default Card;