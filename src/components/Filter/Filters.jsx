import { useState } from 'react'
import './Filters.css'
export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            categoria: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor='price'>Precio</label>
                <input
                    type='range'
                    id='price'
                    min='0'
                    max='1000000'
                    onChange={handleChangeMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor='category'>Categoría</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='Casa'>Casas</option>
                    <option value='Otro'>Otro</option>
                </select>
            </div>
        </section>
    )

}