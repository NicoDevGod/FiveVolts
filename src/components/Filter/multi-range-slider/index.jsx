import React, { useCallback, useEffect, useState, useRef } from "react";

const MultiRangeSlider = ({ min, max, onChange, initPirceRange, isClear }) => {
  console.log(min)
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  console.log('maxVal->', maxVal)
  console.log('minVal->', minVal)
  console.log('isClear->', isClear)

  useEffect(() => {
    if (isClear) {
      setMinVal(initPirceRange.min)
      setMaxVal(initPirceRange.max)
      console.log('called')
    }
  }, [isClear])

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  console.log(minVal)

  return (
    <div className="">
      <div className=" ">
        <span>Precio minimo {minVal}</span>
        <div>
          
          
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
              const value = Math.min(+event.target.value, maxVal - 1);
              setMinVal(value);
              event.target.value = value.toString();
            }}
            step={2}
            className="thumb thumb--zindex-3"
          />
        </div>
      </div>
      <div className=" ">
        <span>Precio maximo {maxVal}</span>
        <div>
          
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            step={2}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 1);
              setMaxVal(value);
              event.target.value = value.toString();
            }}
            className="thumb thumb--zindex-4"
          />
          </div>
      </div>
      
    </div>
  );
};

export default MultiRangeSlider;