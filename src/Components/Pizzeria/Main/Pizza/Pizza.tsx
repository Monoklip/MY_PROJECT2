import { useState } from 'react';
import IconMenu from '../IconMenu/IconMenu';
import './pizza.scss';
import PizzaItem from './PizzaItem/PizzaItem';

const Pizza = (props: { uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number; }) => void; }) => {

    const [pizza, setPizza] = useState([]);
    const [urlPizza, setUrlPizza] = useState('http://localhost:3000/pizza');

    (async function pizzaBtn() {
        const response = await fetch(urlPizza);
        const pizza = await response.json();
        setPizza(pizza);
    }());

    return(
        <div className='pizza'>
            <IconMenu/>
            <h1>ПІЦА</h1>
            <div className="pizza-items">
                {pizza.map((elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number; id: number;}) => {
                     return <PizzaItem elem={elem} key={elem.id} uptadeFoodkList={props.uptadeFoodkList} pizza={pizza} />
                })}
            </div>
        </div>
    )
};

export default Pizza;