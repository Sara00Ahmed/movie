import './protofolio.css';
import React from 'react';
import Mytitle from './Components/Mytitle';
import SkillSection from './SkillSection';
import AboutMe from './AboutMe';
import ToDo from './ToDo';
// import TrendCard from './Components/TrendCard';
// import MyCard from './Components/MyCard';
// Correct way to define the projects array
const projects = [
  { id: 1, title: "Project 1", image: "/assets/blogs/blog-2.jpg" },
  { id: 2, title: "Project 2", image: "/assets/blogs/blog-3.jpeg" },
];

function Protofolio() {
  return (
    <>
          <Mytitle myclr="primary" title="Show Projects" />

      <AboutMe />
      <SkillSection />
      <ToDo />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "left" }}>
        {projects.map((project) => (
          <div key={project.id} style={{ margin: "10px" }}>
            {/* <MyCard id={project.id}
            title={project.title}
            img={project.image} /> */}
            <div>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Protofolio;