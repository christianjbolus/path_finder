import { useState } from 'react';
import './GridSquare.css';

export default function GridSquare({ i, j }) {
  const [clicked, setClicked] = useState(false);


  return (
    <div
      className={clicked ? 'grid-square red' : 'grid-square'}
      onClick={() => setClicked(prevState => !prevState)}
      data-i={i}
      data-j={j}
    ></div>
  );
}
