import React from 'react'
import styles from "./Contact.module.css"
import Button from '../Buttons/Button'
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_Form}>
            <Button/>
        </div>
        <div className={styles.contact_Image}></div>
    </section>
  )
}

export default ContactForm
