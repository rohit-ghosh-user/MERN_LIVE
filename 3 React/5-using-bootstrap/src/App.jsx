import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>Place Holder</div>
    <button class=" kg-button btn-solid btn-styled theme-primary">Primary</button>
<button class=" kg-button btn-solid btn-styled theme-accent">Accent</button>
<button class="kg-button btn-solid btn-styled theme-success">Success</button>
<button class="kg-button btn-solid btn-styled theme-danger">Danger</button>
<button class="kg-button btn-solid btn-styled theme-warning">Warning</button>
<button class="kg-button btn-solid btn-styled theme-info">Info</button>
<button class="kg-button btn-solid btn-styled theme-inverse">Inverse</button>
<button class="kg-button btn-solid btn-styled theme-secondary">Secondary</button>
    </>
  )
}

export default App
