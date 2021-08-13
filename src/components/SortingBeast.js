import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form} from 'react-bootstrap/';




export class SortingBeast extends React.Component {
    changePic = (event) => {
        this.props.selectHorns(event);
    };
    render() {
        return (
            <div id="form">
                <Form.Select onClick = {this.changePic} aria-label="Default select example">
                    <option>All Horned beast</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">lol</option>
                </Form.Select>

            </div>
        )
    }
}
export default SortingBeast;