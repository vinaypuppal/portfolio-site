import { distanceInWords, format } from 'date-fns';

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

export function toCapitalizedWords(name) {
  const words = name.match(/[A-Za-z][^_\-A-Z]*/g);
  return words.map(capitalize).join(' ');
}

export function formatDate(date) {
  return `${format(new Date(date), 'dddd, MMM Do YYYY')} (${distanceInWords(
    new Date(date),
    Date.now()
  )} ago)`;
}
