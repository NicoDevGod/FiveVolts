import React from 'react'
import { useState, useEffect } from "react"



function getPriceRange () {
    const [dataP , setData ] = useState(0);
    
  useEffect( () => {
    fetch("http://localhost:1337/api/properties?populate=*")
      .then((response) => response.json())
      .then((dataP) => setData(dataP));
  },[]);



    let min = dataP?.dataP[0].attributes.propertyPrice;

    let max = 0;

    //console.log(data?.data[0].attributes.propertyPrice)

    {dataP?.dataP.map((propertie) => {

        if (propertie.attributes.propertyPrice < min) min = propertie.attributes.propertyPrice;
        if (propertie.attributes.propertyPrice > max) max = propertie.attributes.propertyPrice;


    })}

  


  return { min, max };
}

export default getPriceRange();