const speakersRank = (language) => {
  let str;
  switch (language) {
    case "mandarin":
      str = "MOST number of native speakers!";
      break;
    case "spanish":
      "2nd place in number of native speakers";
      str = "";
      break;
    case "english":
      str = "3rd place";
      break;
    case "hindi":
      str = "Number 4";
      break;
    case "arabic":
      str = "5th most spoken language";
      break;
    default:
      str = "Not in the top 5";
  }
  return str;
};

console.log(
  `mandarin: ${speakersRank("mandarin")},undefined: ${speakersRank()}`
);
