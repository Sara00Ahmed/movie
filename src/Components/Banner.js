import React, {  useEffect , useState } from 'react';
import './banner.css';
import MovieContent from '../Components/MovieContent';
import MovieDate from '../Components/MovieDate';
import PlayBtn from '../Components/PlayBtn';
// import MovieSwiper from '../Components/MovieSwiper';
import { axiosInstance } from '../network/axiosInstance';
import bgImg from '../movies/transformer.jpg';

// const bgImg = `${process.env.PUBLIC_URL}/data/movies/bg-transformer.jpg`; // Keep background image

function Banner() {
  const [movies, setMovies] = useState([]); // Initialize as an array


  const fetchData = () => {
        axiosInstance.get("/data/moviedata.json")
            .then((data) => {
                setMovies(data.data); // Directly set movies state
            })
            .catch((e) => console.log(e.message));
    };

    useEffect(() => {
      fetchData(); // Call fetchData when the component mounts
    }, []);


  // const handleSlideChange = id => {
  //   console.log(id);
  // }
  return (
    <div className="banner" style={{ backgroundImage: `url(${bgImg})` }}>  {/*  Keep Background Image */}
      <div className="movie">
        {/*  Keep the Image as well */}
        <img src={bgImg} alt="Background-image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <MovieDate />
            <PlayBtn />

          </div>
        </div>
      </div>

      {/* Keep MovieSwiper and Ensure Data is Passed */}
      {/* {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange}/>} */}
    </div>
  );
}


export default Banner;







