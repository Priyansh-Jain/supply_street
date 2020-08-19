import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";  
import App from './App';
import Inspection from './inspection/Inspection';
import FreeInspection from './freeinspection/FreeInspection';
import FileClaim from './fileclaim/FileClaim';
import Repair from './repair/Repair';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

      render(){
        return (
            <Router>
                <div className="home-section">
                    <Switch>
                        <Route path="/free-inspection">
                            <FreeInspection />
                        </Route>
                        <Route path="/file-claim">
                            <FileClaim />
                        </Route>
                        <Route path="/repair">
                            <Repair />
                        </Route>
                        <Route path="/">
                            <App />
                            <Inspection />
                            {/* <p className="App-intro">{this.state.apiResponse}</p> */}
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
      }
}


export default Home;
