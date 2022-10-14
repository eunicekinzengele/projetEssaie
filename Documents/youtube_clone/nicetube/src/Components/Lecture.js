import React from 'react';
import '../Styles/lecture.css';
import { useParams } from 'react-router-dom';

export default function Lecture() {
    const {id} = useParams()
  return (
    <div className='div__lecture'>
        <h1>Salut</h1>

    </div>
  )
}
