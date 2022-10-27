import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../common/button";
import Input from "../../common/input";
import "./todo.css";

function ToDoList() {
  const [AddTask, setAddTask] = useState("");
  let [Items, setItems] = useState([]);
  const [AllItems] = useState([]);
  let [Active] = useState([]);
  let [completed] = useState([]);
  let [CompletedArray, setCompletedArray] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState("");

  const handleChange = (e) => {
    setAddTask(e.target.value);
    // console.log("AddTask", AddTask);
  };

  const handleSubmit = () => {
    Items.push({ name: AddTask, id: Items.length, completed: "false" });
    AllItems.push({ name: AddTask, id: AllItems.length, completed: "false" });
    setAddTask("");
  };

  const handleChecked = (id) => {
    // to mark it
    document.getElementById("itemName" + id).classList.toggle("toggle");
    document.getElementById("done" + id).classList.toggle("toggle-done");
    // to add label'id to completed array
    let labels = document.getElementsByClassName("label");
    CompletedArray = [];
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].className.includes("toggle")) {
        // console.log(l[i].htmlFor);
        let index = labels[i].htmlFor; //id
        CompletedArray.push(index);
      }
      // console.log("c", CompletedArray);
      setCompletedArray(CompletedArray);
    }
    // to know how much items left
    setNumberOfItems(Items.length - CompletedArray.length);
  };

  // fadel checked
  const handleAll = () => {
    console.log("all");
    setItems(AllItems);
    // console.log("all", AllItems);
    // console.log("items", Items);

    // ان اللي عليه علامة يتعلم تاني
    let checked = "";
    CompletedArray.map((ele) => {
      checked = AllItems.filter((item) => item.id == ele);
    });
    console.log();
  };

  const handleActive = () => {
    console.log("completed", CompletedArray);
    console.log("items before", Items);

    for (let i = 0; i < CompletedArray.length; i++) {
      const ele = CompletedArray[i];
      Active = Items.filter((item) => item.id != ele);
      console.log("active", Active);
      setItems(Active);
    }

    console.log("Active", Active);
    console.log("Items after", Items);
    setItems(Active);
  };

  const handleCompleted = () => {
    console.log("completed Array", CompletedArray);
    CompletedArray.map(
      (ele) => (completed = Items.filter((item) => item.id == ele))
    );
    setItems(completed);
    console.log("completed", completed);
  };

  const handleClearCompleted = () => {
    console.log("clear completed", CompletedArray);
  };

  const handleArrow = () => {
    console.log("handleArrow");

    let checkboxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = "true";
    }

    let labels = document.getElementsByClassName("label");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.toggle("toggle");
    }

    let done = document.getElementsByClassName("done");
    for (let i = 0; i < done.length; i++) {
      done[i].classList.toggle("toggle-done");
    }
  };
  return (
    <>
      <div>
        <div className="box">
          <div className="mainInput">
            {Items.length !== 0 ? (
              <span className="arrow" onClick={handleArrow}>
                <i className="ri-arrow-down-s-line"></i>
              </span>
            ) : null}

            <Input
              id="main"
              placeHolder="What needs to be done?"
              value={AddTask}
              name="AddTask"
              onChange={handleChange}
            />
            <Button
              id="button"
              className="btn btn-primary button"
              onClick={handleSubmit}
              content="Add"
              disabled={AddTask.trim() === "" ? true : false}
            />
          </div>

          <div className="items">
            {(Items || []).map((ele) => (
              <div className="item" key={ele.id}>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={ele.id}
                  name="item"
                  value={ele.name}
                  onChange={() => handleChecked(ele.id)}
                  // onClick={handle}
                />

                <label
                  className="label"
                  htmlFor={ele.id}
                  id={"itemName" + ele.id}
                  type="text"
                  name="item"
                  // onChange={handleChangeEle}
                >
                  {ele.name}
                  <span className="done" id={"done" + ele.id}>
                    Done
                  </span>
                </label>

                {/* <Input
                    id={"itemName" + ele.id}
                    type="text"
                    value={ele.name}
                    name="item"
                    onChange={handleChangeEle}
                  /> */}
              </div>
            ))}
          </div>

          {AllItems.length !== 0 ? (
            <div className="footer" id="footer">
              <Row>
                <Col sm={3}>
                  <span>{numberOfItems} items Left</span>
                </Col>
                <Col sm={5} className="buttons-in-the-middle">
                  <Button
                    content="All"
                    onClick={handleAll}
                    title="Show all tasks"
                  />
                  <Button
                    content="Active"
                    onClick={handleActive}
                    title="Show uncompleted tasks"
                  />
                  <Button
                    content="Completed"
                    onClick={handleCompleted}
                    title="Show completed tasks"
                  />
                </Col>
                <Col sm={4}>
                  <Button
                    content="Clear completed"
                    onClick={handleClearCompleted}
                    title="delete completed tasks :)"
                  />
                </Col>
              </Row>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ToDoList;
