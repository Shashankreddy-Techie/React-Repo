import React from 'react'
import styles from "./Contactheader.module.css"
const ContactHeader = () => {
  return (
    <div className={`container
    ${styles.contact_section}
    `}>
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum voluptate ullam magni, quia recusandae fugit accusantium 
        atque consequatur ratione assumenda at libero ex officia nostrum, 
        adipisci minima corrupti est. Unde?</p>
    </div>
  )
}

export default ContactHeader
