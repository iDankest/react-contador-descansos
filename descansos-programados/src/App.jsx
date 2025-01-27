import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [des, setDes] = useState(1);
  const [studyTime, setStudyTime] = useState("");
  const [breakInterval, setBreakInterval] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [breakTimeLeft, setBreakTimeLeft] = useState(0);
  
  const studyTimerRef = useRef(null);
  const breakTimerRef = useRef(null);
  const lastStudyTimeRef = useRef(null);

  // Inicializar temporizador de estudio
  useEffect(() => {
    const parsedStudyTime = parseFloat(studyTime);
    if (parsedStudyTime > 0) {
      setTimeLeft(parsedStudyTime * 60);
      lastStudyTimeRef.current = parsedStudyTime * 60;
    }
  }, [studyTime]);

  // Gestionar temporizador principal
  useEffect(() => {
    if (timeLeft > 0 && !isBreakTime) {
      studyTimerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          lastStudyTimeRef.current = newTime;
          return newTime;
        });
      }, 1000);

      return () => {
        if (studyTimerRef.current) {
          clearInterval(studyTimerRef.current);
        }
      };
    }
  }, [timeLeft, isBreakTime]);

  // Verificar si es momento de un descanso
  useEffect(() => {
    if (!isBreakTime && breakInterval && timeLeft > 0) {
      const totalSeconds = parseFloat(studyTime) * 60;
      const elapsedSeconds = totalSeconds - timeLeft;
      const elapsedMinutes = elapsedSeconds / 60;
      
      if (elapsedMinutes > 0 && 
          elapsedSeconds > 0 && 
          elapsedMinutes % parseFloat(breakInterval) === 0) {
        handleStartBreak();
      }
    }
  }, [timeLeft, breakInterval, studyTime]);

  // Gestionar temporizador de descanso
  useEffect(() => {
    if (isBreakTime && breakTimeLeft > 0) {
      breakTimerRef.current = setInterval(() => {
        setBreakTimeLeft(prev => {
          if (prev <= 1) {
            handleEndBreak();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (breakTimerRef.current) {
          clearInterval(breakTimerRef.current);
        }
      };
    }
  }, [isBreakTime, breakTimeLeft]);

  const handleStartBreak = () => {
    // Limpiar temporizador de estudio
    if (studyTimerRef.current) {
      clearInterval(studyTimerRef.current);
    }
    
    setIsBreakTime(true);
    setIsModalVisible(true);
    setBreakTimeLeft(des * 60);
  };

  const handleEndBreak = () => {
    // Limpiar temporizador de descanso
    if (breakTimerRef.current) {
      clearInterval(breakTimerRef.current);
    }
    
    setIsBreakTime(false);
    setIsModalVisible(false);
    setBreakTimeLeft(0);
    
    // Restaurar el tiempo de estudio donde se quedó
    setTimeLeft(lastStudyTimeRef.current);
  };

  const handleModalClose = () => {
    handleEndBreak();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <main className="container">
      <h1>Descansos programados estudio o trabajo</h1>
      <div className="container-inputs">
        <input
          type="number"
          name="t-estudio"
          id="t-estudio"
          placeholder="Tiempo de estudio (mins)"
          value={studyTime}
          onChange={(e) => setStudyTime(e.target.value)}
        />
        <div className="btn-style">
          <button onClick={() => setDes(5)}>05 mins</button>
          <button onClick={() => setDes(10)}>10 mins</button>
          <button onClick={() => setDes(15)}>15 mins</button>
        </div>
        <input
          type="number"
          name="i-descansos"
          id="i-descansos"
          placeholder="Intervalo de descansos (mins)"
          value={breakInterval}
          onChange={(e) => setBreakInterval(e.target.value)}
        />
      </div>
      <div className="info-result">
        <h2>Tiempo restante: {formatTime(timeLeft)}</h2>
        <ol>
          <li>
            Tiempo de Estudio/Trabajo: {Math.floor(studyTime / 60) || 0} horas y{" "}
            {studyTime % 60 || 0} mins
          </li>
          <li>Duración del Descanso: {des} mins</li>
          <li>Intervalo de Descansos: {breakInterval} mins</li>
        </ol>
      </div>
      {isModalVisible && (
        <div className="modal-container">
          <div className="Modal">
            {isBreakTime ? (
              <div className="descansotime">
                <h1>¡Es hora de un descanso!</h1>
                <h3>Tiempo restante de descanso: {formatTime(breakTimeLeft)}</h3>
              </div>
            ) : (
              <div className="timeout">
                <h1>Terminaste tu jornada, ¡enhorabuena! 🎉</h1>
                <button onClick={handleModalClose}>Aceptar</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;