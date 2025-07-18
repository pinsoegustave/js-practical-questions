import React from 'react'


let guest = 0

function Cup({ guest })  {
    
    return <h2>Tea cup for guest #{guest}</h2>
}
// function to set the type of tea in the kitchen.
export default function TeaSet() {
  return (
    <div>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
        <Cup guest={5} />
        <Cup guest={9} />
    </div>
  )
}
