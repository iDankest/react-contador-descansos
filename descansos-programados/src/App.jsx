import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [des, setDes] = useState(0)
  const [studyTime, setStudyTime] = useState('')
  const [breakInterval, setBreakInterval] = useState('')
  const [timeLeft, setTimeLeft] = useState(0); // Asegúrate de que el estado inicial sea 0
  const [isModalVisible, setIsModalVisible] = useState(false) // Nuevo estado para controlar la visibilidad del modal

  function handleButtonClick(minutes) {
    console.log(minutes)
    setDes(minutes)
  }

  useEffect(() => {
    const parsedStudyTime = parseFloat(studyTime);
    if (parsedStudyTime > 0) {
      setTimeLeft(Math.floor(parsedStudyTime * 60)); // Asegúrate de convertir a un número entero
    }
  }, [studyTime]);

  useEffect(() => {
    let intervalId;
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && studyTime > 0) { // Asegúrate de que el modal solo se muestre cuando el tiempo de estudio ha sido configurado
      setIsModalVisible(true);
    }
  }, [timeLeft, studyTime]);

  const handleModalClose = () => {
    setIsModalVisible(false); // Ocultar el modal
  };

  return (
    <main className='container'>
      <h1>Descansos programados estudio o trabajo</h1>
      <div className='container-inputs'>
        <input type="number" name="t-estudio" id="t-estudio" placeholder='Tiempo de estudio(mins)' value={studyTime} onChange={(e) => setStudyTime(e.target.value)} />
        <div className='btn-style'>
          <button onClick={() => handleButtonClick(5)}>05 mins</button>
          <button onClick={() => handleButtonClick(10)}>10 mins</button>
          <button onClick={() => handleButtonClick(15)}>15 mins</button>
        </div>
        <input type="number" name="i-descansos" id="i-descansos" placeholder='intervalo de descansos(mins)' value={breakInterval} onChange={(e) => setBreakInterval(e.target.value)} />
      </div>
      <div className='info-result'>
        <h2>Tiempo de {Math.floor(timeLeft / 3600)}H {Math.floor((timeLeft % 3600) / 60)}M {timeLeft % 60}S</h2>
        <ol>
          <li>Tiempo de Estudio/Trabajo {Math.floor(studyTime / 60)} horas y {studyTime % 60} mins</li>
          <li>Descansos de {des} mins</li>
          <li>Periodos de descanso de {breakInterval} mins</li>
        </ol>
      </div>
      {isModalVisible && (
        <div className='modal-container'>
          <div className='Modal'>
            <div className='timeout'>
              <h1>Terminaste tu jornada, ¡enhorabuena! 🎉</h1>
              <button onClick={handleModalClose}>Aceptar</button>
            </div>
            <div className='descansotime'>
              <h1>Toca tus {des} Mins</h1>
              <h3>Tienes {des}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
