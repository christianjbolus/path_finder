import { useState } from 'react';
import { generateGrid } from '../../utils/helpers';
import GridSquare from '../GridSquare/GridSquare';
import './Grid.css'

export default function Grid() {
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(25);
  const [grid, setGrid] = useState(generateGrid(rows, cols, 0));

  return (
    <div className="grid">
      {grid.map((row, i) => row.map((square, j) => <GridSquare i={i} j={j} key={`${i}:${j}`}/>))}
    </div>
  );
}
