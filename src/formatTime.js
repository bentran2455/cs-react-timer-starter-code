export const formatTime = (time) => {
  const { hrs, min, sec } = time;
  const hours = hrs.toString().padStart(2, "0");
  const minutes = min.toString().padStart(2, "0");
  const seconds = sec.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
