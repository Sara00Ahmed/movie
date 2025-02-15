import React, { useEffect, useState } from "react";
import "./trend.css";
import { axiosInstance } from "../network/axiosInstance";
// Import Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import TrendCard
import TrendCard from "../Components/TrendCard";

function Trend() {
  const [slides, setSlides] = useState([]); // Correct state variable

  // Fetch movies from API
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/data/moviedata.json");
      setSlides(response.data); // Correctly update state
      console.log("Fetched movies:", response.data); // Debugging log
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run only once when the component mounts

  return (
    <section id="trend" className="trend">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Coming Soon</h4>
        </div>
        <div className="row">
          <Swiper slidesPerView={3} spaceBetween={20} pagination={{ clickable: true }}>
            {slides.length > 0 ? (
              slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <TrendCard
                      slide={slide}
                      to={"/Favorite"}
              />
                </SwiperSlide>
              ))
            ) : (
              <p>Loading...</p> // Handle loading state
            )}

          </Swiper>
        </div>
           {/* Moved <Link> outside Swiper */}

      </div>
    </section>
  );
}

export default Trend;
