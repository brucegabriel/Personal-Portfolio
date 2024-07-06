import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {

  const today = new Date().getFullYear()


  return (
    <footer style={{display:"flex", justifyContent:"center", alignItems:"center"}} className='bg-gray-700'>
      <p style={{display:"flex", gap:"20px", alignItems:"center"}}>
        &copy; {today} Copyright
        <a href="https://www.instagram.com/mesodamnfly/" className='' style={{textDecoration:"none",color:"white",display:"flex", gap:"10px", alignItems:"center"}} target='_blank'>
          Bruce Gabriel
          <SocialIcon 
            url='https://www.instagram.com/mesodamnfly/'
            style={{width:"50px"}}
          />
        </a>
      </p>
    </footer>
  )
}

export default Footer
