import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutLinkIcon() {
  return (
    <div className='about-link'>
          <Link to='/about'>
               <FaQuestion size={30} />
          </Link>
          {/* String '/about' ki jghe per hum object bhi pass kr sakte h
           see below example: use search for send query and hash for hash data.*/}
          {/* <Link to={{
               pathname : '/about' ,
               search : '?sort=name' ,
               hash : '#rahul'
          }}> 
               <FaQuestion size={30} />
          </Link> */}
     </div>
  )
}

export default AboutLinkIcon