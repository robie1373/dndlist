import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import * as datafile from './datafiles/all_WotC_pub_UA';
//import * as impdata from './import';

import {InitializeEverything} from './MPMBs-Character-Record-Sheet/_functions/Startup';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {

      }
    }

  }

  componentDidMount() {
    //datafile.importData();
    InitializeEverything();
    /*this.setState({data: {
        sRaceList: datafile.RaceList,
        sArmourList: datafile.ArmourList,
        sAtHigherLevels: datafile.AtHigherLevels
      }
    });*/
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DnD List</h1>
        </header>
        <DnDList data={this.state.data}/>
      </div>
    );
  }
}

class DnDList extends Component {
  /*constructor(props) {
    super(props);
  }*/

  ReturnCell = props => {
    console.log(props.cellData);
    return <div className="col-sm">{props.cellData}</div>;
  }

  returnRow = (props) => {
      console.log(props);
      var rowData = [];
      var output = "";
      for (var i=0; i<props.row.length; i++) {
        const header = String(props.row[i]);
        /*console.log(props.row);
        console.log("headers: " + String(this.props.headers));
        console.log("header: " + header);
        console.log(props.row[header]);
        */
        rowData.push(props.row[header]);
      }
      //console.log("rowData: " + String(rowData));
      //const output = rowData.map((col) => <this.ReturnCell cellData={col} key={uuidv4()}/>);
      console.log(typeof(props.row));
      if (typeof(props.row) === "object") {
        var keys = Object.keys(props.row);
        console.log(props.row);
        console.log(keys);
        var k = keys[0];
        console.log(props.row[k]);
        for (var j=0; j<keys.length; j++) {
          console.log(keys[j]);
          output += "\n";
          output += props.row[keys[j]];
        }
      } else if (typeof(props.row) === "string") {
        output += props.row
      }
      console.log(output);
      return <div className="row">{output}</div>;
    }

    returnRows = (props) => {
      var output = [];
      var i = 0;
      var keys = Object.keys(props.data);
      //console.log(props);
      //console.log(keys);
      while (i<keys.length) {
        var key = keys[i]
        //console.log(key);
        //console.log(props.data[key]);
        output.push(<this.returnRow key={uuidv4()} row={props.data[key]} />);
        i++;
      }
      return <div className="container" >{output}</div>;
    }


  render() {
    return (
      <div className="DnDList">
        <h2 >list goes here</h2>
        <div> {this.returnRows(this.props)} </div>
      </div>
    )
  }
}

export default App;
