import  { useState, useEffect } from 'react';
import QuizLayout from '../../Quiz/Quizlayout';
import SubmitButton from '../../Quiz/Submit';
import TimeTracking from '../../Quizreuse/Timer';
import Score from '../../Quizreuse/Score';


const HtmlEasy = () => {
  const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Highly Typed Machine Learning', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    
    {
      question:'Which tag is used to define an anchor or hyperlink in HTML?',
      options:[' <a>','<h>','<p>','<link>'],
      correctAnswer:'<a>'
    },
    {
      question:'What is the default file extension for an HTML file?',
      options:[' .html','.htm',' .web','.xml'],
      correctAnswer:'.html'
    },
    {
      question:'How can you create an ordered list in HTML?',
      options:[' <ol>','<ul>','<li>','<list>'],
      correctAnswer:'<ol>'
    },
    {
      question:'Which tag is used to insert a line break in HTML?',
      options:[' <lb>','<br>','<linebreak>','<Break>'],
      correctAnswer:'<br>'
    },
    {
      question:'In HTML, what does the acronym DOCTYPE stand for?',
      options:['Document Type ','Document Type Declaration','Document Text','Document Table'],
      correctAnswer:'Document Type Declaration'
    },
    {
      question:'Which attribute is used to define inline styles in HTML?',
      options:[' class','style','font','css'],
      correctAnswer:'style'
    },
    {
      question:'How can you create a comment in HTML?',
      options:[' <!-- This is a comment -->','// This is a comment','This is a comment','/* This is a comment */'],
      correctAnswer:'<!-- This is a comment -->'
    },
    {
      question:'Which tag is used to define the header of a table in HTML?',
      options:[' <th>','<head>','<header>','<td>'],
      correctAnswer:'<header>'
    },
    {
      question:'What is the purpose of the alt attribute in an HTML image tag?',
      options:[' To define the alignment of the image',
      'To specify the alternate text for the image',
      'To set the image source URL',
      'To control the image width and height'],
      correctAnswer:' To specify the alternate text for the image'
    },
    {
      question:'Which tag is used to create an unordered list in HTML?',
      options:[' <ol>','<ul>','<li>','<list>'],
      correctAnswer:'<ul>'
    },
    {
      question:'What is the purpose of the href attribute in an anchor tag?',
      options:[' To define the heading of the link',
      'To specify the hypertext reference or URL of the link',
      'To set the link as hidden',
      'To control the link style'
    ],
      correctAnswer:'To specify the hypertext reference or URL of the link'
    },
    {
      question:'What is the purpose of the colspan attribute in an HTML table?',
      options:[' To merge table cells horizontally','To merge table cells vertically','To set the background color of a cell','define the column width'],
      correctAnswer:' To merge table cells horizontally'
    },
    {
      question:'How can you create a hyperlink that opens in a new browser window?',
      options:['<a href="url" target="_blank">Link</a>','<a href="url" target="_new">Link</a>','<a href="url" newwindow>Link</a>','<a href="url" openwindow>Link</a>'],
      correctAnswer:'<a href="url" target="_blank">Link</a>'
    },
    {
      question:'What is the purpose of the meta tag in HTML?',
      options:[' To create a clickable area on an image map','To define metadata about an HTML document','To set the character encoding of the document','To style the text within a document'],
      correctAnswer:'To define metadata about an HTML document'
    },
    {
      question:'Which HTML tag is used to define the body of the document?',
      options:[' <body>','<doc>','<content>','<main>'],
      correctAnswer:'<body>'
    },
    {
      question:'',
      options:[' <par>','<paragraph>','<p>','<Text>'],
      correctAnswer:'<p>'
    },
    {
      question:'What is the purpose of the type attribute in an input tag?',
      options:["To specify the input's color","To define the input's type or functionality","To set the input's font style",
      "To control the input's width and height"],
      correctAnswer:"To define the input's type or functionality"
    },
    {
      question:'Which HTML tag is used to create a hyperlink?',
      options:[' <link>','<href>','<url>','<a>'],
      correctAnswer:'<a>'
    },
    {
      question:'What is the purpose of the target attribute in an anchor tag?',
      options:[' <par>','<paragraph>','<p>','<Text>'],
      correctAnswer:'<p>'
    },
    {
      question:'Which tag is used to define a paragraph in HTML?',
      options:["To define the anchor's text","To set the anchor's color","To specify the location where the linked document will open","To control the anchor's alignment"],
      correctAnswer:"To specify the location where the linked document will open"
    },
    {
      question:'How can you make text bold in HTML?',
      options:[' <Strong>Bold Text</Strong','<bold>Bold Text</bold>','<b>Bold Text</b>','<i>Bold Text</i>'],
      correctAnswer:'<b>Bold Text</b>'
    },
    {
      question:'Which tag is used to insert an image in HTML?',
      options:[' <img>','<image>','<insert>','<Picture>'],
      correctAnswer:'<img>'
    },
    {
      question:'What is the purpose of the <figcaption> element in HTML?',
      options:[' Define a figure caption for an image'," Create a new paragraph", "Set the document's language" ,"Embed a video"],
      correctAnswer:'Define a figure caption for an image'
    },
    {
      question:' Which attribute is used to define the source URL of an embedded video in HTML?',
      options:[' url','source','video-source','src'],
      correctAnswer:'src'
    },
    {
      question:'How do you create a hyperlink that opens an email window?',
      options:[' <a href="mailto:email@example.com"> ','<a mailto="email@example.com">',' <a link="email@example.com">','<a email="email@example.com">'],
      correctAnswer:'<a href="mailto:email@example.com">'
    },
    {
      question:'Which HTML element is used to define a subscripted text?',
      options:[' <sub>','<Subscript>','<sup>','<below>'],
      correctAnswer:'<sub>'
    },
    {
      question:'What is the purpose of the <cite> element in HTML?',
      options:[' Create a circle',"Define a citation","Set the document's title",'Define a code block'],
      correctAnswer:'Define a citation'
    },
    {
      question:' Which attribute is used to specify the alignment of text within a table cell in HTML?',
      options:['align','text-align','cell-align','align-text'],
      correctAnswer:'text-align'
    },
    {
      question:'How can you create a button in HTML?',
      options:['<btn>,<button>','<imput type="button">','<create-button>'],
      correctAnswer:'<button>'
    },
    {
      question:'Which HTML element is used for grouping and applying styles to inline elements?',
      options:[' <group>','<span>','<div>','<section>'],
      correctAnswer:'<span>'
    },
    {
      question:'What does the <mark> element in HTML represent?',
      options:['Highlighted text','A marked section',' A navigation link',' A code block '],
      correctAnswer:'Highlighted text'
    },
    {
      question:' How do you create a text area in HTML?',
      options:[' <textarea>','<input type="textarea">','<text>','<ipnutarea>'],
      correctAnswer:'<textarea>'
    },
    {
      question:'Which attribute is used to specify the maximum value of an input element in HTML?',
      options:['maximum','max',' value-max',' input-max'],
      correctAnswer:'max'
    },
    {
      question:'What is the purpose of the <datalist> element in HTML?',
      options:[' Define a list of data items for an input element',
      'Create a dropdown list',
      'Define a description for a data item',
      'Embed a data file' ],
      correctAnswer:'Define a list of data items for an input element'
    },
    {
      question:'How can you make a text italic in HTML?',
      options:['<i> ',
      '<italic>',
      '<em>',
      '<italics>' ],
      correctAnswer:'<i>'
    },
    {
      question:'What is the purpose of the <progress> element in HTML?',
      options:[ 'Create a new paragraph','Embed a video', "Set the document's language",'Define a progress bar' ],
      correctAnswer:'Define a progress bar'
    },
    {
      question:' What is the purpose of the <aside> element in HTML?',
      options:[' Define a list of data items for an input element',
      ' Create an alert',
      ' Specify alternative content for browsers that do not support the current element',
      'Define additional information for an article' ],
      correctAnswer:' Define a sidebart'
    },
    {
      question:'How do you create a radio button in HTML?',
      options:['<input type="radio"> ',
      '<radio>',
      '<check>',
      '<input radio>' ],
      correctAnswer:'<input type="radio"> '
    },
    {
      question:'Which HTML element is used to define a footer in a document?',
      options:[' <footer>',
      '<end>',
      '<bottom>',
      '<last>' ],
      correctAnswer:'<footer>'
    },
    {
      question:' How do you create a checkbox in HTML?',
      options:[' <input checkbox>',
      '<input type="checkbox">',
      '<check>',
      ' <checkbox>' ],
      correctAnswer:'<input type="checkbox">'
    },
    {
      question:'Which HTML element is used to define a section in a document?',
      options:[' <div>',
      '<section>',
      '<area>',
      '<article>' ],
      correctAnswer:'<section>'
    },
    {
    //   question:'What is the purpose of the <abbr> element in HTML?',
    //   options:['Define a hyperlink ',
    //   'Create an absolute link',
    //   'Set the document language',
    //   ' Define an abbreviation or acronym' ],
    //   correctAnswer:' Define an abbreviation or acronym'
    }
    
  ]

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(selectedQuestions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Function to shuffle array elements (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to select 20 random questions
    const selectRandomQuestions = () => {
    const shuffledQuestions = shuffleArray(questions);
    const randomQuestions = shuffledQuestions.slice(0, 20);
    setSelectedQuestions(randomQuestions);
    setSelectedAnswers(Array(randomQuestions.length).fill(null));
};
const handleTimerRestart = () => {
  setTimeElapsed(0);
};

  // useEffect to run the selectRandomQuestions function on component mount
  useEffect(() => {
    selectRandomQuestions();
    handleTimerRestart();
  }, []);

  useEffect(() => {
    // Initialize selectedAnswers after selecting random questions
    setSelectedAnswers(Array(selectedQuestions.length).fill(null));
  }, [selectedQuestions]);
  
  const handleSubmit = () => {
    console.log('Submit button clicked!');
    setIsSubmitted(true);
   
  };

  useEffect(() => {
    // This effect runs whenever isSubmitted changes
    if (isSubmitted) {
      // You can perform actions here after isSubmitted has been updated
      console.log('isSubmitted has been updated:', isSubmitted);
    }
  }, [isSubmitted]);



  const handleTimeUpdate = (updatedTime) => {
    setTimeElapsed(0);
  };

  const handleTimeLimitExceeded = () => {
    setIsSubmitted(true);
  };

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    // Update the selectedAnswers array when a user selects an answer
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <QuizLayout>
      <TimeTracking onTimeUpdate={handleTimeUpdate} onTimeLimitExceeded={handleTimeLimitExceeded} />
      <div className="max-w-lg mx-auto overflow-y-auto pt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">HTML Easy Quiz</h1>
        {selectedQuestions.map((q, index) => (
          <div key={index} className="mb-8 mt-4">
            <p className="text-lg font-semibold mb-2">{index + 1}. {q.question}</p>
            <ul className="list-disc ml-4">
              {q.options && q.options.map((option, optionIndex) => (
                <li key={optionIndex} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      className="mr-2"
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 pb-8">
        <button className='bg-green-400 px-5 border border-green-100 rounded-2xl py-3 mx-4' onClick={selectRandomQuestions}>Reload Quiz</button>
        <SubmitButton onSubmit={handleSubmit} isSubmitted={isSubmitted} />
        {isSubmitted && (
          <Score
            selectedQuestions={selectedQuestions}
            selectedAnswers={selectedAnswers}
            timeElapsed={timeElapsed}
            isSubmitted={isSubmitted}
          />
        )}
      </div>
    </QuizLayout>
  );
};

export default HtmlEasy
