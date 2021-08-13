import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import BeastsJson from './components/BeastsJson.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component{

  constructor (props){
    super(props);
    this.state={

      clickedOnBeast:{},
      show : false,

    };
  }

  renerModelBeast=(keyword)=>{
    let clickedbeast = BeastsJson.find((beast)=>{
      if (beast.keyword === keyword){
        return beast;
      };
    });
    this.setState({
      clickedOnBeast : clickedbeast,
      show : true,
    });
  };

  handelClose=()=>{
    this.setState({
      show:false,
    });
  };



  render() {
    return (
      <div>
        <Header />
        <Main BeastsJsonM = {BeastsJson} renerModelBeast={this.renerModelBeast}  />
        <SelectedBeast clickedOnBeast ={this.state.clickedOnBeast} show={this.state.show} handelClose={this.handelClose} />
        <Footer />
      </div>
    )
  }
};


export default App;
