import React from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from './TutorialLayout'

function Css() {
  return (
<TutorialLayout
 Content={
  <div >
  <h1 className='text-3xl text-center my-6 text-green-600 underline'>CSS : Cascading Styling Sheet</h1>
  <p className='text-lg py-5'>
   
    {`

CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML, or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
CSS plays a crucial role in web development by providing the means to control the layout, styling, and appearance of HTML elements. It separates the structure and content of a web page (defined in HTML) from its visual presentation, allowing developers to create visually appealing and user-friendly websites.
   
   ` } 
   <h1 className='text-green-700 px-4 py-9 text-center text-2xl'>Why to use css?</h1>

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
   <p className='text-xl text-center mb-10'>Basic boilerplate  boilerplate of the Css
   </p>

   
   <p className='text-xl mx-4 text-center'>This was the basic overview of Css boilerplate</p>
   </div>
   {/* <div>
<h2 className='text-blue-500 font-bold text-center text-4xl gap-2 underline px-5 py-3'>Types of Css</h2>
<p className='text-lg text-center py-10'>There are three types of CSS by which we can style our website</p>
<ol className='text-black  text-xl text-center py-4 '>
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
</ol>
</div> */}
  </div>
  
 }


>
  
  
    </TutorialLayout>
  )
}

  

export default Css
