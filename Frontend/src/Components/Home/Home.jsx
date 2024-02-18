// import Container from '../Container/Container';
// import CodeSnippet from '../CodeSnippet/Codesnippet.jsx';


// const Home = () => {
//   const htmlCodeSnippet = `<div>\n<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//   <h1>This is a heading</h1>
//   <p>This is a paragraph.</p>
//   </body>
//   </html>\n</div>`;
//   const cssCodeSnippet = `body {\n  body {
//     background-color: lightblue;
//   }
  
//   h1 {
//     color: white;
//     text-align: center;
//   }
  
//   p {
//     font-family: verdana;
//   }\n}`;
//   const jsCodeSnippet = `const greet = () => {\n  alert('Hello, world!');
//   button onclick="myFunction()">Click Me!</button>

// <script>
// function myFunction() {
//   let x = document.getElementById("demo");
//   x.style.fontSize = "25px";
//   x.style.color = "red";
// }
// </script>\n}`;




//   return (
//     <>
  
//     <div>
//       {/* Banner Section */}
//       <div className="banner">
        
//         <img 
//         src="Banner2.jpg"
//          alt="Banner"
//          className='h-full object-contain   bg-black  mix-blend-color-burn w-screen' />

//       </div>

//       {/* HTML Container */}
//       <div className='flex flex-col sm:flex-row'>
//       <Container
//       className='md:h-2'
//         title="LEARN HTML"
//         content={
//           <>
//             <ul className="list-disc pl-6  ">
//               <li> HTML is the backbone of web development, providing a standardized markup language.</li>
//               <li>It uses a tag-based syntax to define the structure and content of web pages.</li>
//               <li>HTML includes elements like headings, paragraphs, links, and images.</li>
//               <li>HTML is essential for creating the basic layout and components of every webpage.</li>
//               <li>HTML documents are interpreted by web browsers to render content on the screen.</li>
//               <li>Tags like &lt;div&gt;, &lt;p&gt;, &lt;a&gt;, and &lt;img&gt; play crucial roles in HTML documents.</li>
//             </ul>
//           </>
//         }
//         cardId='html'
//         BackgroundColor='bg-yellow-200'
//        codeSnippet={htmlCodeSnippet}
//       />
//       </div>

//       {/* CSS Container */}

//       <Container
//         className="bg-green-100"
//         title="LEARN CSS"
//         content={
//           <>
//           <ul className="list-disc pl-6">
//         <li>CSS is a cascading styling language that complements HTML, controlling the presentation of web content.</li>
//        <li> It uses a rule-based system to apply styles like color and layout to HTML elements.</li>
//        <li> CSS enhances design flexibility and maintainability by separating style from structure.</li>
//        <li>Selectors target HTML elements, and properties define their visual attributes.</li>
//        <li>The "cascading" in CSS refers to the priority and inheritance of styles from various sources.</li>
//        <li>Media queries in CSS enable responsive design for different devices and screen sizes.</li>
//           </ul>
//           </>
//         }
//         cardId="css"
//         BackgroundColor='bg-gray-300'
//         codeSnippet={cssCodeSnippet}
        
       
//      />
      

//       {/* JS Container */}
//       <Container
//         title="LEARN JavaScript"
//         content={
//           <>
//           <ul className="list-disc pl-6">
//         <li>JavaScript is a versatile scripting language used for web development.</li>
//        <li>It executes on the client-side, enabling dynamic and interactive web applications. </li>
//        <li>JavaScript manipulates the Document Object Model (DOM) to change content and structure.</li>
//        <li>Event handling in JavaScript responds to user actions like clicks and key presses.</li>
//        <li>Event handling in JavaScript responds to user actions like clicks and key presses.</li>
//        <li>JavaScript frameworks like React, Angular, and Vue.js streamline the development of complex user interfaces.</li>
//           </ul>
//           </>
//         }
//         cardId="javaScriptt"
//         BackgroundColor='bg-blue-200'
//         codeSnippet={jsCodeSnippet}
//      />
      
   
   

    
//     </div>
//     </>
//   );
// };

// export default Home;


import Container from '../Container/Container';
import CodeSnippet from '../CodeSnippet/Codesnippet.jsx';

const Home = () => {
  const htmlCodeSnippet = `<div>\n<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
  </body>
  </html>\n</div>`;
  const cssCodeSnippet = `body {\n  body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
  }\n}`;
  const jsCodeSnippet = `const greet = () => {\n  alert('Hello, world!');
  button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>\n}`;

  return (
    <>
      <div>
        {/* Banner Section */}
        <div className="banner">
          <img
            src="Banner2.jpg"
            alt="Banner"
            className=' object-contain bg-black mix-blend-color-burn w-screen'
          />
        </div>

        {/* HTML Container */}
        <div className='flex '>
          <Container
            className=''
            title="LEARN HTML"
            content={
              <>
                <ul className="list-disc pl-6 ">
                  <li> HTML is the backbone of web development, providing a standardized markup language.</li>
                  <li>It uses a tag-based syntax to define the structure and content of web pages.</li>
                  <li>HTML includes elements like headings, paragraphs, links, and images.</li>
                  <li>HTML is essential for creating the basic layout and components of every webpage.</li>
                  <li>HTML documents are interpreted by web browsers to render content on the screen.</li>
                  <li>Tags like &lt;div&gt;, &lt;p&gt;, &lt;a&gt;, and &lt;img&gt; play crucial roles in HTML documents.</li>
                </ul>
              </>
            }
            cardId='html'
            BackgroundColor='bg-yellow-200'
            codeSnippet={htmlCodeSnippet}
          />
        </div>

        {/* CSS Container */}
        <Container
          className="bg-green-100"
          title="LEARN CSS"
          content={
            <>
              <ul className="list-disc pl-6">
                <li>CSS is a cascading styling language that complements HTML, controlling the presentation of web content.</li>
                <li> It uses a rule-based system to apply styles like color and layout to HTML elements.</li>
                <li> CSS enhances design flexibility and maintainability by separating style from structure.</li>
                <li>Selectors target HTML elements, and properties define their visual attributes.</li>
                <li>The "cascading" in CSS refers to the priority and inheritance of styles from various sources.</li>
                <li>Media queries in CSS enable responsive design for different devices and screen sizes.</li>
              </ul>
            </>
          }
          cardId="css"
          BackgroundColor='bg-gray-300'
          codeSnippet={cssCodeSnippet}
        />

        {/* JS Container */}
        <Container
          title="LEARN JavaScript"
          content={
            <>
              <ul className="list-disc pl-6">
                <li>JavaScript is a versatile scripting language used for web development.</li>
                <li>It executes on the client-side, enabling dynamic and interactive web applications. </li>
                <li>JavaScript manipulates the Document Object Model (DOM) to change content and structure.</li>
                <li>Event handling in JavaScript responds to user actions like clicks and key presses.</li>
                <li>Event handling in JavaScript responds to user actions like clicks and key presses.</li>
                <li>JavaScript frameworks like React, Angular, and Vue.js streamline the development of complex user interfaces.</li>
              </ul>
            </>
          }
          cardId="javaScript"
          BackgroundColor='bg-blue-200'
          codeSnippet={jsCodeSnippet}
        />
      </div>
    </>
  );
};

export default Home;
