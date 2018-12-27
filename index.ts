import data from "./data.json";

interface Event {
  title: string;
  date: string;
  link: string;
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    console.time("JSONLoad");
    generateCards(data);
    console.log("%c Time to load", "color: gray; font-weight: bold;");
    console.timeEnd("JSONLoad");
    console.log("%c JSON Data", "color: orange; font-weight: bold;");
    console.table(data);
  },
  false
);

function generateCards(data: Event[]) {
  for (let i = 0; i < data.length; i++) {
    // Div to be created
    const newDiv: HTMLElement = document.createElement("div");
    // Reference for div to be inserted into
    const ref: HTMLElement = document.getElementById("cards")!;
    newDiv.className = "card";
    newDiv.innerHTML = `<p>${data[i].title}</p><p id="${i}"></p><a href="${
      data[i].link
    }" target="_blank">Read more</a>`;
    const interval = setInterval(function() {
      timer(i, data[i].date);
    }, 1000);
    ref.appendChild(newDiv);
  }
}

function timer(divId: any, date: string) {
  const difference = new Date(
    new Date(date).getTime() - new Date().getTime()
  ).getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const timeString =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (0 > difference) {
    const timeString = "Ended";
  }
  // Attach to divId
  const ref: HTMLElement = document.getElementById(`${divId}`)!;
  ref.innerHTML = timeString;
}
