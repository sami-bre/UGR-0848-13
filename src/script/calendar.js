week_events = [
  { day: "Monday", event: "No event" },
  {
    day: "Tuesday",
    event: "Reading day",
    description:
      "Today, its main purpose is to motivate and help children become aware and celebrate good reading habits. Students from similar or different classrooms and grade levels are partnered up to buddy read and share in their love of reading.",
  },
  { day: "Wednesday", event: "No event" },
  { day: "Thursday", event: "No event" },
  {
    day: "Friday",
    event: "Graduation celebration",
    description:
      "Elementary and Middle Schools arrange with their affiliate or nearby high school an event where soon-to-be graduates visit the school and take part in a parade.",
  },
  { day: "Saturday", event: "No event" },
  {
    day: "Sunday",
    event: "Career day",
    description:
      "It is never too early to dream big about our future. This event allows students of all ages to explore the many opportunities they can explore in their adult lives. Each classroom represents an occupation and students can rotate or pick which ones they would like to visit to learn more about.",
  },
];

// let's get parts of the event card first
const card_day = document.querySelector("#card-day");
const event_title = document.querySelector("#event-title");
const event_detail = document.querySelector("#event-detail");
// console.log({
//     card_day,
//     event_title,
//     event_detail,
// })

let previous_active = null;

function changeCard(index) {
  card_day.innerText = week_events[index].day;
  event_title.innerText = week_events[index].event;
  if (week_events[index].event != "No event") {
    event_detail.innerText = week_events[index].description;
  } else {
    event_detail.innerText = "";
  }
}

function main() {
  const week_days = document.getElementsByClassName("week__day");
  // console.log(week_days)
  for (let i = 0; i < week_days.length; i++) {
    week_days[i].addEventListener("click", (e) => {
      // mark the clicked day (let it stay orange)
      e.target.classList.add("active-day");
      if(previous_active) {
        previous_active.classList.remove("active-day")
      }
      changeCard(i);
      previous_active = e.target;
    });
  }
}

main();
