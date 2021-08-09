import React from 'react';



class HornedBeast extends React.Component {
    render() {
        return (
            <div className='Horned'>
                <h2>
                    {this.props.title}
                </h2>
                <img src={this.props.image_url} alt={this.props.image_alt} title= {this.props.img_title} />

                <p> {this.props.description}</p>
            </div>
        )
    }

}



export default HornedBeast;