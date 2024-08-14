import React, { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../../Redux/MovieSlice';


export default function Home() {

   

      const isLoading  =useSelector((state)=>state.movies.isLoading)
      const isError  =useSelector((state)=>state.movies.isError)
      const movies = useSelector((state)=>state.movies.value)
      const dispatch  = useDispatch()

    
      
   async function getMovies (){
       dispatch( getAllMovies())

     }
     useEffect(()=>{
          getMovies()
     },[])  


  return (
    <>
       {isError? <div className='alert alert-danger'> Error fetching data!</div>
       :
       <>
           {isLoading?
              <div className="d-flex justify-content-center align-items-center m-5 min-vh-100">
                <Spinner animation="border" role="status" >
                     <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
       :
       <div className='container mt-5 mb-5'>
       <div className='row'>
       {movies.map((movie)=>
            <div className='col-md-3' key={movie.id}>

                     < Movie movie={movie} />
              
            </div>
      )}
       </div>
    </div>
       
       }
    </>
       }
      </>
  )
}
