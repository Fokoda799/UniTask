import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ provided, task, onDeleteTask, openEditModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
    handleClose();
  };

  const handleEdit = () => {
    openEditModal(task);
    handleClose();
  };

  const getRandomColor = (title) => {
    const colors = [
      "blue-500",
      "green-500",
      "yellow-500",
      "red-500",
      "indigo-500",
      "purple-500",
      "pink-500",
    ];
    const sumLength = title.length;
    const secondLetter = title.charAt(1);
    const index = (sumLength + secondLetter.charCodeAt(0)) % colors.length;
    return "bg-" + colors[index] + " text-" + colors[index];
  };

  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className="relative w-full p-4 bg-white rounded-[5px] shadow-sm"
    >
      <h3 className="mb-2">{task.title}</h3>
      <p className="h-5 overflow-hidden text-xs font-normal leading-none tracking-tight text-slate-400 text-ellipsis">
        {task.description}
      </p>
      <div className="absolute top-0 right-0">
        <IconButton
          aria-label="more"
          aria-controls="task-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="task-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <span className="text-red-500">
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Delete
            </span>
          </MenuItem>
        </Menu>
      </div>
      <div className="flex items-center mt-2 space-x-2">
        {task.domaine   && (
          <span
            className={`inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold bg-opacity-25 rounded-full ${getRandomColor(
              task.domaine
            )}`}
          >
            {task.domaine}
          </span>
        )}
      </div>
    </div>
  );
};

export default Task;
