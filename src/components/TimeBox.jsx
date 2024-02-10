

const TimeBox = ({ time, label }) => {
  return (
    <div class="border border-solid border-beige p-1">
      <div class="border border-solid border-beige p-4">
        <span class="text-4xl text-perl font-titles">{time}</span>
        <span class="block text-md md:text-xl font-body text-beige">{label}</span>
      </div>
    </div>
  );
}

export default TimeBox;