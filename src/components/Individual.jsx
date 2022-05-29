import React from 'react'

function Individual({footballer}) {
    return (
        <div>
            <h1>
                {footballer.name},
                {footballer.age} plays as
                {footballer.position} in
                {footballer.club}
            </h1>
        </div>
    )
}
  
export default Individual
