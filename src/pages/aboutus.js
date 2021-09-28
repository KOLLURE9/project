import React from 'react';
import styles from "./aboutus.module.css";

function AboutUsPage (){
    return(
        <div>
            <h2 className={styles.secondary}>WHY READING IS IMPORTANT</h2> 
            

            <div className={styles.left}>
            <img src="importance.png" className={styles.image2}></img>
            </div>

            <div className={styles.right}>
            <h3 className={styles.heading} >1.It helps you discover yourself</h3>
            <p className={styles.para}>Every good book opens up new dimensions of thoughts for the reader. When you read a book, you somehow try to connect the events, emotions, experiences, and characters in the books with yourself.This not only keeps you engrossed in the book but also makes you realize how you would feel and react to those situations that have not yet occurred in your life. It helps you broaden your dimensions of likes and dislikes.So, with every page that you read, you may have a chance to discover a new part of yourself!</p>
           
           <h3 className={styles.heading}>2.Imparts valuable lessons from years of experiences</h3>
           <p className={styles.para}>Books are not written in a day. For an author, it takes a lot of hard work, understanding, experiences, knowledge, and in many cases a lot of pain to come up with a single book. But we as a reader get to read them in just weeks or days thereby living years of experiences in considerably less time.</p>
            
            <h3 className={styles.heading}>3.It improves your Focus and Concentration</h3>
            <p className={styles.para}>The Internet has revolutionized our world. But there’s a huge drawback too. For many of us, a large part of our day is spent surfing, chatting, watching videos, reading unnecessary memes and articles online. No wonder people are growing more impatient and losing focus.However, reading books is one of those constructive habits that help us improve our concentration power. It helps us to train our brain to focus our attention and live in the present.</p>

            <h3 className={styles.heading}>4.Importance of Reading in memory enhancement</h3>
            <p className={styles.para}>There are a lot of things that we need to remember while reading a book. You need to keep in mind the name of the characters and their features, the name of the places, plots, and sub-plots, the sequence of events, important conversations, etc.As your brain learns to remember the information from the storyline, it also becomes better at remembering other important things of your life.So, by reading books, you are also indirectly training your brain for a better memory!</p>
            </div>

        </div>
    );
}

export default AboutUsPage;
