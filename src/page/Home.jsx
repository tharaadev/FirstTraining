import React, { useEffect, useRef, useState } from"react";
import Card from "./Card";
const Home = ({items ,setItems}) => {
  //const wiggleRef=useRef();
  
  
  
    const DeletFunc=(e,selectId)=>{
     //wiggleRef.target.classList.add("animate-wiggle")
      const NewItems= items.filter((e)=>{return e.id !==selectId})
      setItems(NewItems)
    }

    
    return (  <div>
    
    <div>{ items.map((el)=> { return <Card names={el} key={el.id} DeletFunc={DeletFunc}  /> })}</div>
    </div>);
}
 
export default Home;