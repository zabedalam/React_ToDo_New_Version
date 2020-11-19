import React from "react";
import { Button, CustomInput } from "reactstrap";
import PropTypes from "prop-types";

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

function RowItem({ todo, toggleSelect, toggleComplete }) {
  return (
    <>
      <tr>
        <td scope="row">
          <CustomInput
            type="checkbox"
            id={todo.id}
            checked={todo.isSelect}
            onChange={() => toggleSelect(todo.id)}
          />
        </td>
        <td>{todo.time.toDateString()}</td>
        <td>{todo.text}</td>
        <td>
          <Button
            color={todo.isComplete ? "danger" : "success"}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.isComplete ? "Completed" : "Running"}
          </Button>
        </td>
      </tr>
    </>
  );
}

export default RowItem;
