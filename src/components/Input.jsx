import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();

    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }

    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });

    setTitle("");
    setContents("");
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick} className="add_form">
        <div>
          <label className="form_label">제목</label>

          <input
            className="add_input"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          <label className="form_label">내용</label>

          <input
            type="text"
            className="add_input"
            value={contents}
            onChange={handleContentsChange}
          />
        </div>
        <button className="add_button">추가하기</button>
      </form>
    </section>
  );
}
