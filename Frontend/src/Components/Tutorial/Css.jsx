import React from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from './TutorialLayout'

function Css() {
  return (
<TutorialLayout
 Content={
  <div >
  <h1 className='text-3xl mx-96 my-6 text-green-600 underline'>CSS : Cascading Styling Sheet</h1>
  <p className='text-lg'>
   
    {`

CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML, or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
CSS plays a crucial role in web development by providing the means to control the layout, styling, and appearance of HTML elements. It separates the structure and content of a web page (defined in HTML) from its visual presentation, allowing developers to create visually appealing and user-friendly websites.
   
   ` } 
   <h1>Why to use css?</h1>

    {`

The primary purpose of CSS is to style HTML elements, defining their appearance, layout, and behavior across various devices and screen sizes. By applying stylesheets to HTML documents, developers can achieve consistency in design, improve user experience, and enhance accessibility.
   
   ` } 
     </p>
     <code>
      <pre className='bg-zinc-700 text-white w-max mx-auto my-4 px-12'>
            {`
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

/* Specific Styles */
h1 {
  color: #333;
}

.container {
  width: 80%;
  margin: 0 auto;
}
            `}
            </pre>
          </code>
          <div className=''>
   <p className='text-xl px-96 mb-10'>Basic boilerplate  boilerplate of the Css
   </p>
   <ol className='text-base list-disc mx-10 mb-6'>
  
   </ol>
   <p className='text-xl mx-4'>This was the basic overview of Css boilerplate</p>
   </div>

  </div>
  
 }


>
  
  
    </TutorialLayout>
  )
}

  

export default Css
