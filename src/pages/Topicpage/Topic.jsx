import React from 'react'
import NavbarPage from '../../components/Navbar'
import Footer from '../../components/Footer'
import topicsData from "../../data/topic.json";
import { useState } from 'react';
import './Topic.css'

const Topic = () => {

  const [search, setSearch] = useState("");
  const filteredTopics = topicsData.filter(topic =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <NavbarPage/>

        <main className='Header'>
            <h1 className='topic-header'>Topics</h1>
            <p className='topic-subtitle'>Check here for available topics</p>
            <div className="d-flex justify-content-center my-3">
      </div>
         </main>
            
          <div className="container my-5">
            <div className="row">
                      <div className="col-md-6 col-12 col-lg-6  mb-3">
                        <div className="card  shadow p-5 text-center">
                          <div className="card-body">
                            <h5 className="card-title">Part of Speech</h5>
                            <p className="card-text">The categories words belong to based on their role in a sentence.</p>
                            <button className="btn btn-primary ">View</button>
                          </div>
                        </div>
                      </div>

                    <div className="col-md-6 col-12 col-lg-6 mb-3">
                      <div className="card  shadow p-5 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Part of Speech</h5>
                            <p className="card-text">The categories words belong to based on their role in a sentence.</p>
                            <button className="btn btn-primary">View</button>
                          </div>
                        </div>
                    </div>
            </div>

            <div className="row">
                      <div className="col-md-6 col-12 col-lg-6  mb-3">
                        <div className="card  shadow p-5 text-center">
                          <div className="card-body">
                            <h5 className="card-title">Part of Speech</h5>
                            <p className="card-text">The categories words belong to based on their role in a sentence.</p>
                            <button className="btn btn-primary ">View</button>
                          </div>
                        </div>
                      </div>

                    <div className="col-md-6 col-12 col-lg-6 mb-3">
                      <div className="card  shadow p-5 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Part of Speech</h5>
                            <p className="card-text">The categories words belong to based on their role in a sentence.</p>
                            <button className="btn btn-primary">View</button>
                          </div>
                        </div>
                    </div>
            </div>
          </div> 
          <Footer/>
    </div>
  )
}

export default Topic