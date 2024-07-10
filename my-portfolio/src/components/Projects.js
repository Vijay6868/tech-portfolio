// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects__content">
      <div className="projects__item">
          <h2>MS Fabric Bing News</h2>
          <p>This is a Data Engineering project</p>
          <Carousel showThumbs={false}>
            <div>
              <img src="dash2.png" alt="Project 2 Image 1" />
            </div>
            <div>
              <img src="fabric1.png" alt="Project 2 Image 2" />
            </div>
            <div>
              <img src="fabric2.png" alt="Project 2 Image 3" />
            </div>
          </Carousel>
        </div>
        <div className="projects__item">
          <h2>Quiz Time - Android Mobile Application</h2>
          <p>a platform where users can create, manage, and participate in quiz tournaments. There are two types of users: Admin and Player. Admin users have the ability to create and manage tournaments, while Player users can participate in tournaments and interact with them.</p>
          <Carousel showThumbs={false}>
            <div>
              <img src="img4.png" alt="Project 1 Image 1" />
            </div>
            <div>
              <img src="img2.png" alt="Project 1 Image 2" />
            </div>
            <div>
              <img src="img3.png" alt="Project 1 Image 3" />
            </div>
          </Carousel>
        </div>

        <div className="projects__item">
          <h2>ABI Solution: Predict price of used cars</h2>
          <p>This project aims to develop a machine learning model to predict the prices of used Toyota cars in California. By leveraging a Random Forest regression model, the solution provides accurate price predictions based on car model, year, and mileage. The project also includes an interactive dashboard for users to input car details and receive price predictions, along with a summary of the car inventory.</p>
          <Carousel showThumbs={false}>
            <div>
              <img src="design.png" alt="Project 2 design" />
            </div>
            <div>
              <img src="dashboard.png" alt="Project 2 dashboard" />
            </div>
            <div>
              <img src="actualvspredicted.png" alt="Project 2 actual vd predicted" />
            </div>
            <div>
              <img src="7.png" alt="Project 2 Image 3" />
            </div>
          </Carousel>
        </div>


        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;