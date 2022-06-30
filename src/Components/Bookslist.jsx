import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getBooks } from '../Redux/AppReducer/action';
import BookCard from './BookCard'

const Bookslist = () => {

  const dispatch=useDispatch();
  const books = useSelector((state)=>state.AppReducer.Books);
  const [searchParams]=useSearchParams();
  const location=useLocation();
  useEffect(()=>{
      if(books.length===0 || location.search){
        const sortBy=searchParams.get("sortBy");
        const getBooksParams={
           params:{
            category:searchParams.getAll("category"),
            _sort:sortBy && "release_year",
            _order:sortBy
          }
      }
           dispatch(getBooks(getBooksParams))
      }
  },[location.search,searchParams,dispatch,books.length]);
  return (
    <div>
        {books.length>0 && books.map((data)=>(<div style={{border:"1px solid blue",padding:"5px",width:"310px"}} key={data.id}>
            <Link to={`/books/${data.id}`}>
            <BookCard data={data}/>
            </Link>
        </div>))}
    </div>
  )
}

export default Bookslist