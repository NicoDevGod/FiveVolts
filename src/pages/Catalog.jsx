import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from "react"
import  useFetch from "../hooks/useFetch";

function Catalog() {
/*
  let {loading, data, error} = useFetch('http://localhost:1337/api/properties?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>




*/

  const [data , setData ] = useState(null);

  useEffect( () => {
    fetch("http://localhost:1337/api/properties?populate=*")
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);


  console.log(data?.data[2].attributes.propertyImage.data[0].attributes.url)
  
  return (
    
    <>
      
      <div className="flex justify-center p-10">



        <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {data?.data.map((propertie) => (
            
            <li key={propertie.id}>{<Card propertie={propertie}/>} </li>
            //<li key={propertie.id}>{propertie.attributes.propertyPrice}</li>
            ))}
        </ul>
      </div>

    </>
  )
}

export default Catalog