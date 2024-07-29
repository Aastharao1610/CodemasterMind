import React from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from './TutorialLayout'

function JavaScript() {
  return (
<TutorialLayout
 Content={
  <div >
  <h1 className='text-3xl text-center my-6  text-green-600 underline'>Javascript</h1>
  <p className='text-lg'>
   
    {`

JavaScript is a high-level, interpreted programming language primarily used for making web pages interactive and dynamic. It is widely used for both client-side and server-side web development. JavaScript was originally developed by Netscape as a client-side scripting language for web browsers. Over time, it has evolved significantly, with several versions released to improve the language's capabilities, performance, and compatibility.


    ` } 
    
     </p>
     <code>
      <pre className='bg-zinc-700 text-white w-max mx-auto my-4 px-12'>
            {`
 const greet = () => {\n  alert('Hello, world!');
 button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
 let x = document.getElementById("demo");
 x.style.fontSize = "25px";
 x.style.color = "red";
}
</script>
`}
          
            </pre>
          </code>
          <div className=''>
   <p className='text-xl px-96 mb-10'>Basic boilerplate  boilerplate of the Javascript
   </p>
   <ol className=' list-disc mx-10 mb-6 text-xl'>
    <h3 className='text-2xl py-6'>Here's an overview of some of the major versions of JavaScript:</h3>
    <li>{`

JavaScript 1.0 (1996):

The initial version of JavaScript was released in 1996 by Netscape Communications Corporation.
It provided basic scripting capabilities for web pages, such as form validation and dynamic content manipulation.`}</li>
 <li>{`
JavaScript 1.1 to 1.5:
These versions introduced incremental improvements and enhancements to the language, including support for regular expressions, error handling with try...catch, and improvements to the Date object.
`}</li>
<li>{`
ECMAScript 3 (1999):
ECMAScript is the standardized specification for JavaScript. ECMAScript 3 was a major update that became the basis for modern JavaScript implementations.
It introduced features like JSON object, Array methods (forEach(), map(), etc.), and more.
`}</li>
 <li>{`
ECMAScript 5 (2009):
ECMAScript 5 introduced significant enhancements to the language, including strict mode ('use strict'), Object.create(), Array.isArray(), and more.
It also brought improved support for JSON and better reflection and property enumeration capabilities.
`}</li>
<li>{`
ECMAScript 6 (2015) and beyond:
ECMAScript 6, also known as ES6 or ECMAScript 2015, was a major milestone in JavaScript's evolution. It introduced numerous new features and syntax enhancements to the language.
Key features introduced in ES6 include let and const for variable declarations, arrow functions, classes, template literals, destructuring assignments, and more.
Since ES6, ECMAScript has been following a yearly release cycle, introducing new features and improvements regularly. Subsequent versions like ES7 (2016), ES8 (2017), ES9 (2018), ES10 (2019), ES11 (2020), ES12 (2021), and so on, have brought additional features and refinements to the language.
`}</li>
<li>{`
ECMAScript 2022 and beyond:
ECMAScript continues to evolve with new proposals and features aimed at improving developer productivity, language expressiveness, and performance.
Each year, the ECMAScript specification evolves with new features and improvements, often driven by the needs of web developers and advancements in web technology.
JavaScript is an ever-evolving language, with ongoing efforts to improve its capabilities, performance, and compatibility across different platforms and environments. Developers can take advantage of modern JavaScript features to build powerful and efficient web applications.





`}</li>
   </ol>
   
   </div>

  </div>
 }


>
  
  
    </TutorialLayout>
  )
}

  

export default JavaScript
