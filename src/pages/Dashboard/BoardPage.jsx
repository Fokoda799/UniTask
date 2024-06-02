import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "../../data/board";
import { onDragEnd } from "../../helpers/onDragEnd";
import AddModal from "../../components/Modals/AddModal";
import Task from "../../components/dashboard/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import EditTaskModal from "@/components/Modals/EditTaskModal";

const BoardPage = () => {
  /* NEW */
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [columns, setColumns] = useState(Board);
  const [selectedColumn, setSelectedColumn] = useState({});

  const openAddModal = (columnId, columnName, columnColor) => {
    setSelectedColumn({ id: columnId, name: columnName, color: columnColor });
    setAddModalOpen(true);
  };
  const handleAddTask = (taskData) => {
    const newColumns = { ...columns };
    newColumns[selectedColumn.id].items.push(taskData);
    setColumns(newColumns); // Update state
  };
  const handleDeleteTask = (taskId) => {
    // Filter out the task with the given taskId
    const updatedColumns = { ...columns };
    for (let columnId in updatedColumns) {
      updatedColumns[columnId].items = updatedColumns[columnId].items.filter(
        (task) => task.id !== taskId
      );
    }
    setColumns(updatedColumns);
  };

  const handleEditTask = (editedTask) => {
    // Update the task in the state with the edited data
    const updatedColumns = { ...columns };
    for (let columnId in updatedColumns) {
      updatedColumns[columnId].items = updatedColumns[columnId].items.map(
        (task) =>
          task.id === editedTask.id ? { ...task, ...editedTask } : task
      );
    }
    setColumns(updatedColumns);
    setEditModalOpen(false); // Close modal after editing task
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setEditModalOpen(true);
  };
  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="flex items-start justify-between w-full gap-10 px-5 pb-8 md:gap-0 w-fit">
          {Object.entries(columns).map(([columnId, column]) => (
            <div
              className="flex flex-col w-full gap-0 m-4 board-col"
              key={columnId}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <h2 className="text-lg font-bold">{column.name}</h2>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-white border rounded-full ms-2 border-slate-200">
                  <div className="text-sm font-bold text-slate-400">
                    {column.items.length}
                  </div>
                </div>
                <div className="inline-flex items-center justify-end flex-1">
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="text-lg cursor-pointer text-slate-400"
                  />
                </div>
              </div>
              <hr className={`border-${column.color || "gray-800"} border-2`} />
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    {column.items.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <Task
                            key={task.id}
                            provided={provided}
                            task={task}
                            onDeleteTask={handleDeleteTask}
                            openEditModal={openEditModal}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() =>
                  openAddModal(columnId, column.name, column.color)
                }
                className="add-task-btn transition-opacity flex cursor-pointer m-auto items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        handleAddTask={handleAddTask}
        selectedColumn={selectedColumn}
      />
      <EditTaskModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        handleEditTask={handleEditTask}
        selectedTask={selectedTask}
      />
    </>
  );
};

export default BoardPage;
