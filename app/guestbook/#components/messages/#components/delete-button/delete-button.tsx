"use client";

import { deleteMessage } from "actions/guestbook";
import { FaDeleteLeft } from "react-icons/fa6";

type DeleteButtonProps = {
  id: number;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <FaDeleteLeft
      onClick={() => deleteMessage(id)}
      style={{ color: "#F56565", display: "inline" }}
    />
  );
};

export default DeleteButton;
