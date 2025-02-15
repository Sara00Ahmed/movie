import React, { useState, useEffect } from 'react'
import './schedule.css'
import Card from '../Components/Card';
import { axiosInstance } from '../network/axiosInstance';

function Schedule() {

    // الجدول الزمنى البيانات تعرض فى جدول زمنى معين
    const filters = [
        { id: 1, name: "All", active: true },
        { id: 2, name: "Romance", active: false },
        { id: 3, name: "Action", active: false },
        { id: 4, name: "Thriller", active: false },
        { id: 5, name: "Horror", active: false },
        { id: 6, name: "Adventure", active: false },
      ];

    const [data, setData] = useState([])
    const [movies, setMovies] = useState([])
    const [Filters, setFilters] = useState(filters);


    const fetchData = () => {
        axiosInstance
          .get("/data/moviedata.json")
          .then((response) => {
            console.log("Fetched data:", response.data); // Log the fetched data
            setData(response.data); // Set the data state
          })
          .catch((e) => console.log(e.message));
      };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setMovies(data);
        console.log('Fetched movies:', data); // Check if data is being set
        }, [data])        // Run when 'data' changes


        // function filter movies by genre
        // const handleFilterMovies = category => {
        //     //  console.log(category); //  نجد مجموعة الفيلم مجموعة البيانات نفس الفيلم مع ذلك ونضعها فى متغير لتخزينه
        // const filteredMovies = data.filter(movie => movie.category === category);
        // setMovies(filteredMovies); // must for change movies and pass new data
        // }


        // نفس  السطرين اللى فاتوا مع الاختصار
        const handleFilterMovies = (category) => {
             // Update filters state properly by creating a new array
          setFilters (
            filters.map(filter => {
                filter.active =false;
                if(filter.name === category){
                    filter.active = true;
                }
                return filter;
            })// change state filters from false to true

          )

// show all movies if "All" is selected
            if(category === 'All'){
                setMovies(data);
                return; // return to the native state and the rest code dont run
            }
        setMovies(data.filter(movie => movie.category === category));
        }

    return (
        <section id="schedule" className="schedule">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Opening this week </h4>
                    <div className="row">
                        <ul className='filters'>
                            {
                                filters.map(filter => (
                                    <li
                                    key={filter.id}
                                    // give the active class and style to the active filter
                                    className={`${filter.active ? 'active' : undefined}`}
                                      onClick={() => {handleFilterMovies(filter.name);     // filter the movies acoording  to name
                                    }}
                                    >{filter.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    {movies && movies.length > 0 &&
                        movies.map(movie => (
                            <Card key={movie.id} movie={movie} path={`/MovieShow/${movies._id}`}/>
                        ))}
                </div>
            </div>
        </section>

    )
}
export default Schedule