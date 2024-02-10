// Countdown.jsx
import { useState, useEffect } from 'preact/hooks';
import TimeBox from './TimeBox.jsx';


const Countdown = () => {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("2024-10-19").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    return distance;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    let seconds = Math.floor((timeLeft / 1000) % 60);
    let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

  return (
    // <div class="text-center min-h-96 bg-strong_beige py-16 px-8">
    <div id="cuenta_regresiva" class="bg-cover bg-center h-176 bg-[url('/src/assets/images/kiss.jpg')]">
      <div class="text-center min-h-96 py-16 px-8 h-full bg-black bg-opacity-50">
        <h2 class="text-6xl font-titles text-light_blue mb-4">¡Ya falta poco!</h2>
        <p class="text-platinum mt-20" >Nuestra boda es en:</p>
        <div class="grid grid-cols-2 gap-4 place-content-center mt-4">
          <TimeBox time={days} label="Días" />
          <TimeBox time={hours} label="Horas" />
          <TimeBox time={minutes} label="Minutos" />
          <TimeBox time={seconds} label="Segundos" />
        </div>
        <div>
          <p class="text-xs text-platinum mt-5" >Por favor confirma tu asistencia a la brevedad posible.</p>
        </div>
        <div class="mt-16">
          <a href="#confirmacion" class="border rounded-full border-perl text-perl font-body text-2xl px-10 py-4 hover:text-light_blue  hover:border-light_blue ">Confirmar</a>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
