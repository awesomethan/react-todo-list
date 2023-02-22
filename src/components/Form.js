import React from "react";

function Form({inputText, setInputText, todos, setTodos, id, setId}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText !== "") {
        setTodos([...todos, {text: inputText, key: id}])
        setId(id+1);
        setInputText("");
    }
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;
