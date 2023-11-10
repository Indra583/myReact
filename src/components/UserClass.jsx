import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo : {
       name : "Indra",
       location : "India",
       login : "indra123"
      }
    };
  }

 async componentDidMount(){
    const data = await fetch('https://api.github.com/users/Indra583');
    const json = await data.json();
    console.log(json, "apijson");
    this.setState({
        userInfo : json,
    });
  }

  render() {
    const { name, location, login } = this.state.userInfo;
    const { count, count2 } = this.state;

    return (
      <div>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >Add count</button>
        <h3>Name :{name}</h3>
        <h3>Login :{login}</h3>
        <h4>Location :{location}</h4>
      </div>
    );
  }
}

export default UserClass;
