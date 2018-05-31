import translateFirstName from './first-name-translator';
import translateMiddleName from './middle-name-translator';
import translateLastName from './last-name-translator';
import translateBirthMonth from './birth-month-translator';
import translateBirthDate from './birth-date-translator';

export default function(props) {
  const name = [
    translateFirstName(props.firstName),
    translateMiddleName(props.middleName),
    translateLastName(props.lastName),
  ].filter(x => x !== undefined)
  .join(' ');

  const title = [
    translateBirthMonth(props.birthMonth),
    translateBirthDate(props.birthDate),
  ].join(' ');

  return `${name}, ${title}`;
}
