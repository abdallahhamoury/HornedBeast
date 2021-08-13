import React from 'react';
import HornedBeast from './HornedBeast';
import SortingBeast from './SortingBeast';


class Main extends React.Component {

  constructor (props){
    super(props);
      this.state={
        data : this.props.BeastsJsonM ,
      };
    }
    selectHorns = async (e) => {
      e.preventDefault();

      let filterdData = [];

      let num =Number(e.target.value);

      if (!(isNaN(num))) {

        console.log(num);

        filterdData = this.props.BeastsJsonM.filter((obj) => {

          if (obj.horns === num) {
            
            return 1;
          }
        });
      } else {
        console.log(num);
        filterdData = this.props.BeastsJsonM ;
      }
      await this.setState({
        data: filterdData,
      });
    };


    render() {
        return (

            <>
            <SortingBeast selectHorns = {this.selectHorns}/>
        {
           this.state.data.map((y,i)=>{
            return(

              <HornedBeast renerModelBeast={this.props.renerModelBeast} key={i} title = {y.title} imageUrl = {y.image_url} description = {y.description} keyword = {y.keyword} horns = {y.horns}/>

            );
          })
        }
            </>
            
        )
    }
}

export default Main;