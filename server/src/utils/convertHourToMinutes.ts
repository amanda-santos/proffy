export default function convertHourToMinutes(time: string) {
  // recebe 8:00
  // vira [8, 00]
  const [hour, minutes] = time.split(":").map(Number);
  // faz 8 * 60 + 00 = 480
  const timeInMinutes = hour * 60 + minutes;
  // retorna 480
  return timeInMinutes;
}
