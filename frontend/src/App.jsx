
import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios.get("http://127.0.0.1:8000").then((res) => {
      data = res.data;
      this.setState({
        details: data,
      });
    });

    // .catch(err => {  })


  }

  render() {
    return (
     <div>
       <header> Data from django backend </header>
       <hr />
       {this.state.details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>
          </div>
        </div>
       ))}
     </div>
    )
  }
}

export default App;
