import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../common/button";
import Input from "../../common/input";
import CongratsModal from "../../common/modal";
import "./todo.css";
import { toast } from "react-toastify";

const FILTER_MODE_ALL = "all";
const FILTER_MODE_ACTIVE = "active";
const FILTER_MODE_COMPLETED = "completed";

function ToDoList() {
  const [taskInput, setTaskInput] = useState("");
  const [items, setItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(FILTER_MODE_ALL);
  const [showModal, setShowModal] = useState(false);

  const activeItems = items.filter((item) => !item.completed);
  const completedItems = items.filter((item) => item.completed);

  let itemsToRender = [];
  switch (currentTab) {
    case FILTER_MODE_ALL:
      itemsToRender = items;
      break;

    case FILTER_MODE_COMPLETED:
      itemsToRender = completedItems;

      break;

    case FILTER_MODE_ACTIVE:
      itemsToRender = activeItems;
      break;

    default:
  }

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    const isEnter = e.keyCode == 13;
    const newTask = taskInput.trim();
    const isTaskPresent = newTask.length > 0;
    if (isEnter && isTaskPresent) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    items.push({ name: taskInput, id: items.length, completed: false });
    setItems(items);

    setTaskInput("");
  };

  const toggleItemCompleted = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    // to set all with the update of complete status
    setItems(updatedItems);
  };

  const showAll = () => {
    setCurrentTab(FILTER_MODE_ALL);
  };

  const filterByActive = () => {
    setCurrentTab(FILTER_MODE_ACTIVE);
    if (items.length === completedItems.length) {
      setShowModal(true);
    }
  };

  const filterByCompleted = () => {
    setCurrentTab(FILTER_MODE_COMPLETED);
    if (items.length === completedItems.length) {
      setShowModal(true);
    }
    if (completedItems.length === 0) {
      toast.warning("Sorry, you didn't complete any task :(");
    }
  };

  const clearCompleted = () => {
    setItems(activeItems);
  };

  const setAllCompleted = () => {
    const updatedItems = items.map((item) => ({ ...item, completed: true }));
    setItems(updatedItems);
  };
  const handleClose = (id) => {
    let updatedItems = items.filter((item) => item.id != id);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="box">
        <div className="mainInput">
          {items.length !== 0 ? (
            <span className="arrow" onClick={setAllCompleted}>
              <i className="ri-arrow-down-s-line"></i>
            </span>
          ) : null}

          <Input
            id="main"
            placeHolder="What needs to be done?"
            value={taskInput}
            name="AddTask"
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="form-control"
          />
          <Button
            className="btn buttonAdd"
            onClick={handleSubmit}
            content="Add"
            disabled={taskInput.trim() === "" ? true : false}
          />
        </div>

        <div className="items">
          {itemsToRender.map((item) => (
            <div className="item" key={item.id}>
              <div className="d-flex gap-3 align-items-center">
                <input
                  className="form-check "
                  type="checkbox"
                  id={item.id}
                  name="item"
                  value={item.name}
                  onChange={() => toggleItemCompleted(item.id)}
                  checked={item.completed}
                />

                <label
                  className={"label " + (item.completed && "toggle")}
                  htmlFor={item.id}
                  id={"itemName" + item.id}
                  type="text"
                  name="item"
                >
                  {item.name}
                </label>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <span
                  className={"done " + (item.completed ? "toggle-done" : null)}
                  id={"done" + item.id}
                >
                  <i className="ri-check-double-line"></i>
                </span>
                <span className="close" onClick={() => handleClose(item.id)}>
                  <i className="ri-close-circle-fill"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {items.length !== 0 && (
          <div className="footer" id="footer">
            <Row>
              <Col xl={3} xs={12}>
                <span>{activeItems.length} items Left</span>
              </Col>

              <Col xl={5} xs={12} className="buttons-in-the-middle">
                <Button
                  id="buttonAll"
                  content="All"
                  onClick={() => showAll("buttonAll")}
                  title="Show all tasks"
                  className="button"
                />
                <Button
                  id="buttonActive"
                  content="Active"
                  onClick={() => filterByActive("buttonActive")}
                  title="Show uncompleted tasks"
                  className="button"
                />
                <Button
                  id="buttonCompleted"
                  content="Completed"
                  onClick={() => filterByCompleted("buttonCompleted")}
                  title="Show completed tasks"
                  className="button"
                />

                <CongratsModal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                />
              </Col>
              <Col xl={4} xs={12}>
                <Button
                  className="btn btn-danger"
                  id="buttonClear"
                  content="Clear completed"
                  onClick={() => clearCompleted("buttonClear")}
                  title="delete completed tasks :)"
                />
              </Col>
            </Row>
          </div>
        )}
      </div>
    </>
  );
}

export default ToDoList;
