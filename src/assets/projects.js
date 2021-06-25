import dictImage from "../images/Vocabulary.png";

const projects = [
  {
    name: "Vocabulary Application",
    description:
      "Vocabulary Application is used for adding a word and its meaning. On adding a word, application fetches the information about the word from Oxford Dictionaries API and stores it in our application.",
    technology: "React JS, Node JS, Express, Mongo DB and Redux",
    image: { dictImage },
  },
  {
    name: "Disney+",
    description:
      "Disney+ is a React JS application which has the Google Sign-in functionality and also the home page which displays various categories of films with styled components of React JS.",
    technology: "React JS, Redux and Bootstrap  ",
    image:
      "https://drive.google.com/file/d/1PFiTBXnCGzZSlOOmufnnqae6GWaZ6boW/view?usp=sharing",
  },
  {
    name: "URL Shortener",
    description:
      "URL Shortener is a MERN Stack Application which has Login authentication fuctionality with JWT tokens and it shortens the given full URL and generates the short URL and stores it in the Mongo DB. It also captures the number of clicks on the short URL generated",
    technology: "React JS, Node JS, Express and Mongo DB",
    image: { dictImage },
  },
  {
    name: "New York Times News",
    description:
      "New York Times News application is a javascript application which retrives the daily news from new york times API and displays it in the UI",
    technology: "JavaScript, HTML/CSS and Bootstrap",
    image: { dictImage },
  },
  {
    name: "SpaceX Launches",
    description:
      "SpaceX Lauches is a Vanilla Javascript application that provides the information about the Lauched space vehicles from spacexdata API and displays it in the UI. Pagination functionality is included in the application",
    technology: "JavaScript, HTML/CSS and Bootstrap",
    image: { dictImage },
  },
];

export default projects;
