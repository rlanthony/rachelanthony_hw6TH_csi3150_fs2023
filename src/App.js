// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";

// import travelblog data
import data from "./TravelData";

function App() {
  // map each of the travelblogs in the array
  const travelblogs = data.map((city) => {
    return (
      <TravelBlog
        id={city.id}
        placeHeading={city.placeHeading}
        placeImg1={city.placeImg1}
        placeImg2={city.placeImg2}
        placeImg3={city.placeImg3}
        placeDescription={city.placeDescription}
      />
    );
  });

  return (
    <div className="App">
      {/* Add Hero component */}
      <Hero />

      {/* Add TravelBlog component for all cities */}
      <div className="travelblog-wrapper">{travelblogs}</div>
    </div>
  );
}

export default App;
