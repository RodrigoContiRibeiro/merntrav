import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      {
        id: uuidv4(),
        name: "Eggs",
      },
      {
        id: uuidv4(),
        name: "Milk",
      },
      {
        id: uuidv4(),
        name: "Meat",
      },
      {
        id: uuidv4(),
        name: "Lettuce",
      },
    ],
  };
  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <Container>
        <div className="container addBox">
          <Button
            color="dark"
            className="add-btn"
            onClick={() => {
              const name = prompt("Enter Item Name");
              if (name) {
                this.setState((prevState) =>  ({ //O state é o state
                  items: [...prevState.items, { id: uuidv4(), name: name }],
                  //Criou um novo array igual, mas ele possui todos os elementos anteriores
                  // mais um novo elemento
                }));
              }
            }}
          >
            Add Item
          </Button>
        </div>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  >
                    X
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
