import React from "react";
import { ListGroup } from "reactstrap";
import ListItem from "./listItem";
import PropTypes from "prop-types";
function ListView({ todos, toggleComplete, toggleSelect }) {
  return (
    <>
      <ListGroup>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </ListGroup>
    </>
  );
}

ListView.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
