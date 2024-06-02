import { useState } from "react";

const TaskPage = () => {
  /* OLD */
  const [showModal, setShowModal] = useState(false);

  const handleNewTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <button
          onClick={handleNewTask}
          className="px-4 py-2 text-white bg-purple-500 rounded-md"
        >
          New Task
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Colonne "To Do" */}
        <div>
          <h2 className="mb-2 text-lg font-semibold">To Do</h2>
          <div className="space-y-2">
            {/* Tâches à faire */}
            {/* Vous pouvez ajouter ici des tâches dynamiques */}
          </div>
        </div>
        {/* Autres colonnes (In Work, QA, Completed) */}
        {/* Ajoutez des tâches similaires pour les autres colonnes */}
      </div>
      <AlertTask showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default TaskPage;
