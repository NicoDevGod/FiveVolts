import React from 'react'

function Card({propertie}) {

  let url = "http://localhost:1337"+propertie.attributes.propertyImage.data[0].attributes.url+"";
  

  return (
    <div className="relative w-[320px] h-[400px] flex flex-col justify-between">
        {/* Image */}
        <img className={`relative w-full h-[340px] rounded-2xl before:absolute before:bottom-0 before:left-1/2 before:w-[25px] 
        before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before border-b-[10px]
        after:absolute after:bottom-[70px] after:left-0 after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after
         bg-cover`} src={url} />
  
            
        

        {/* Container */}
        
        <div className="relative w-full h-[250px] bg-primary rounded-2xl rounded-tl-none">
        <span className="absolute left-0 w-1/2 h-[80px] -top-[80px] bg-primary border-t-[10px] border-r-[10px] border-white 
        rounded-tr-[25px] before:absolute before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before2 
        after:absolute after:bottom-0 after:-right-[25px] after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after2">
            <a href='#' className=" relative bg-white py-3 px-4 m-4 block rounded-lg font-medium">${propertie.attributes.propertyPrice}</a>
        </span>
        <ul className=" list-disc text-white pt-8 px-8">
            <li className='mb-2 font-medium'>
            {propertie.attributes.propertyRooms} Rooms, {propertie.attributes.propertyBathrooms} Bathrooms.
            </li>
            <li className='mb-2 font-medium'>
            {propertie.attributes.propertyArea} metros.
            </li>
            <li className='mb-2 font-medium'>
            {propertie.attributes.propertyType}
            </li>
            <li className='mb-2 font-medium'>
            {propertie.attributes.propertyParking} parking/s.
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Card