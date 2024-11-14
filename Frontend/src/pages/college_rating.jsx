import React from "react";
import 'boxicons/css/boxicons.min.css';
import '../style/college_rating.css';
import NavBar from '../components/navbar.jsx';

const Rating = () => {
    return (
        <>
            <NavBar />
            <div className="main">
                <div className="college_rating">
                    <h1>College Coders</h1>
                </div>
                
                {/* Leetcode Table */}
                <div className="table-container">
                    <h2>Leetcode</h2>
                    <table className="rating-table">
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                        </tr>
                        <tr><td>1</td><td>A</td></tr>
                        <tr><td>2</td><td>B</td></tr>
                        <tr><td>3</td><td>C</td></tr>
                        <tr><td>4</td><td>D</td></tr>
                        <tr><td>5</td><td>E</td></tr>
                    </table>
                </div>
                
                {/* Codeforces Table */}
                <div className="table-container">
                    <h2>Codeforces</h2>
                    <table className="rating-table">
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                        </tr>
                        <tr><td>6</td><td>F</td></tr>
                        <tr><td>7</td><td>G</td></tr>
                        <tr><td>8</td><td>H</td></tr>
                        <tr><td>9</td><td>I</td></tr>
                        <tr><td>10</td><td>J</td></tr>
                    </table>
                </div>
                
                {/* Codechef Table */}
                <div className="table-container">
                    <h2>Codechef</h2>
                    <table className="rating-table">
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                        </tr>
                        <tr><td>11</td><td>K</td></tr>
                        <tr><td>12</td><td>L</td></tr>
                        <tr><td>13</td><td>M</td></tr>
                        <tr><td>14</td><td>N</td></tr>
                        <tr><td>15</td><td>O</td></tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Rating;
