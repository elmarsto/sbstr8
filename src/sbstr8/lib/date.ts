const BEGINNING_OF_TIME = 'Jan 1 1970';
const TODAY = new Date();
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const mkShortDate = (created?: string, updated?: string) => {
  const theCreated = new Date(created || BEGINNING_OF_TIME);
  const theUpdated = new Date(updated || BEGINNING_OF_TIME);
  const theMostRecent =
    theCreated.getTime() < theUpdated.getTime() ? theUpdated : theCreated;
  const theDay = theMostRecent.getDate();
  const theMonth = MONTHS[theMostRecent.getMonth()];
  const theYear = theMostRecent.getFullYear();
  const currentYear = TODAY.getFullYear();
  // TODO: show 'today' for all dates equal to or greater than today (incl. future posts!)
  // TODO: show 'yesterday' for all dates equal to today minus one day
  if (theYear === currentYear) {
    return `${theMonth} ${theDay}`;
  } else {
    return `${theYear} ${theMonth} ${theDay}`;
  }
};
