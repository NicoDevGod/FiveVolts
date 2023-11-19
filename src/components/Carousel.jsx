import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Card from '../components/Cards/Card'
import { useState, useEffect } from "react"
import HorizontalCard from './Cards/HorizontalCard';

function Carousel2() {

    const [data , setData ] = useState(null);

    useEffect( () => {
      fetch("http://localhost:1337/api/properties?populate=*")
        .then((response) => response.json())
        .then((data) => setData(data));
    },[]);
  
  

  return (
    <Carousel className="md:rounded-full rounded-t-full bg-black ">
        
        {data?.data.map((propertie) => (
            
            <li key={propertie.id}>{<HorizontalCard propertie={propertie}/>}<br/> </li>
            //<li key={propertie.id}>{propertie.attributes.propertyPrice}</li>
            ))}
        
    </Carousel>
  )
}

export default Carousel2