"use client";

import { FaDeleteLeft } from "react-icons/fa6";

type DeleteButtonProps = {
  id: number;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const handleDelete = async (id: number) => {
    const { deleteMessage } = await import("actions/guestbook");

    deleteMessage(id);
  };

  return (
    <FaDeleteLeft
      onClick={() => handleDelete(id)}
      style={{ color: "#F56565", display: "inline" }}
    />
  );
};

export default DeleteButton;
