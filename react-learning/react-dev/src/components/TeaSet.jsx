import React from 'react'


let guest = 0

function Cup()  {
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>
}
// function to set the type of tea in the kitchen.
export default function TeaSet() {
  return (
    <div>
        <Cup />
        <Cup />
        <Cup />
        <Cup />
        <Cup />
    </div>
  )
}
