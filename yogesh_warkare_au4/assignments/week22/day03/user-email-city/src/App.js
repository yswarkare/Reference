import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Output from "./components/Output"

class App extends React.Component{
  constructor(props){
    super(props)  
    this.state = {
      userDetails: {
        userName: "User Name",
        emailID: "Email ID",
        city: "City"
      },
      users: [{
          userName: "Sam Harris",
          emailID: "samharris@gmail.com",
          city: "New York"
        },
        {
          userName: "Joe Rogan",
          emailID: "joerogan@gmail.com",
          city: "Los Angles"
        },
      ],
      cities: ["New York", "Los Angles"]
    }
  }
  

  addUserDetails = (userDetails) => {
    let usersCopy = this.state.users;
    if(usersCopy.indexOf(userDetails) === -1){
      usersCopy.push(userDetails);
    }
    console.log("User Details in App => "+JSON.stringify(userDetails))
    let citiesCopy = this.state.cities;
    if(citiesCopy.indexOf(userDetails.city) === -1){
      citiesCopy.push(userDetails.city);
    }
    this.setState({
      users: usersCopy,
      cities: citiesCopy
    })
  }

  render (){
      console.log("State in App => " + JSON.stringify(this.state));
    return (
      <div className>
        <Wrapper userDetails={this.state.userDetails} getUserDetailsFromWrapper={(userDetails)=>{this.addUserDetails(userDetails)}}/>
        <Output cities={this.state.cities} users={this.state.users}/>
      </div>
    );
  }
}

export default App;

//JSON.stringify(this.state)

//JSON.parse(JSON.stringify(this.state))