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
    newDiv.innerHTML = `<p>${data[i].title}</p><p>${data[i].date}</p><a href="${
      data[i].link
    }" target="_blank">Read more</a>`;
    ref.appendChild(newDiv);
  }
}
