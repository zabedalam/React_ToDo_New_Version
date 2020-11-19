import React from "react";
import { Table } from "reactstrap";
import RowItem from "./RowItem";
import PropTypes from "prop-types";

TableView.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

function TableView({ todos, toggleSelect, toggleComplete }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Time</td>
            <td>Todo</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <RowItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              toggleSelect={toggleSelect}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableView;
