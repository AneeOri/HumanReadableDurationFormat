import "./styles.css";

export default function App() {
  function formatDuration(seconds) {
    if (seconds === 0) {
      return "now";
    }

    var years = Math.floor(seconds / (60 * 60 * 24 * 365));
    var days = Math.floor(seconds / (60 * 60 * 24)) % 365;
    var hours = Math.floor(seconds / (60 * 60)) % 24;
    var minutes = Math.floor(seconds / 60) % 60;
    var second = seconds % 60;

    var duration = [years, days, hours, minutes, second];
    var units = ["year", "day", "hour", "minute", "second"];

    var linked = duration
      .map(function (el, ind) {
        if (el > 1) {
          return el + " " + units[ind] + "s";
        }
        if (el === 1) {
          return el + " " + units[ind];
        }
      })
      .filter((el) => el !== undefined);

    if (linked.length > 1) {
      // or just return linked.join(', ').replace(/,([^,]*)$/, " and$1")
      var last = linked.pop();
      return linked.join(", ") + " and " + last;
    } else {
      return linked[0];
    }
  }

  function formatDuration22(seconds) {
    var time = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      },
      res = [];

    if (seconds === 0) return "now";

    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds / time[key]);
        res.push((val += val > 1 ? " " + key + "s" : " " + key));
        seconds = seconds % time[key];
      }
    }

    return res.length > 1
      ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
      : res[0];
  }

  function formatDuration33(seconds) {
    if (!seconds) return "now";
    var strout = "";
    var s = seconds % 60;
    seconds = (seconds - s) / 60;
    var m = seconds % 60;
    seconds = (seconds - m) / 60;
    var h = seconds % 24;
    seconds = (seconds - h) / 24;
    var d = seconds % 365;
    seconds = (seconds - d) / 365;
    var y = seconds;

    var english = [];
    if (y) english.push(y + " year" + (y > 1 ? "s" : ""));
    if (d) english.push(d + " day" + (d > 1 ? "s" : ""));
    if (h) english.push(h + " hour" + (h > 1 ? "s" : ""));
    if (m) english.push(m + " minute" + (m > 1 ? "s" : ""));
    if (s) english.push(s + " second" + (s > 1 ? "s" : ""));

    return english.join(", ").replace(/,([^,]*)$/, " and$1");
  }

  const formatDuration44 = (s) =>
    s == 0
      ? "now"
      : [
          Math.floor(s / 60 / 60 / 24 / 365),
          Math.floor(s / 60 / 60 / 24) % 365,
          Math.floor(s / 60 / 60) % 24,
          Math.floor(s / 60) % 60,
          s % 60
        ]
          .map(
            (e, i) =>
              e +
              " " +
              ["year", "day", "hour", "minute", "second"][i] +
              (+e > 1 ? "s" : "")
          )
          .filter((e) => !/^0/.test(e))
          .join(", ")
          .replace(/,\s(?=[\d\s\w]*$)/, " and ");

  const TIME = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1
  };
  /*
const formatDuration55 = sec =>
  Object.entries(TIME).map( ([unit, value]) => (sec -= (units = ~~(sec / value)) * value,  
                                                units && `${units} ${unit}${units > 1 ? 's' : ''}`) )
                      .filter(entry => entry)  
                      .join`, `.replace(/,(?!.*,)/, ' and')
                      || 'now';*/

  function formatDuration(secs) {
    if (secs == 0) return "now";

    function mult(num, str) {
      if (num == 0) return "";
      return num > 1 ? `${num} ${str}s` : `${num} ${str}`;
    }

    let s = mult(secs % 60, "second");
    let m = mult(Math.floor((secs / 60) % 60), "minute");
    let h = mult(Math.floor((secs / 3600) % 24), "hour");
    let d = mult(Math.floor((secs / 3600 / 24) % 365), "day");
    let y = mult(Math.floor(secs / 60 / 60 / 24 / 365), "year");

    return [y, d, h, m, s]
      .filter((a) => a)
      .join(", ")
      .replace(/,([^,]*$)/, " and$1");
  }

  console.log(formatDuration(62)); // '1 minute and 2 seconds'
  // console.log(  formatDuration(60)  ); // '1 minute'
  // console.log(  formatDuration(59)  ); // '59 seconds'
  // console.log(  formatDuration(3662)  ); // '1 hour, 1 minute and 2 seconds'
  // console.log(  formatDuration(3600*24*366)  ); // '1 year and 1 day'

  return (
    <div className="App">
      <input />
    </div>
  );
}
