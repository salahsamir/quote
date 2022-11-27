
import { useEffect } from 'react';
import { useState } from 'react';
import axios from'axios'
import './App.css';
const Api_url='http://api.quotable.io/random';
function App() {
  let [quote,setquote]=useState("")
  let [author,setauthor]=useState('')
  let click=async()=>{
    let {data}= await axios.get(Api_url)
    setquote(data.content)
    setauthor(data.author)

    // console.log(data);



  }
  let sound=()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
    speechSynthesis.speak(utterance);
}
  useEffect(()=>{
click()

  },[])
  return (
  <>
  <div className='box'>
    <h2>Quote of the Day</h2>
    <p>
    <i class="fa-solid fa-quote-left"></i>
      <span className='mx-3'>{quote}</span>
      <i class="fa-solid fa-quote-right"></i>
      
      </p>
    <div className="author float-end"> ― 
              <span> {author}</span>  
            </div>
            <div className="clear"></div>
<div className="features my-2">
<ul className='list-unstyled d-flex p-2  align-items-center'>
  <li className="sound" onClick={sound}><i className="fa-solid fa-volume-high" /></li>
</ul>

    <button onClick={click}>New quote </button>
</div>

  </div>




  </>

  );
}

export default App;
