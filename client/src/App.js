import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Homepage from "./pages/Homepage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default App;
