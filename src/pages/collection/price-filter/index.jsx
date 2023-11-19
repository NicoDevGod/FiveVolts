import React from 'react'
import { useState, useEffect } from "react"
import MultiRangeSlider from '../../../components/Filter/multi-range-slider'
//import { priceRange } from '../../../services/product-queries'






const PriceFilter = ({ initPriceRange, onChangePrice, isClear }) => {

  const [data , setData ] = useState(null);

  useEffect( () => {
    fetch("http://localhost:1337/api/properties?populate=*")
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);


  



  // Find Price Range (min-max)
  const findRange = () => {
    let min = data?.data[0].attributes.propertyPrice;
    let max = 0;

    console.log(data?.data[0].attributes.propertyPrice)

    {data?.data.map((propertie) => {

      if (propertie.attributes.propertyPrice < min) min = propertie.attributes.propertyPrice;
      if (propertie.attributes.propertyPrice > max) max = propertie.attributes.propertyPrice;


    })}


    return { min, max };
  };

  const priceRange = findRange();

  return (
    <div className='h-auto p-2  bg-[#1B1B1B] rounded-md'>
      <MultiRangeSlider
        min={priceRange.min}
        max={priceRange.max}
        initPirceRange={initPriceRange}
        isClear={isClear}
        onChange={({ min, max }) => onChangePrice(min, max)}
      />
    </div>
  )
}

export default PriceFilter