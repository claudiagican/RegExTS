import { useState } from 'react'
import './App.css'
import { checkTextVsRegEx } from './Utils'

export default function App() {
  const [userText, setUserText] = useState('')
  const [userRegExp, setUserRegExp] = useState('[a-z]')

  return (
    <>
      <div>

      </div>
      <h1>Regular Expressions Tool</h1>

          <label>
            Your text: <input type="text" value={userText} onChange={e => setUserText(e.target.value)} />
          </label>
          <br/>
          <label>
            Your regular expression: <input type="text" value={userRegExp} onChange={e => setUserRegExp(e.target.value)}/>
          </label>
          <br/>
          <button onClick={() => checkTextVsRegEx(userText, userRegExp)}>Check</button>

      
      <p className="read-the-docs">
        Check your text versus your regular expression 
      </p>
    </>
  )
}
