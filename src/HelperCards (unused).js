// import React, { useEffect, useState } from 'react';
	
// import Cards from './Cards';
// import axios from 'axios';

// export default function HelperCards() {

// const [cards, getCards] = useState(''),

// useEffect ( () => {  
// getAllCards();  
// }, []);

// const getAllCards = {
//     axios.get('http://localhost:5001/candidate')
//     .then((response) => {
//         const allCards = response.data.cards.allCards;
//         getCards(allCards);
//     })
//     .catch(error => console.error('Error: ${error}'));
// }
// return {
//     <Cards cards={cards} />
// }

// }