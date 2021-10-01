/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// const btn = css({
//   color: "#fff",
//   fontWeight: "700",
//   fontSize: "1rem",
//   padding: "15px 50px",
//   borderRadius: "25px",
//   border: "none",
//   backgroundColor: "#21d4fd",
//   backgroundImage: "linear-gradient(90deg, #21d4fd 0%, #b721ff 100%)",
//   cursor: "pointer"
// })

const btn = css`
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 15px 50px;
  border-radius: 25px;
  border: none;
  background-color: #21D4FD;
  background-image: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);
`

export default function Button({ text, className, onClick }) {
  return (
    <button css={btn} onClick={onClick}>
      {text}
    </button>
  );
}
