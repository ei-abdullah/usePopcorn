import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

import StarRatings from "./StarRatings";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRatings
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRatings
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
  </StrictMode>
);
