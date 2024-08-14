import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../Redux/FavoriteMoviesSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Movie.module.css';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import icons

export default function Movie({ movie }) {
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);
  const dispatch = useDispatch();

  const isFavorite = favoriteMovies.some(favoriteMovie => favoriteMovie.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie));
      toast.error('Removed from Favorites');
    } else {
      dispatch(addToFavorites(movie));
      toast.success('Added to Favorites');
    }
  };

  return (
    <div className='container'>
      <div className={styles.favoriteIconContainer}>
        <div
          onClick={handleToggleFavorite}
          className={`${styles.favoriteIcon} ${isFavorite ? styles.filled : styles.unfilled}`}
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          {isFavorite ? <FaStar size={24} color="#FFD700" /> : <FaRegStar size={24} color="#FFD700" />}
        </div>
      </div>
      <Link to={`/movieDetails/${movie.id}`} className={`text-decoration-none text-dark ${styles.movie}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className='w-100 border border-secondary border-3'
          alt={movie.title}
        />
        <div className='m-3'>
          <h3>{movie.title}</h3>
          <p>{movie.overview.split(' ').slice(0, 15).join(' ')}</p>
        </div>
      </Link>
    </div>
  );
}
