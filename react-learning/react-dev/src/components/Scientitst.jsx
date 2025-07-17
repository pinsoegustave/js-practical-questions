import React from 'react'
import people from './data.js'
import getImageUrl from './utils';

export default function Scientitst() {
    const listItems = people.map(person => 
        <li key={person.id}>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
                />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
  
    return (
    <article>
        <h1>Scientists</h1>
        <ul>{listItems}</ul>
    </article>
  );
}
