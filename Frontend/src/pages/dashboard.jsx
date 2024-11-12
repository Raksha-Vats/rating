import React from "react";
import 'boxicons/css/boxicons.min.css';
import '../style/dashboard.css';
import NavBar from '../components/navbar.jsx';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        {/* Greeting heading */}
        <h1 className="greeting">Hi !!! Raksha Kumari</h1>

        {/* Contest Ratings Section */}
        <div className="contest">
          <h2>Your Ratings</h2>
          <div className="rating-container">
            <div className="rating-card">
              <h3>Leetcode</h3>
              <h5>1345</h5>
            </div>
            <div className="rating-card">
              <h3>Codeforces</h3>
              <h5>1345</h5>
            </div>
            <div className="rating-card">
              <h3>Codechef</h3>
              <h5>1345</h5>
            </div>
          </div>
        </div>

        {/* Problems Solved Section */}
        <div className="problem">
          <h2>Problems Solved</h2>
          <div className="problem-container">
            <div className="leetcodeProblems">
              <h3>Leetcode</h3>
              <h5>200</h5>
              <p>No of Problems Solved</p>
            </div>
            <div className="leetcodeProblems">
              <h3>Codeforces</h3>
              <h5>200</h5>
              <p>No of Problems Solved</p>
            </div>
            <div className="leetcodeProblems">
              <h3>Codechef</h3>
              <h5>200</h5>
              <p>No of Problems Solved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
