const intervals = [
  { label: 'ano', seconds: 31536000 },
  { label: 'mês', seconds: 2592000 },
  { label: 'dia', seconds: 86400 },
  { label: 'hora', seconds: 3600 },
  { label: 'minuto', seconds: 60 },
  { label: 'segundo', seconds: 1 },
];

const stringToValidDate = (dateString) => {
  const [date, hour] = dateString.split(' ');

  const splitDate = date.split('/');
  const newDate = [splitDate[1], splitDate[0], splitDate[2]].join('/');
  const newHour = hour.replace('h', ':');

  return `${newDate} ${newHour}`;
};

const dateToTimestamp = (date) => {
  const newDate = new Date(stringToValidDate(date));

  const seconds = Math.floor((Date.now() - newDate.getTime()) / 1000);
  const interval = intervals.find((i) => i.seconds < seconds);

  if (!interval) {
    return 'just now';
  }

  const count = Math.floor(seconds / interval.seconds);

  return `Há ${count} ${interval.label}${count !== 1 ? 's' : ''}`;
};

module.exports = dateToTimestamp;
