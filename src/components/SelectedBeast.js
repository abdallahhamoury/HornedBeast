import React from 'react'
import { Modal,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class SelectedBeast extends React.Component {
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.handelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.clickedOnBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img className="img-fluid" src={this.props.clickedOnBeast.image_url} alt={this.props.clickedOnBeast.title} title={this.props.clickedOnBeast.title}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.handelClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
            </>

        )
    }
}






export default SelectedBeast;
