import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ping: "Waiting"
    }
  }

  componentDidMount() {
    axios.get('/api/ping')
      .then((res, err) => {
        if (res.status === 200) {
          this.setState({
            ping: res.data.message
          })
        }
        else {
          console.log(err);
        }
      })
  }

  render() {
    return (
      
        <div className="bgimg">
          <div className="topleft">
            <p>GoTestty</p>
          </div>
          <div className="middle">
            <h1>COMING SOON</h1>
            <hr />
            <p>21 Feb 2021</p>
          </div>
        </div>
    );
  }
}

export default App;