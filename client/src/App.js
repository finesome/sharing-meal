import "./App.css";
import Homepage from "./Components/HomePage/HomePage";
import CreateParty from "./Components/CreateParty/CreateParty";
import JoinParty from "./Components/JoinParty/JoinParty";
import JoinAs from "./Components/JoinAs/JoinAs";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/create" exact component={CreateParty} />
                    <Route path="/join" exact component={JoinParty} />
                    <Route path="/room" exact component={JoinAs} />
                </Switch>
            </Router>

            {/* <Homepage/> */}
            {/* <CreateParty/> */}
            {/* <JoinParty/> */}
            {/* <JoinAs /> */}
        </div>
    );
}

export default App;
