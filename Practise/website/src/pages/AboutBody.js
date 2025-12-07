import React from 'react';
import stack from '../img/stack.png';
import nepal from '../img/nepal.png';

export default function AboutBody() {

  const experiences = [
    {
      company: "Aadim Innovation",
      detail: "Learned and created wonderful websites with React.js",
      duration: "2025 - Present",
    },
    {
      company: "Spotify",
      detail:
        "Developed and shipped highly interactive application for music",
    },
    {
      company: "Stripe",
      detail:
        "Built and shipped Apple Music integration in Facebook Messenger",
    },
    {
      company: "Webflow",
      detail:
        "Contributed extensively to Music.js, a JavaScript framework",
    },
  ];

  const skills = [
    {
      title: "Web Design",
      list: ["UI/UX Design", "Responsive Design", "Wireframing", "User Research"],
    },
    {
      title: "Frontend",
      list: ["JavaScript", "React.js", "Next.js", "CSS3"],
    },
    {
      title: "Backend",
      list: ["Node.js", "MongoDB", "Express.js", "Vercel"],
    },
    {
      title: "Soft Skills",
      list: ["Effective Communication", "Collaboration", "Commitment", "Leadership"],
    },
  ];

  return (
    <>
      
      <div className='p-5 mt-5'>
        <div className='font-bold text-[clamp(1rem,9vw,9rem)]'>
          About me<span className='text-purple-500'>.</span>
        </div>

        <div className='flex mt-3'>
          <div className='bg-purple-500 w-5 h-20 mr-5'></div>

          <div className='text-gray-500 font-bold text-[clamp(1rem,2vw,2rem)]'>
            Developing beautiful and functional websites is what I love doing,
            and that's why I give my all in every new challenge.
          </div>
        </div>
      </div>

     
      <div className='flex mx-3 flex-col md:flex-row gap-20 mt-10'>

      
        <div>
          <div className='font-bold text-[clamp(1rem,2vw,2rem)]'>
            My Stack<span className='text-purple-500'>.</span>
          </div>

          <img
            className='w-full max-w-[600px] max-h-[500px] rounded-3xl object-cover mt-5'
            src={stack}
            alt="stack"
          />
        </div>

       
        <div>
          <div className='font-bold text-[clamp(1rem,2vw,2rem)]'>
            My Special Place<span className='text-purple-500'>.</span>
          </div>

          <img
            className='w-full max-w-[1250px] max-h-[1250px] rounded-3xl object-cover mt-5'
            src={nepal}
            alt="nepal"
          />
        </div>
      </div>

     
      <div className='my-40'>
        <div className='font-bold text-[clamp(1rem,9vw,9rem)]'>
          Experience<span className='text-purple-500'>.</span>
        </div>

        <div className='mt-10'>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className='flex flex-col md:flex-row justify-between items-center mx-10 text-center my-20'
            >
              <div className='text-purple-500 font-bold text-[clamp(1rem,2vw,2rem)]'>
                {exp.company}
              </div>

              <div className='text-gray-500 font-bold max-w-xl'>
                <div className='text-[clamp(1rem,2vw,2rem)]'>{exp.detail}</div>
                {exp.duration && (
                  <div className='text-[clamp(1rem,1.5vw,1.5rem)] mt-2'>
                    ({exp.duration})
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className='my-40'>
        <div className='font-bold text-[clamp(1rem,9vw,9rem)]'>
          Skills<span className='text-purple-500'>.</span>
        </div>

        <div className='flex flex-wrap justify-around gap-20 text-center mt-40'>
          {skills.map((skill, i) => (
            <div key={i}>
              <div className='text-[clamp(1rem,3vw,3rem)] font-bold'>
                {skill.title}
              </div>

              <ul className='text-gray-500 text-[clamp(1rem,1.5vw,1.5rem)] mt-5 space-y-2'>
                {skill.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
