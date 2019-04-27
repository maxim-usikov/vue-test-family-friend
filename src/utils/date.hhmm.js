function hhmm(date) {
  let hh = date.getHours().toString();
  let mm = date.getMinutes().toString();

  if (hh.length === 1) {
    hh = 0 + hh;
  }

  if (mm.length === 1) {
    mm = 0 + mm;
  }

  return `${hh}:${mm}`;
}

export default hhmm;
