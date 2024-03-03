import React from 'react';
import Card from '../Card/Card';
import Image from '../../image.jsx';


function About() {
  return (
    // <div className="flex flex-wrap justify-center items-center h-full">
    <div className="grid grid-rows-1 md:grid-rows-3 gap-8 mx-16 mb-8 mt-2 h-full">
      <Card
        Content=" I'm Astha Rao, a dedicated front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in frameworks like React and libraries such as Tailwind CSS. Leveraging my skills in C, C++, and Python, I embark on innovative projects that merge creativity with functionality. My recent endeavors include building intuitive user interfaces, responsive web designs, and dynamic web applications. Through meticulous attention to detail and a passion for clean code, I strive to deliver impactful solutions that elevate the user experience. Join me on a journey where technology meets creativity, and let's bring ideas to life, one project at a time."
       Image={('aastha.jpg')} 
        backgroundColor='bg-green-200'
        linkedInLink='https://www.linkedin.com/in/aastha-rao-358a92245/'
         Position='order-1 md:order-1 lg:order-1  '
        Border='rounded-3xl'
      />
      <Card
        Content="My name is Ritika Jhala . I am student at Geetanjali college of science and commerce . Currently , I'm pursuing Bachelor's of computer application in my final year .
        Now talking about my technical skills , I'm proficient in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project.
        Now talking about my strengths, I am hardworking with a positive mindset and good at problem-solving.
        My weakness is I get very nervous in public speaking and giving presentations.
        Thanking you for reading"
        backgroundColor='bg-blue-200  '
        Image={('ritika.jpg')}
        linkedInLink='https://www.linkedin.com/in/ritika-jhala-8b414221a/' 
        Position='  order-3 md:order-2 lg:order-2 mb-20 md:mb-0  '
        Border='rounded-3xl'
        opacity='opacity-80'
      />
      <Card
        Content="My name is Disha vaya. I'm currently a final year student of 'Bachelor's of computer applications' at geetanjali institute of technical studies.
        I've learnt about HTML, CSS, operating system, cloud computing, Java, JavaScript and many others during my graduation. I've also worked as a freelance video editor.
        My weakness is that I procrastinate a lot but my strength is when I get focused and determined even after procrastinating a lot then I don't stop in middle and I always try to do/learn new things.
        Thanking you for reading"
        backgroundColor='bg-yellow-200'
        linkedInLink='https://www.linkedin.com/in/disha-vaya-73453b1b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        Image={('Disha.jpg')}
        Position=' pb-20 '
        Border='rounded-3xl'
      />
    </div>
  );
}

export default About;
