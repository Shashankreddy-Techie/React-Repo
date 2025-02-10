import React from 'react'
import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";
const Button = () => {
  return (
    <div className={styles.primary-btn}>
      <MdMessage/>
      Button
    </div>
  )
}

export default Button
