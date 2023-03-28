import React, { useContext } from 'react'
import { MovieContext, NameContext } from '../App'



export default function CompC() {
    const myname = useContext(NameContext)
    const movieName=useContext(MovieContext);
  return (
    <div>
        <h1>I am Aksay Warule</h1>
        <h2>{myname}</h2>
        <p>I like to watch {movieName}</p>

    </div>
  )
}
