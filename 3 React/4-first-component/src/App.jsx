import { useState } from 'react';
import './App.css';
import Heading from './Components/Heading';
import Paragraph from './Components/Paragraph';
// import {DangerButton,SuccessButton} from './Components/Buttons';
import DynamicComponent from './Components/DynamicComponent';
import StudentList from './Components/StudentList';
import RandomNumber from './Components/RandomNumber';
import Title from './Components/Title';
import Button from './Components/Buttons';

function App() {
  const [count, setCount] = useState(0)
  const students = ['Bumba','Suman','Sanjoy','Nil','Chirantan']
  const newStudents = ['Ram','Shyam','Jadu','Madhu','Seeta','Geeta']
 
  const clickMeHandler = () =>{
      console.log('ClickMe Clicked')
    }
    const LogOutHandler = () =>{
      console.log('LogOut Clicked')
    }
    const DeleteHandler = () =>{
      console.log('Delete Clicked')
    }

  return (
    <>
      <Title titleText = "Hellow World"/>
      <Title titleText = "Learning Mern Stack"/>
      <Title titleText = "Learnig props"/>
      <Title titleText = "From Kg Coding"/>

      <Heading/>

      <RandomNumber />  
      <RandomNumber />  
      <RandomNumber />  
      <RandomNumber />  

      <StudentList students ={students}/>
      <Paragraph/>

      <Button btnType ="success" btnText ="ClickMe" handler={clickMeHandler}/>
      <Button btnText ="LogOut" handler={LogOutHandler}/>
      <Button btnType ="danger" btnText ="Delete" handler={DeleteHandler}/>

      <DynamicComponent />
      <StudentList students={newStudents}/>
       
    </>
  )
}

export default App
