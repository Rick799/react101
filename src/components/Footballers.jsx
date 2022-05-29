import React from 'react'

function Footballers() {

    const footballers = [
        {
            id: 0,
            name: "Messi",
            position: "Forward",
            age: 34,
            club: "PSG"
        },
        {
            id: 1,
            name: "Ronaldo",
            position: "Striker",
            age: 37,
            club: "MAN-U"
        },
        {
            id: 2,
            name: "Neymar",
            position: "Striker",
            age: 30,
            club: "PSG"
        },
    ];

    return (
        <div>
            {footballers.map(footballer =>
                <h1 key={footballer.id}>{ footballer.name}, {footballer.age} plays as {footballer.position} in {footballer.club} </h1>)}
        </div>
    );
}

export default Footballers