import React from "react";

export default function Todo({ item, isActive, setTodos }) {
  // 삭제 버튼
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  // 완료 취소 버튼
  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((y) => {
        if (y.id === item.id) {
          return { ...y, isDone: !y.isDone };
        } else {
          return y;
        }
      })
    );
  };
  return (
    <div className="todo_container" key={item.id}>
      <h2 className="todo_title">{item.title}</h2>
      <p>{item.contents}</p>
      <div className="button_set">
        {isActive ? (
          <button className="done_button" onClick={handleSwitchButtonClick}>
            완료
          </button>
        ) : (
          <button className="done_button" onClick={handleSwitchButtonClick}>
            취소
          </button>
        )}
        <button className="delete_button" onClick={handleDeleteButtonClick}>
          삭제
        </button>
      </div>
    </div>
  );
}
