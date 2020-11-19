import React, { Component } from "react";
import shortid from "shortid";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ListView from "../listview";
import TableView from "../tableview";
import CreateToDoForm from "../create-todo-form";
import Controller from "../controller";

export default class Todos extends Component {
  state = {
    todos: [
      {
        id: "01",
        text: "main todo text",
        description: "Simple todo make easy life",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
  };
  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  getView = () => {
    return this.state.view === "list" ? (
      <ListView
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <TableView
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    );
  };

  render() {
    return (
      <>
        <h1 className="display-4 text-center mb-5">Todos</h1>
        {/* <ListView
             todos={this.state.todos}
             toggleComplete={this.toggleComplete}
             toggleSelect={this.toggleSelect}
             />

             <TableView
             todos={this.state.todos}
             toggleComplete={this.toggleComplete}
             toggleSelect={this.toggleSelect}
             /> */}

        <Controller
          term={this.state.searchTerm}
          view={this.state.view}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        <div>{this.getView()}</div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New ToDO Item
          </ModalHeader>
          <ModalBody>
            <CreateToDoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </>
    );
  }
}
