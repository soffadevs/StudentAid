import NavbarPage from '../../components/Navbar';
import topicsData from "../../data/datas.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
 
const Topic = () => {
  const [search, setSearch] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(topicsData);

  // Filter topics only when the user submits
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setFilteredTopics(topicsData); // show all if search is empty
    } else {
      const results = topicsData.filter((topic) =>
        topic.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTopics(results);
    }
  };

  return (
    <div>
      <NavbarPage />

      <main className="Header">
        <h1 className="topic-header">Topics</h1>
        <p className="topic-subtitle">Check here for available topics</p>
        <div className="d-flex justify-content-center my-3">
          <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
              type="text"
              value={search}
              placeholder="Search topics..."
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </main>

      <div className="container my-5">
        <div className="row">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div key={index} className="col-md-6 col-12 col-lg-6 mb-3">
                <div className="card shadow p-5 text-center h-100">
                  <div className="card-body">
                    <h5 className="card-title">{topic.title}</h5>
                    <p className="card-text">{topic.description}</p>
                    <Link
                      to={topic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No topics found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topic;
