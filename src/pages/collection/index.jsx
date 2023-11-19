import React, { useState, useEffect  } from 'react'
import ProductCard from '../../components/Filter/product-card'
import AppliedFilter from './applied-filter'
import CategoryFilter from './category-filter'
import PriceFilter from './price-filter'
import RatingFilter from './rating-filter'
import SortComponent from './sort-component'
import Card from '../../components/Cards/Card'



function getPriceRange(){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:1337/api/properties?populate=*")
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);

  let min = data?.data[0].attributes.propertyPrice;
  let max = 0;



  {data?.data.map((propertie) => {


      if (propertie.attributes.propertyPrice < min) min = propertie.attributes.propertyPrice;
      if (propertie.attributes.propertyPrice > max) max = propertie.attributes.propertyPrice;


  })}



  return { min, max , data };
}



const Collection = () => {




  const priceRange = getPriceRange();
  console.log(priceRange)
  const initPriceFilter = {
  
    min: priceRange.min,
    max: priceRange.max,
    isApplied: false
  };
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedPrice, setSelectedPrice] = useState(initPriceFilter)
  const [selectedRating, setSelectedRating] = useState('')
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter)
  const [sortBy, setSortBy] = useState("")
  const [isClear, setIsClear] = useState(false)
  const [data , setData ] = useState(null)


  const onChangeCategory = (category, isChecked) => {
    isChecked
      ? setSelectedCategory((prevCategory) => [...prevCategory, category])
      : setSelectedCategory(
        selectedCategory.filter(
          (cat) => cat !== category
        )
      )
  }

  const onChangePrice = (min, max, isClear) => {
    if (isClear) {
      setSelectedPrice(initPriceFilter)
      setInitPriceRange(initPriceFilter)
      setIsClear(true)
      return
    };

    if (
      min === priceRange.min &&
      max === priceRange.max
    )
      return setSelectedPrice(initPriceFilter)

    setSelectedPrice({
      min,
      max,
      isApplied: true
    })
    setIsClear(false)
  }

  const onChangeRatingHandler = rating => {
    if (rating === "clear") return setSelectedRating("");

    setSelectedRating(rating);
  };

  const onClearAllHandler = () => {
    setSelectedCategory([])
    setSelectedPrice(initPriceFilter)
    setInitPriceRange(initPriceFilter)
    setSelectedRating('')
    setIsClear(true)
  }


  //const { products, total } = getVisibleProduct(selectedCategory, selectedPrice, selectedRating, sortBy)

  return (
    
    <div className='grid grid-cols-12 h-full gap-3 text-[#d9d9d9] px-5 '>
      <div className='col-span-2 space-y-4 px-2 mt-5'>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={onChangeCategory}
        />
        <PriceFilter
          selectedPrice={selectedPrice}
          
          setSelectedPrice={setSelectedPrice}
          initPriceRange={initPriceRange}
          onChangePrice={onChangePrice}
          isClear={isClear}
        />
        <RatingFilter
          onChangeRating={onChangeRatingHandler}
          selectedRating={selectedRating}
        />
      </div>
      <div className='col-span-8 pt-3'>
        <div className='grid grid-cols-12'>


          
          <div className='col-span-10 items-center'>
            <AppliedFilter
              selectedCategory={selectedCategory}
              onChangeCategory={onChangeCategory}
              selectedPrice={selectedPrice}
              onChangePrice={onChangePrice}
              selectedRating={selectedRating}
              onChangeRating={onChangeRatingHandler}
              onClearAll={onClearAllHandler}
            />
          </div>
          <div className='col-span-2'>
            <SortComponent
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>
        <div className='border-b py-1'></div>
        <div className='grid grid-cols-12'>


   
            {priceRange.data?.data.map((propertie) => (
                  <div
                  key={propertie.id}
                  className=' col-span-5'
                >
                  <Card propertie={propertie}/>
                </div>
              
                ))}




          {/*
          
          {products.map((product) => (
            <div
              key={product.id}
              className='col-span-3'
            >
              <ProductCard product={product} />
            </div>
          ))}

        
          */}


        </div>
      </div>
    </div>
  )
}

export default Collection