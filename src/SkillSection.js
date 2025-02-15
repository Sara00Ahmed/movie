import './App.css';
import React from 'react';
// import './skillsection.css';


function SkillSection() {
    const skills = [
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'JavaScript', percentage: 50 },
        { name: 'jQuery', percentage: 75 },
        { name: 'AngularJs', percentage: 25 },
        { name: 'Php', percentage: 30 },
        { name: 'MySQL', percentage: 25 },
    ];

    return (
        <div className="skill-section-container">
        <section className="skill-section">
            <h1 className="skill-title">Skills</h1>
            <p className="education-info">
                B.S. of Science, Chemistry and Microbiology Department, 
                Faculty of Science, Assiut University. <br />
                (General Grade: B- with GPA 2.75 in July 2016). <br />
                Diploma in Biochemistry from the Faculty of Science, Assiut University. <br />
                (General Grade: B+ with GPA 3.47 in Sep 2022).
            </p>
        </section>
        
        <section className="skills-list-section">
                <h4>My Focus:</h4>
                <ul className="skills-list">
                    <li>Web Design</li>
                    <li>Mobile Application Design</li>
                    <li>Ux/Ui Design</li>
                    <li>Responsive Design</li>
                </ul>

                <div className="skills-progress">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <span className="skill-name">{skill.name}</span>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                            <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                    ))
                }
                </div>
            </section>
        </div>
    );
}
export default SkillSection;
