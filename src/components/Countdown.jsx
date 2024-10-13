// Countdown.jsx
import { useState, useEffect } from 'preact/hooks';
import TimeBox from './TimeBox.jsx';
import line from '/src/assets/images/line_perl.png';


const Countdown = () => {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("2024-10-19T12:00:00").getTime();
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
    <div id="cuenta_regresiva" class="bg-cover bg-center xl:bg-bottom-24 bg-[url('/src/assets/images/kiss.jpg')]">
      <div class="text-center min-h-96 py-32 px-8 h-full bg-black bg-opacity-50">
        <h2 class="text-6xl font-titles text-light_blue">¡Ya falta poco!</h2>
        <img alt="separador" class="mx-auto mt-1 mb-16 max-w-64" src={line.src}/>
        <p class="text-perl mt-24" >Nuestra boda es en:</p>
        <div class="grid grid-cols-2 gap-4 place-content-center mt-4 max-w-96 mx-auto">
          <TimeBox time={days} label="Días" />
          <TimeBox time={hours} label="Horas" />
          <TimeBox time={minutes} label="Minutos" />
          <TimeBox time={seconds} label="Segundos" />
        </div>
        <div>
          <p class=" text-perl mt-5 md:mt-10" >No olvides subir sus recuerdos para compartir con nosotros</p>
        </div>
        <div class="mt-10">
          <a
            href="#recuerdos"
            class="border rounded-full border-perl text-perl font-body text-2xl px-10 py-4 hover:bg-platinum/60 "
          >
            Subir fotos y videos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
