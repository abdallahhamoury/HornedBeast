import React from 'react';
import HornedBeast from './HornedBeast';
import BeastsJson from './BeastsJson.json';


class Main extends React.Component {
    render() {
        return (
            <>
        {
           BeastsJson.map((y,i)=>{
            return(
              <HornedBeast key={i} title = {y.title} imageUrl = {y.image_url} description = {y.description} keyword = {y.keyword} horns = {y.horns}/>
            );
          })
        }
            </>
            
        )
    }
}

export default Main;