import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Team from './Component/Team';
import CreateTeam from './Component/CreateTeam/index';
import DropDown from './Component/DropDown';
import Players from './Component/Players';
// import PlayerInfo from './Component/PlayerInfo';
import Ninjas from './Component/Ninjas'
import NinjasDetailsPage from './Component/NinjasDetailsPage';
import Form from './Component/Form/index'
// inline component
// const Home = () =>(
//   <div>
//     <h1>Home</h1>
//   </div>
// )

// const Team = () =>(
//   <div>
//     <h1>Team</h1>
//   </div>
// )

// const Players = () =>(
//   <div>
//     <h1>Players</h1>
//   </div>
// )
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/* Link components are used for linking to other views  */}
            <li><Link to="/">Create Team</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/dropDown">Drop Down</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/ninjas">Ninjas</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={CreateTeam}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/team" component={Team}></Route>
          <Route path="/dropDown" component={DropDown}></Route>
          <Route path="/players" component={Players}></Route>
          <Route path="/ninjas" component={Ninjas}></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/:post_id" component={NinjasDetailsPage}></Route>
          {/* <Route path="/:post_id" component={PlayerInfo}></Route> */}
        </Switch>
      </div>
    )
  }
}

export default App;
