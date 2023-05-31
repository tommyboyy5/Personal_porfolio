import React from 'react'
import "../styles/home.css"
import myResume from "../Lai_Chin_Hong.pdf"

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is TommyLai</h2>
                <div className='prompt'>
                    <p>Highly motivated information engineer student with good in web design, database design, andsoftware development. A collaborative team player with strong communication skills, dedicated to ongoing professional development</p>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>React,Bootstrap,Wordpress,HTML,CSS,Javascript</span>
                    </li>
                    <li className='item'>
                        <h2>Backend</h2>
                        <span>NodeJS,MySQL</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>Javascript,Python,C,Java,Linux</span>
                    </li>
                </ol>

            </div>
            <div className="Resume">
                <h2>Get my Resume!!!</h2>
                <a href={myResume} download="Resume" target="_blank" rel="noreffer">
                    <button>Resume</button>
                </a>
            </div>
        </div>
    )
}

export default Home
