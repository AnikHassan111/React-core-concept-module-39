import './App.css'
import Count from './Count'
import SetDataFormJson from './Anik'
import FriendsFunc from './Friends'

function App() {
  function handleClick(){
    alert("Clicked The button")
  }
  function addSum(num){
    alert(num + 10)
  }



  return (
    <>
      
      <h3>React Core Concept</h3>
      <FriendsFunc></FriendsFunc>
      <SetDataFormJson></SetDataFormJson>
      <Count></Count>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert("Second Btn Clicked")}}>Second Btn</button>
      <button onClick={()=>{addSum(2)}}>Thired Btn</button>
      
    </>
  )
}

export default App
