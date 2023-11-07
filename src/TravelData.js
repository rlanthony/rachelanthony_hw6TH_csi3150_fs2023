// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.

// Images for Tokyo
import Place1Image1 from "./assets/TokyoImage1.jpg";
import Place1Image2 from "./assets/TokyoImage2.jpg";
import Place1Image3 from "./assets/TokyoImage3.jpg";

// Images for London
import Place2Image1 from "./assets/LondonImage1.jpg";
import Place2Image2 from "./assets/LondonImage2.jpg";
import Place2Image3 from "./assets/LondonImage3.jpg";

// Images for San Francisco
import Place3Image1 from "./assets/SFImage1.jpg";
import Place3Image2 from "./assets/SFImage2.jpg";
import Place3Image3 from "./assets/SFImage3.jpg";

const TravelData = [
  {
    id: 1,
    placeHeading: "Tokyo",
    placeImg1: Place1Image1,
    placeImg2: Place1Image2,
    placeImg3: Place1Image3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    placeHeading: "London",
    placeImg1: Place2Image1,
    placeImg2: Place2Image2,
    placeImg3: Place2Image3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    placeHeading: "San Francisco",
    placeImg1: Place3Image1,
    placeImg2: Place3Image2,
    placeImg3: Place3Image3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default TravelData;
