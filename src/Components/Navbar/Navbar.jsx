import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {



   const favoriteMoviesCount = useSelector(state => state.favoriteMovies.movies.length)
   return (
     <>
          <nav className="navbar navbar-expand-lg navbar-light mb-5" style={{backgroundColor:"gray"}} >
           <Link className="navbar-brand" href="#">Movies</Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
   
    </div>
 </nav>
    </>
  )
}
