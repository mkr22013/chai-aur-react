import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { useEffect } from "react";

function AddTodo() {
  const [input, setInput] = useState("");
  const editClicked = useSelector((state) => state.editClicked);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length < 1) return;

    //First check the operation Add/Update
    const btn = document.getElementById("btnSubmit");
    if (btn.innerHTML == "Add Todo") {
      dispatch(addTodo(input)); //Here dispatch will dispatch to addTodo and it will pass input value to addTodo
      //we are just sending input here because in addTodo it already generating id for each todo we add
      //Now once we add the todo we just clean the input box and for that just clean the state
      setInput("");
    } else {
      dispatch(updateTodo({ id: editClicked.id, text: input }));
      setInput("");
      btn.innerHTML = "Add Todo";
    }
  };

  useEffect(() => {
    setInput(editClicked.todo);
    if (editClicked.text === "") return;
    document.getElementById("btnSubmit").innerHTML = editClicked.text;
  }, [editClicked]);

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        id="todoId"
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        id="btnSubmit"
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
