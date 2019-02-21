export default function formatDate([date, showTime]: [Date, boolean]) {
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let readableDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  if (!showTime) {
    return readableDate;
  }
  return `${readableDate}, ${ date.getHours() % 12 }:${ date.getMinutes() }`;
}
