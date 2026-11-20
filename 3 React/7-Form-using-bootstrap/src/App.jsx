import { useState } from 'react'
import Heading from './Components/Heading'
import FormData from './Components/FormDate'
import Radio from './Components/Radio'
import CheckBox from './Components/CheckBox'
import Button from './Components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading />
    <FormData />
    <Radio />
    <CheckBox input={'I agree to the terms and conditions'}/>
    <Button btnText={'Submit'}/>
    </>
  )
}

export default App
