

const TimeBox = ({ time, label }) => {
  return (
    <div class="border border-solid border-platinum p-1">
      <div class="border border-solid border-platinum p-4 min-w-32">
        <span class="text-4xl text-perl font-titles">{time}</span>
        <span class="block text-xl font-body text-platinum">{label}</span>
      </div>
    </div>
  );
}

export default TimeBox;