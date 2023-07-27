import React from 'react'
import './Internship_Main.css'
import Intern_pro from '../Intern_pro/Intern_pro'
import {Link} from 'react-router-dom'
import url1 from '../../assets/internship img/3.png'
import url2 from '../../assets/internship img/4.png'
import url3 from '../../assets/internship img/5.png'
import url4 from '../../assets/internship img/6.png'
import url5 from '../../assets/internship img/7.png'
import url6 from '../../assets/internship img/8.png'



const Internship_Main = () => {
  return (
    <div className="intern_home">
        <div className="info">
            <div className="heading">
            <h1>Lauch<span> Career </span> with an Exciting Internship at Confly Designs</h1>
            </div>
            <div className="sub-info">
            <p>Gain Valuable Experience and Develop Your Skills, whenever needed.</p>
            </div>
        </div>
        <div className="search_bar">
            <div className="search">
                
                <div className="input_stream">
                    <div className="icon">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="input_feild">
                        <input className='input_internship' placeholder='Candidates Skillset' />
                    </div> 
                    
                </div>
                <div className="input_stream">
                    <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="input_feild">
                        <input className='input_internship' placeholder='Hiring Location' />
                    </div> 
                    
                </div>
                <div className="search_button">
                    <Link className='search_btn' to='/internshipPage'>Get Started</Link>
                </div>
                
            </div>
        </div>
        <div className="stars">
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/verified-recruiters.007d876.svg'/>
                </div>
                <div className="count">
                    <b>19+</b>
                </div>
                <div className="info">
                Verified Interns Hired
                </div>
            </div>
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/jobs-posted.d87985b.svg'/>
                </div>
                <div className="count">
                    <b>50+</b>
                </div>
                <div className="info">
                Total Hired
                </div>
            </div>
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/chat-conversations.b5998e5.svg'/>
                </div>
                <div className="count">
                    <b>250+</b>
                </div>
                <div className="info">
                Hired After Course Completion
                </div>
            </div>
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/job-seekers.a85291b.svg'/>
                </div>
                <div className="count">
                    <b>70%</b>
                </div>
                <div className="info">
                Course to hiring Ratio.
                </div>
            </div>
        </div>

        <Intern_pro/>
        <div className="sub-heading">
            <h1>Popular Categories</h1>
        </div>


        <div className="categories">
            <div className="catego">
                <div className="image">
                    <img src={url1} alt="" />
                </div>
                <div className="catego-name">
                Part Time
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src={url2} alt="" />
                </div>
                <div className="catego-name">
                Engineering
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src={url3} alt="" />
                </div>
                <div className="catego-name">
                Ngo
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src={url4} alt="" />
                </div>
                <div className="catego-name">
                Business/MBA
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src={url5} alt="" />
                </div>
                <div className="catego-name">
                Design
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src={url6} alt="" />
                </div>
                <div className="catego-name">
                Science
                </div>
            </div>
            {/* <div className="catego">
                <div className="image">
                    <img src={url6} alt="" />
                </div>
                <div className="catego-name">
                Media
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src={url6} alt="" />
                </div>
                <div className="catego-name">
                Humanities
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Internship_Main