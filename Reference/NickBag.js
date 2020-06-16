import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
const App = () => {
  const [bag, setBag] = useState(['💎', '👻', '💯', '💤'])
  const [text, setText] = useState('')
  console.log('This is the bag: ', bag)
  // return <div>
  //   <h1>Emoji Bag App 👜</h1>
  //   {bag.map((item, i) => <span key={i}>{item}</span>)}
  //   <div>
      {/* ! We're capturing onChange, and also value, this
       is called a CONTROLLED input, which is good practice.
      CONTROLLED means React controls it.
      */}
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button
        onClick={() => {
          // ! Make sure you create a new array using e.g. concat.
          // ! bag.push will not work as expected, because push
          // ! is MUTABLE, and React relies on IMMUTABILITY.
          setBag(bag.concat(text))
          setText('')
        }}
      >
        Add emoji
      </button>
    </div>
  </div>
}
ReactDOM.render(<App/>, document.getElementById('root'))