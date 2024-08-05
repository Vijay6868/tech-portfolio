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
          <h2>Ecommerce Sales</h2>
          <p>The goal of this project is to showcase how e-commerce data can be processed using
             a Medallion Architecture, leading to a comprehensive reporting solution in Power BI.</p>
            
          <Carousel showThumbs={false}>
            <div>
              <img src="Ecommerce/1.png" alt="Project 2 Image 1" />
            </div>
            <div>
              <img src="Ecommerce/2.png" alt="Project 2 Image 2" />
            </div>
            <div>
              <img src="Ecommerce/3.png" alt="Project 2 Image 2" />
            </div>
            <div>
              <img src="Ecommerce/4.png" alt="Project 2 Image 3" />
            </div>
          </Carousel>
        </div>
        
        <div className="projects__item">
          <h2>Quiz Time - Android Mobile Application</h2>
          <p>A platform where users can create, manage, and participate in quiz tournaments. 
            There are two types of users: Admin and Player. 
            Admin users have the ability to create and manage tournaments, 
            while Player users can participate in tournaments and interact with them.</p>
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
          <h2>ANPR: Azure AI Custom Vison Project. </h2>
          <p>This project demonstrates how to use Azure Custom Vision and Azure Computer Vision OCR to detect 
            and read number plates from images of cars. The project involves
          detecting the number plate in the image using a trained Custom Vision model.</p>
            
          <Carousel showThumbs={false}>
            <div>
              <img src="ANPR_custom_vision_Azure/4.png" alt="Project 2 Image 1" />
            </div>
            <div>
              <img src="ANPR_custom_vision_Azure/1.png" alt="Project 2 Image 1" />
            </div>
            <div>
              <img src="ANPR_custom_vision_Azure/2.png" alt="Project 2 Image 1" />
            </div>
            
          </Carousel>
        </div>

        <div className="projects__item">
          <h2>MS Fabric Bing News</h2>
          <p>This project demonstrates a comprehensive data pipeline, 
            combining data engineering with data analysis and visualization. 
            The pipeline processes bing news data in JSON format, 
            performs transformations using PySpark, saves the data in Delta tables, 
            loads the data for sentiment analysis, and visualizes insights using a Power BI dashboard.</p>
            
          <Carousel showThumbs={false}>
            <div>
              <img src="dash2.png" alt="Project 2 Image 1" />
            </div>
            <div>
              <img src="pipeline.png" alt="Project 2 Image 2" />
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
          <h2>Earthquake Events</h2>
          <p>This project demonstrates an end-to-end data engineering solution using the 
            USGS Earthquake API to build a robust data pipeline. The primary focus is on 
            leveraging the Medallion Architecture to efficiently process, transform, 
            and analyze earthquake data. The project integrates Azure Data Factory for orchestrating 
            data workflows and Microsoft Fabric for advanced data visualization and reporting.</p>
            
          <Carousel showThumbs={false}>
            <div>
              <img src="earthquake_events/1.png" alt="Project 2 Image 1" />
            </div>
            <div>
              <img src="earthquake_events/2.png" alt="Project 2 Image 2" />
            </div>
            <div>
              <img src="earthquake_events/3.png" alt="Project 2 Image 2" />
            </div>
            <div>
              <img src="earthquake_events/4.png" alt="Project 2 Image 3" />
            </div>
          </Carousel>
        </div>


        <div className="projects__item">
          <h2>QuoteWell - An Android Mobile Application</h2>
          <p>QuoteWell is an Android application that allows users to fetch and display quotes based on a specified keyword. 
            It utilizes the ZenQuotes API for fetching quotes.</p>
            
          <Carousel showThumbs={false}>
            <div>
              <img src="quotewell.png" alt="Project 2 Image 1" />
            </div>
          </Carousel>
        </div>

        <div className="projects__item">
          <h2>ABI Solution: Predict price of used cars using Machine learning techniques</h2>
          <p>This project aims to develop a machine learning model to predict the prices of used Toyota cars in California. 
            By leveraging a Random Forest regression model, 
            the solution provides accurate price predictions based on car model, year, and mileage. 
            The project also includes an interactive dashboard for users to input car details and receive price predictions, 
            along with a summary of the car inventory.</p>
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

        <div className="projects__item">
          <h2>Lake Wakatipu</h2>
          <p>A web application that allows users to book seats on a boat, 
            order food, and play the “Catch the Bug” game.</p>
          <Carousel showThumbs={false}>
            <div>
              <img src="lake_wakatipu/1.png" alt="Project 2 design" />
            </div>
            <div>
              <img src="lake_wakatipu/2.png" alt="Project 2 dashboard" />
            </div>
            <div>
              <img src="lake_wakatipu/3.png" alt="Project 2" />
            </div>
            <div>
              <img src="lake_wakatipu/4.png" alt="Project 2 Image 3" />
            </div>
            <div>
              <img src="lake_wakatipu/5.png" alt="Project 2 Image 3" />
            </div>
            <div>
              <img src="lake_wakatipu/6.png" alt="Project 2 Image 3" />
            </div>
          
          </Carousel>
        </div>


        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;