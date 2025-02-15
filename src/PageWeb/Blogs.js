import React, { useState, useEffect } from 'react';
import './blogs.css';
import BlogCard from '../Components/BlogCard';
import { axiosInstance } from '../network/axiosInstance';

function Blog() {

    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [filters, setFilters] = useState([
        { id: 1, name: "All", active: true },
        { id: 2, name: "Romance", active: false },
        { id: 3, name: "Action", active: false },
        { id: 4, name: "Thriller", active: false },
        { id: 5, name: "Horror", active: false },
        { id: 6, name: "Adventure", active: false },
    ]);


    const fetchData = () => {
        axiosInstance.get("/data/moviedata.json")
            .then((response) => {
                // Check if data is an array
                console.log("Response data: ", response.data);  // Check the raw data
                const apiData = Array.isArray(response.data) ? response.data : [];
                console.log("Validated data:", apiData); // Verify this in console
                setBlogs(apiData);
                setFilteredBlogs(apiData);
            })

            .catch((e) => {
                console.log(e.message);
                // Set default blogs if fetch fails
                const defaultBlogs = [
                    // Paste your default blogs array here
                    {
                        "id": 1,
                        "title": "Blog Title 1",
                        "image": "image1.jpg",
                        "category": "Category 1",
                        "author": "Author 1",
                        "date": "2023-01-01",
                    },
                    // ... rest of default blogs
                ];
                setBlogs(defaultBlogs);
                setFilteredBlogs(defaultBlogs);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilterBlog = (category) => {
        setFilters(filters.map(filter => ({
            ...filter,
            active: filter.name === category
        })));

            // Ensure blogs is always treated as an array
            const filtered = category === 'All'
            ? [...blogs]  // Create a new array reference
            : blogs.filter(blog => blog.category === category);

        setFilteredBlogs(filtered);
};


        // if (category === 'All') {
        //     setFilteredBlogs(blogs);
        // } else {
        //     setFilteredBlogs(blogs.filter(blog => blog.category === category));
        // }


    return (
        <section id="blogs" className="blogs">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Our Blogs</h4>
                    <ul className='filters'>
                        {filters.map(filter => (
                            <li
                                key={filter.id}
                                className={filter.active ? 'active' : ''}
                                onClick={() => handleFilterBlog(filter.name)}
                            >
                                {filter.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="row mt-5">
                {
                    Array.isArray (filteredBlogs) && filteredBlogs.length > 0 ? (
                        filteredBlogs.map(blog => (
                            <BlogCard blog={blog} key={blog.id} />
                        ))
                    ) : (
                        <p>Loading blogs...</p>
                    )
                }
                </div>
            </div>
        </section>
    );
}

export default Blog;