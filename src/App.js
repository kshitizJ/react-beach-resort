import React from "react"
import './App.css';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
    return (
        <>
            <Navbar />
            {/* switch is use to tell that Error route runs only when route does not match. If do not use switch then  with all pages Error route will also execute, so we only want out Error route to run when any path does not match the given path below */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Rooms} />
                <Route exact path="/rooms/:slug/" component={SingleRoom} />
                {/* slug is a variable to pass the id of the particular room */}
                <Route component={Error} />
                {/* if the route does no match then Error route will execute */}
            </Switch>
        </>
    );
}

export default App;
