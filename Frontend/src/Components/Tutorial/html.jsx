import React from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from './TutorialLayout'

function Html() {
  return (
<TutorialLayout
 Content={
  <div >
  <h1 className='text-3xl mx-96 my-6 text-green-600'>HTML: HyperText Markup Language</h1>
  <p className='text-lg'>
   
    {`

  HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
  
  "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.
  
  HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <search>, <output>, <progress>, <video>, <ul>, <ol>, <li> and many others.
  
  An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "<" and ">". The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the <title> tag can be written as <Title>, <TITLE>, or in any other way. However, the convention and recommended practice is to write tags in lowercase.
    ` } 
    
     </p>
     <code>
      <pre className='bg-zinc-700 text-white w-max mx-auto my-4 px-12'>
            {`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
            `}
            </pre>
          </code>
          <div className=''>
   <p className='text-xl px-96 mb-10'>Basic boilerplate  boilerplate of the html5 </p>
   <ol className='text-base list-disc mx-10 mb-6'>
    <li>{`<!DOCTYPE html> :This is a document type declaration (DOCTYPE) that specifies the HTML version being used. In this case, it's HTML5.`}</li>
    <li>{`<html lang="en"> :This opens the HTML document. The lang="en" attribute indicates that the content is in English.`}</li>
    <li>{`<head> :This is the head section of the HTML document. It contains meta-information, links to external stylesheets, and other resources that are not part of the visible content.`}</li>
    <li>{`<meta charset="UTF-8"> :This meta tag sets the character set for the document to UTF-8, which is a widely used character encoding.`}</li>
    <li>{`<title>Your Page Title</title>:This is the title of the webpage. It appears in the browser's title bar or tab.`}</li>
    <li>{`</head> :Closes the head section.`}</li>
    <li>{`<body> :This is the body section of the HTML document. It contains the visible content of the webpage.`}</li>
    <li>{`<!-- Content goes here -->:All the cotent of html goes here..for example:-<p>,<div>,<h1> all the tags and elements of html `}</li>
    <li>{`</body> :Closes the body Section.`}</li>
    <li>{`</html>:Closes the html section`}</li>
   </ol>
   <p className='text-xl mx-4'>This was the basic overview of Html boilerplate</p>
   </div>
   <p className='text-2xl'>Now we will understand what are html <span> Element</span></p>
  </div>
 }


>
  
  
    </TutorialLayout>
  )
}

  

export default Html

// Html.jsx
// import React, { useState } from 'react';
// import TutorialLayout from './TutorialLayout';

// function Html() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 3; // Total number of pages in the HTML tutorial

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <TutorialLayout
//       Content={
//       <div>
    
//   <h1 className='text-3xl mx-96 my-6 text-green-600'>HTML: HyperText Markup Language</h1>
//   <p className='text-lg'>
   
//     {`

//   HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
  
//   "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.
  
//   HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <search>, <output>, <progress>, <video>, <ul>, <ol>, <li> and many others.
  
//   An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "<" and ">". The name of an element inside a tag is case-insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the <title> tag can be written as <Title>, <TITLE>, or in any other way. However, the convention and recommended practice is to write tags in lowercase.
//     ` } 
    
//      </p>
//      <code>
//       <pre className='bg-zinc-700 text-white w-max mx-auto my-4 px-12'>
//             {`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Your Page Title</title>
// </head>
// <body>
//   <!-- Content goes here -->
// </body>
// </html>
//             `}
//             </pre>
//           </code>
//           <div className=''>
//    <p className='text-xl px-96 mb-10'>Basic boilerplate  boilerplate of the html5
//    </p>
//    <ol className='text-base list-disc mx-10 mb-6'>
//     <li>{`<!DOCTYPE html> :This is a document type declaration (DOCTYPE) that specifies the HTML version being used. In this case, it's HTML5.`}</li>
//     <li>{`<html lang="en"> :This opens the HTML document. The lang="en" attribute indicates that the content is in English.`}</li>
//     <li>{`<head> :This is the head section of the HTML document. It contains meta-information, links to external stylesheets, and other resources that are not part of the visible content.`}</li>
//     <li>{`<meta charset="UTF-8"> :This meta tag sets the character set for the document to UTF-8, which is a widely used character encoding.`}</li>
//     <li>{`<title>Your Page Title</title>:This is the title of the webpage. It appears in the browser's title bar or tab.`}</li>
//     <li>{`</head> :Closes the head section.`}</li>
//     <li>{`<body> :This is the body section of the HTML document. It contains the visible content of the webpage.`}</li>
//     <li>{`<!-- Content goes here -->:All the cotent of html goes here..for example:-<p>,<div>,<h1> all the tags and elements of html `}</li>
//     <li>{`</body> :Closes the body Section.`}</li>
//     <li>{`</html>:Closes the html section`}</li>
//    </ol>
//    <p className='text-xl mx-4'>This was the basic overview of Html boilerplate</p>
//    </div>
//    <p className='text-2xl'>Now we will understand what are html <span> Element</span></p>
//   </div>
//  }

//       onNext={handleNext}
//       onPrevious={handlePrevious}
//       link="html"
//     />
//   );
// }

// export default Html;
