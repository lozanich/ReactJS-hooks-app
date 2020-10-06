import React from "react";
import PropTypes from "prop-types";

export const TodoListItem = ({ item, index, handleDelete, handleToggle }) => {
  return (
    <li key={item.id} className="list-group-item">
      <p
        className={`${item.done && "complete"}`}
        onClick={() => handleToggle(item)}
      >
        {index + 1}. {item.desc}
      </p>

      <button onClick={() => handleDelete(item)} className="btn btn-danger">
        Eliminar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
