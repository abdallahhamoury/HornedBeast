import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/';
import './HornedBeast.css'



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    }
    increaseFavorites = () => {
        this.setState({
            favorites: this.state.favorites + 1
        })
    }

renderModel = ()=>{
    this.props.renerModelBeast(this.props.keyword);
};


    render() {
        return (
            <div className='Horned'>
                <Card style={{ width: '250px' }}>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Title>keyword: {this.props.keyword}</Card.Title>
                    <Card.Title> horns: {this.props.horns} </Card.Title>
                    <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle} />
                    <Card.Body>
                        <Button onClick={this.increaseFavorites} variant="primary">Click Here</Button>
                        <Button onClick={this.renderModel} variant="primary">Show Model</Button>
                        <Card.Text>
                            <p className="favorites">favorites:💜{this.state.favorites}</p>
                        </Card.Text>
                        <p id='dis'> {this.props.description}
                        </p>
                    </Card.Body>
                </Card>
            </div>
        )
    }

};



export default HornedBeast;