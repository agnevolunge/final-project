import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./PageFooter.module.css"


const PageFooter = () => {
  return (
  
        <div className={styles.footerWrapper}>
            <ul className={styles.footerElementsList}>
                <li className={styles.footerElementItem}>
                    <Link to="mailto: nationalpark@nationalpark.com">Email: nationalpark@nationalpark.com</Link>
                </li>
                <li className={styles.footerElementItem}>
                    <Link to="tel: +123-4567-8910">Phone: +123-4567-8910</Link>
                </li>
            </ul>

        </div>
  
  
  

  )
}

export default PageFooter