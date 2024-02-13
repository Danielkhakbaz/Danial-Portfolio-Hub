"use client";

import { deleteChat } from "actions/chat";
import { FaDeleteLeft } from "react-icons/fa6";

type DeleteButtonProps = {
  id: number;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <FaDeleteLeft
      onClick={() => deleteChat(id)}
      style={{ color: "#F56565", display: "inline" }}
    />
  );
};

export default DeleteButton;
