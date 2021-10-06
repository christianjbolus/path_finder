/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

const gridSquare = css`
  height: 25px;
  width: 25px;
  border: 1px solid #2d0ca5;
  margin: 1px;
  cursor: pointer;
`

const fill = css`
  background-color: #6933ff
`

export default function GridSquare({ i, j }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      css={clicked ? [gridSquare, fill] : gridSquare}
      onClick={() => setClicked(prevState => !prevState)}
      data-i={i}
      data-j={j}
    ></div>
  );
}
