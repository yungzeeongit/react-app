import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import MailIcon from "@material-ui/icons/Mail"
import Github from "@material-ui/icons/GitHub"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <TwitterIcon />
        <InstagramIcon /> 
        <MailIcon />
        <a href="https://www.linkedin.com/in/ogunbiyi-babatunde/">
        <LinkedInIcon />
        </a>
       
        <a href='https://github.com/yungzeeongit'>
        <Github  />
        </a>
       
        </div>
        <p>&copy; 2022 yungzeetech.com</p>
    </div>
  )
}

export default Footer