import React, { useEffect, useState } from "react";
import Title from "./Components/Title";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import {filterData} from "./data";
import {apiUrl} from "./data";
import Spinner from "./Components/Spinner";

function App(){

  const [courses,setCourses]=useState([]);
  const [spinner,setSpinner]=useState(true);
  const [cat,setCat]=useState(filterData[0].title);

  async function fetchApi(){
    setSpinner(true);
    try{
        const response =await fetch(apiUrl);
        const apiObject=await response.json();
        // console.log(apiObject.data)
        setCourses(apiObject.data);
    }catch(error){

    }
    setSpinner(false);
  }
  useEffect(()=>{
    fetchApi();
  },[]);

  return (
    <div className="min-h-screen bg-slate-700 ">
      <div className="text-center bg-slate-900">
        <Title></Title>
      </div>
      <div className=" flex justify-center">
        <NavBar filterData={filterData} cat={cat} setCat={setCat}></NavBar>
      </div>
      <div className=" w=5/6 flex justify-center ">
        {
          spinner?(<Spinner></Spinner>):
          (<Cards courses={courses} cat={cat}/>)
        }
      </div>

    </div>
  );
};

export default App;



