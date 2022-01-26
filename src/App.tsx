import React from 'react';
import './App.css';
import picture from './assets/image/react_logo_icon_144942.png'

let user = {
    name: 'Briws',
    hair: 32,
    address: {
        city: 'Querim',
        house: 12
    },
    laptop: {
        title: 'Lenovo'
    }
}

// {...doing shallow copy of the user, and rewrite with all content}
// Those like in broken TV. Do not solder micro board, but changed.
let laptopApple = { ...user, laptop: {title: 'apple'} }
console.log('From Immutability.tsx:')
console.log(laptopApple)

//{...doing shallow copy to the user, address: {...doing shallow copy ot the address, and change in it}}
//old micro board city to the same by name, but with another content
let NewYorkCity = { ...user, address: {...user.address, city: 'NewYork'}}
console.log(NewYorkCity)

//onClick (Native JS)
// select button with what we work
const button = document.querySelector('#button')
// We assign to event 'click' handler, those the fuction,
// we will be call, as the event will be.
button && button.addEventListener('click', () => console.log('I am button'))

function App() {
    return (
        <div className="App">
            <div><img src={picture} alt=""/></div>
            <button onClick={() => console.log('I am button')}>Button</button>
        </div>
    );
}

export default App;
