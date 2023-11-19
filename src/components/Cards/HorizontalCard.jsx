import React from 'react'

const HorizontalCard = ({propertie}) => {

    let url = "http://localhost:1337"+propertie.attributes.propertyImage.data[0].attributes.url+"";
  return (
    <div className='grid md:grid-cols-3 gap-2 px-8 py-3 justify-items-center '>
        <div className=' md:col-span-1 '>
            <img className='rounded-full w-96 h-96' src={url}/>
        </div>
        <div className=' md:col-span-2 flex flex-col justify-center'>
            <h2 className='text-3xl text-white font-bold'>
                {propertie.attributes.propertyTitle}
            </h2>
            <p className='text-gray-400 text-base'>
                {propertie.attributes.propertyDesc}
            </p>
        </div>
    </div>
  )
}

export default HorizontalCard