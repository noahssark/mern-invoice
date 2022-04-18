import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>We've got your invoicing covered</h1>
                <div className={styles.paragraph}>
                   
                    <p></p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="invoice.jpg" alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
