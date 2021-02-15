import { React, Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/itemActions.js";


class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
    };

    this.props.addItem(newItem);

    this.setState({
      name: "",
    });

    this.toggle();
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "2em" }}>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", width: "35%" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add To The Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" style={{ marginRight: "1em" }}>
                  Item
                </Label>
                <input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "1em" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps, { addItem })(ItemModal);