import React from 'react'
import { createBrowserRouter,Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import { Provider } from 'react-redux'
import FavoriteMovies from './Components/FavoriteMovies/FavoriteMovies'
import store from './Redux/store'

export default function App() {
  
  const routers = createBrowserRouter([
       
    {path:'' , element:<Layout/> , errorElement:<NotFound/>, children:[

    {path:'' , element:  <Home/> },
    {path:'home' , element:<Navigate to={'/'}/> },
    { path:'movieDetails/:id' , element: <MovieDetails/> },
    {path:'favoriteMovies' ,element: <FavoriteMovies/> }

    

    ]}
  ])

  return (
    <>
    <Provider store={store}>
            <RouterProvider router={routers}></RouterProvider>
    </Provider>
    </>
  )
}
