import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import "../styles/Home.css"



function Home() {
  return (
    <div className='home'>
      <div className='about'>
       <h2>Hi, My Name is Yungzee</h2> 
       <div className='prompt'>
        <p>A software developer with a passion for learning and developing</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
       </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>HTML, CSS, SCSS, JavaScript,React</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home