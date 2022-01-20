import React from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
//import {v4 as uuid4} from 'uuid'
import PlantItem from './PlantItem'

export default function ShoppingList({cart, updateCart}) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),[]
            
	)
    return (
        <div>
            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div key={id}>
					<PlantItem cover={cover} name={name} water={water} light={light} />
					<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
				</div>
				))}
			</ul>
        </div>
    )
}
