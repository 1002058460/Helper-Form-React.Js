import React from 'react';

export default function Cards(props) {
    const displayCards = (props) => {
        const {cards} = props;

        if (cards.length > 0) {
            return (
                cards.map((card, index) => {
                    console.log(card);
                    return (
                        <div key={card.id}>
                            <p>{dateOfBirth.id}</p>
                            <p>{fullName.id}</p>
                        </div>
                    )
                })
            )
        }

        else {
            return (<h3> No employees yet</h3>)
        }
    }

    return (
        <>
        {displayNotes(props)}
        </>
    )
}