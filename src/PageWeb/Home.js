import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Pagination from '../Components/Pagination';
import { axiosInstance } from '../network/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../Redux/Actions/theme';
import { load } from '../Redux/Actions/load';
import { lang } from '../Redux/Actions/lang'; // Add this import
import './home.css';
// import Header from './Header';
import Trend from './Trend';
import Banner from '../Components/Banner';

function Home() {

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    // Redux state         // Get  from Redux
    const currentTheme  = useSelector((state) => state.theme.theme);
    const isLoading  = useSelector((state) => state.load.load);
    const currentLang  = useSelector((state) => state.lang.lang);

    // Translation
    const Lang  = useSelector((state) => state.lang.lang);

    // Redux dispatch
    const dispatch = useDispatch();

    // Theme handler
    const handletheme = () => {
        dispatch(theme(currentTheme  === "light" ? "dark" : "light"));
    };

   // Language handler
  const handlelang = () => {
        dispatch(lang(currentLang  === "AR" ? "EN" : "AR")); // Use setLang action
  };

     // Theme handler
     const handleload  = () => {
        dispatch(load(isLoading  === "true" ? "false" : "true"));
    };



    // Fetch movies from API
    const fetchData = () => {
        axiosInstance.get("/data/moviedata.json")
            .then((data) => {
                setMovies(data.data); // Directly set movies state
            })
            .catch((e) => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

      useEffect(() => {
            setMovies(movies);
            console.log('Fetched movies:', movies); // Check if data is being set
            }, [movies])        // Run when 'data' changes


    // Pagination logic
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section id="home" className="home"  dir={lang === 'ar' ? 'rtl' : 'ltr'}>
{/* <Header /> */}
<Banner />

            <div className="container-fluid">
                <h4 className="home-title">
                    Opening This Week
                </h4>
                <div className="movie-grid">
                    {
                        currentMovies.length > 0 &&
                        currentMovies.map((movie) => (
                            <Card key={movie.id} movie={movie} path={`/MovieShow/${movie.id}`}/>
                        ))
                    }
                </div>

            <Trend />
            <Pagination
                    moviesPerPage={moviesPerPage}
                    totalMovies={movies.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>

        </section>
    );
}

export default Home;