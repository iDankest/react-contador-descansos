import { useState } from 'react'
import './App.css'

function App() {
  const [des, setDes] = useState(0)
  const [studyTime, setStudyTime] = useState('')
  const [breakInterval, setBreakInterval] = useState('')
  function handleButtonClick(minutes){
    console.log(minutes)
    setDes(minutes)

  }

  return (
    <main className='container'>
      <h1>Descansos programados estudio o trabajo</h1>
      <div className='container-inputs'>

        <input type="number" name="t-estudio" id="t-estudio" placeholder='Tiempo de estudio(mins)' value={studyTime} onChange={(e) => setStudyTime(e.target.value)}/>  

        <div className='btn-style'>
        <button onClick={() => handleButtonClick(5)}>05 mins</button>
        <button onClick={() =>handleButtonClick(10)}>10 mins</button>
        <button onClick={() =>handleButtonClick(15)}>15 mins</button>
        </div>
        <input type="number" name="i-descansos" id="i-descansos" placeholder='intervalo de descansos(mins)'/>

      </div>
      <p>Esta programado {des} mins de descanso {studyTime/60}H</p>
    </main>
  )
}
export default App
