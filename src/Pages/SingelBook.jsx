import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../Redux/AppReducer/action';

const SingelBook = () => {
  const {id}=useParams();
  const dispatch=useDispatch()

  const books=useSelector((state)=>state.AppReducer.Books);

  const [CurrentBook,setCurrentBook]=useState({});

  useEffect(()=>{
    if(books?.length===0){
      dispatch(getBooks());
    }
  },[books?.length,dispatch])

  useEffect(()=>{
    if(id){
    const temp=books?.find((data)=>(data.id===Number(id)))
    setCurrentBook(temp);
    }
  },[books,id])
  return (
    <div>
      <div>
      {CurrentBook.book_name}
      </div>
      <div>{CurrentBook.category}</div>
      <div>{CurrentBook.release_year}</div>
      <button>
        <Link to={`/books/${CurrentBook.id}/edit`}>Edit</Link>
      </button>
      </div>
  )
}

export default SingelBook
