/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { generateGrid } from '../../utils/helpers';
import GridSquare from '../GridSquare/GridSquare';
import { css } from '@emotion/react';

const gridStyle = css`
  display: inline-grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(25, 1fr);
  margin-bottom: 40px;
`

export default function Grid() {
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(25);
  const [grid, setGrid] = useState(generateGrid(rows, cols, 0));

  return (
    <div css={gridStyle}>
      {grid.map((row, i) => row.map((square, j) => <GridSquare i={i} j={j} key={`${i}:${j}`}/>))}
    </div>
  );
}
