import { useEffect, useRef, useState } from 'react'
import './App.css'
import { TextField } from '@mui/material'

function App() {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const [_isAutofilled, setIsAutofilled] = useState(false)

  // useEffect(() => {
  //   const { current: inputElement } = inputRef
  //   if (!inputElement) return
  //   const handleAnimationStart = (event) => {
  //     switch (event.animationName) {
  //       case defaultStyles.onAutoFillStart: {
  //         setIsAutofilled(true)
  //       }
  //       case defaultStyles.onAutoFillCancel: {
  //         setIsAutofilled(false)
  //       }
  //     }
  //   }
  //   inputElement.addEventListener('animationstart', handleAnimationStart)
  //   return () => {
  //     inputElement.removeEventListener('animationstart', handleAnimationStart)
  //   }
  // }, [])

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
      onSubmit={(event) => {
        // event.preventDefault()
      }}
    >
      <TextField
        inputRef={inputRef}
        id="test-value"
        type="email"
        name="email"
        label="Test"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoComplete="on"
        required
      />
      <button style={{ padding: '8px 16px' }}>Submit</button>
    </form>
  )
}

export default App
