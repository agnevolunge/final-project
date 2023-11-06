import React from 'react'

import { Link } from 'react-router-dom'
import "./PageFooter.css"

const PageFooter = () => {
  return (
   
   <footer>
        <div className="footer-wrapper">
            <ul className="footer-elements-list">
                <li className="footer-element-item">
                    <Link to="mailto: nationalpark@nationalpark.com">Email: nationalpark@nationalpark.com</Link>
                </li>
                <li className="footer-element-item">
                    <Link to="tel: +123-4567-8910">Phone: +123-4567-8910</Link>
                </li>
            </ul>
        </div>
    </footer>
  

  )
}

export default PageFooter