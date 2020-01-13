export function getDifference(betweenThis, andThis = new Date()) {
  let ms = new Date(betweenThis).valueOf() - new Date(andThis).valueOf();

  ms += 999;

  const totalMinutes = Math.floor((ms + 59000) / 1000 / 60);
  const isNegative = ms < 0;

  if (isNegative) ms -= 1000;

  ms = Math.abs(ms);
  const days = Math.floor(ms / 1000 / 60 / 60 / 24);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  let str = '';

  if (days > 0) str = `${days}d ${hours}h`;

  else if (hours > 0) str = `${hours}h ${minutes}m`;

  else if (minutes > 0) str = `${minutes}m ${seconds}s`;

  else str = `${seconds}s`;

  if (isNegative) {
    str = `-${str}`;
  }

  return str;
};