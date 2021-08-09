import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/';



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

    render() {
        return (
            <div className='Horned'>
                <Card style={{ width: 'auto' }}>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Title>keyword: {this.props.keyword}</Card.Title>
                    <Card.Title> horns: {this.props.horns} </Card.Title>
                    <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle} />
                    <Card.Body>
                        <Button onClick={this.increaseFavorites} variant="primary">Click Here</Button>

                        <Card.Text>
                            <p className="favorites"> :sparkling_heart:favorites:{this.state.numberOfFavorites}</p>
                        </Card.Text>
                        <p id='dis'> {this.props.description}
                        </p>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}



export default HornedBeast;