import React, {useState} from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
//import {v4 as uuid4} from 'uuid'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useCartContext } from '../App'

export default function ShoppingList() {
	const { update } = useCartContext();
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => update(id, name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
    )
}
