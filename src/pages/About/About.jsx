import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book Collection</h2>
            <p className='fs-17'>Books are the quietest and most constant of friends; they are the most accessible and wisest of counsellors and the most patient of teachers.” These are the words told by Charles W. Eliot. Do you agree with this statement? Read the article and realise the true power of books. Try to prepare an enlightening speech on books and let your friends reap some knowledge from you.</p>
            {/* <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
