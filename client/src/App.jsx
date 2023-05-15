import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Ratings from "./components/Ratings/Ratings";
import Camping_spots from "./components/Camping_spots/Camping_spots";

function App() {
    return (
        <>
            <div>
                <Header />
            </div>
            <h1>Campsite name, rating, location (Genglin)</h1>
            <h1>Photo Gallery (Dennis)</h1>
            <h1>Campsite info, acres, etc. (Chris)</h1>
            <h1>Available Sites (Genglin)</h1>
            <h1>Tent Sites (plus map)(Chris)</h1>
            <h1>Location (Dan)</h1>
            <h1>Hosted by (Dennis)</h1>
            <div>
                <Ratings />
            </div>
            <h1>Things to do (Dan)</h1>
            <div>
                <Camping_spots />
            </div>
            <h1>Campers also viewed (Chris)</h1>
            <h1>Camp Safety (Dennis)</h1>
            <h1>Safety & Partners (Dan)</h1>
            <h1>Footer (Chris)</h1>
        </>
    );
}

export default App;
