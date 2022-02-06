const { words } = require("./words");
const Moment = require("moment");

function timeOffset(targetDate) {
  var offsetStart = new Date(2021, 5, 19, 0, 0, 0, 0);
  const startDate = new Date(offsetStart);
  const time =
    new Date(targetDate).setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0);
  return Math.round(time / 864e5);
}

function word(targetDate) {
  const offset = timeOffset(targetDate);
  const modPosition = offset % words.length;
  return words[modPosition];
}

function printAnswers(start, end) {
  start = new Moment(start);
  end = new Moment(end);

  while (start.isSame(end) || start.isBefore(end)) {
    const answer = word(start);
    console.log(start.format("YYYY-MM-DD"), answer);
    start.add(1, "days");
  }
}

printAnswers(new Moment(), new Moment().add(14, "days"));
