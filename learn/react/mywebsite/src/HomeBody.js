import React from 'react'
import Diwash from './Diwash.jpg'
import monitor from './monitor.png'
import coding from './coding.png'
import worldwide from './worldwide.png'
import pngwing from './pngwingcom.png'
// import goal from './goal.png'
import englishlanguage from './englishlanguage.png'
import pngegg from './pngegg.png'

import './HomeBody.css'
export default function HomeBody() {
  return (
      <main>
        <div className="m-10 gap-20 text-3xl text-center justify-center   ">
            <div> <img className="w-30 h-auto border-5 rounded-100" src={Diwash} alt="Diwash"/></div>
            <div className="introcontent">
                <div className="introduction">
                    DIWASH KARKI
                </div>

                <div>Motivated computer science
                    student currently studying at
                    Admin National College. Eager to
                    gain practical experience through
                    an internship in programming or
                    web development. Possess
                    foundational knowledge in C
                    programming and web
                    technologies, with a strong
                    willingness to learn and contribute
                    to real-world projects</div>

            </div>
        </div>
        <div className="skill">
            <fieldset>
                <legend> SKILLS</legend>
                <div className="skill2">
                    <div className="skillbox">
                        <img src={monitor} alt="image"/>
                        <div>Basic Computer Science</div>
                    </div>
                    <div className="skill2">
                        <div className="skillbox">
                            <img src={coding} alt="image"/>
                            <div>Basic C programming</div>
                        </div>
                    </div>
                    <div className="skill2">
                        <div className="skillbox">
                            <img src={worldwide} alt="image"/>
                            <div>Basic Web Development</div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div>

            <div className="dis">
                <div className="midcontent">
                    <div className="mid">
                        MISSION
                    </div>

                    <div>My mission is to learn, grow, and build meaningful digital projects that improve my skills and
                        help others. I strive to develop creativity and technical abilities by creating practical and
                        impactful projects. My aim is to build clean, responsive, and user-friendly websites and craft
                        engaging, accessible designs that solve real problems. I want to provide professional solutions
                        that add value and exceed expectations, while continuously improving and contributing through
                        quality work.</div>

                </div>
                <div> <img className="img3" src={englishlanguage} alt="pic"/></div>
            </div>
        </div>
        <div className="language">
            <fieldset>
                <legend> LANGUAGE</legend>
                <div className="language2">
                    <div className="languagebox">
                        <img className="img002" src={englishlanguage} alt="image"/>
                        <div>Advanced English</div>
                    </div>
                    <div className="language2">
                        <div className="languagebox">
                            <img className="img001" src={pngegg} alt="image"/>
                            <div>Native Nepali</div>
                        </div>
                    </div>
                    <div className="language2">
                        <div className="languagebox">
                            <img className="img001" src={pngwing}alt="image"/>
                            <div>Fluent Hindi</div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div className="margin-top" id="contact">
            <div className="contacthead">
                LETS BUILD TOGETHER !
            </div>
            <div className="button0">
                <input type="button" className="button1" value="VIEW CV"/>
                <button className="button2">
                    <a href="">See Work</a>
                </button>
                <button className="button3">
                    <a href="./contact.html ">Contact ME</a>
                </button>
            </div>
        </div>
    </main>
    
    
  )
}
