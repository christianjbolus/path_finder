import React from 'react'
import './GridSquare.css'

export default function GridSquare({i, j}) {
  return (
    <div className="grid-square" data-i={i} data-j={j}>
      
    </div>
  )
}
