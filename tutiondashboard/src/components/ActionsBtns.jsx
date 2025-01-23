import {
  faBan,
  faCheck,
  faCircleCheck,
  faCross,
  faEye,
  faPencil,
  faShuffle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const ActionsBtns = ({
  rowData,
  onAccept = null,
  onReject = null,
  onClose = null,
  onView = null,
  onEdit = null,
  onDelete = null,
}) => {
  const navigate = useNavigate();

  return (
    <div className="actionbtn flex align-content-center">
      {onAccept && rowData.status === "pending" && (
        <Button
          icon={<FontAwesomeIcon icon={faCheck} />}
          className="p-button p-button-success mr-2"
          tooltip="accept"
          onClick={() => {
            if (onAccept) {
              onAccept(rowData);
            }
          }}
          tooltipOptions={{ position: "left" }}
        />
      )}
      {onView && (
        <Button
          icon={<FontAwesomeIcon icon={faEye} />}
          className="p-button p-button-info mr-2"
          onClick={() => onView && onView(rowData)}
          tooltip="view"
        />
      )}
      {onReject && rowData.status === "pending" && (
        <Button
          icon={<FontAwesomeIcon icon={faBan} />}
          className="p-button p-button-warning mr-2"
          onClick={() => onReject && onReject(onReject)}
          tooltip="reject"
          tooltipOptions={{ position: "left" }}
        />
      )}
      {onClose && rowData.status === "accepted" && (
        <Button
          icon={<FontAwesomeIcon icon={faCircleCheck} />}
          className="p-button p-button-info mr-2"
          onClick={() => onClose && onClose(rowData)}
          tooltip="close"
          tooltipOptions={{ position: "left" }}
        />
      )}
      {onEdit && (
        <Button
          icon={<FontAwesomeIcon icon={faPencil} />}
          className="p-button p-button-info mr-2"
          onClick={() => onEdit && onEdit(rowData)}
          tooltip="close"
          tooltipOptions={{ position: "left" }}
        />
      )}
      {onDelete && (
        <Button
          icon={<FontAwesomeIcon icon={faTrash} />}
          className="p-button p-button-danger mr-2"
          onClick={() => onDelete && onDelete(rowData)}
          tooltip="close"
          tooltipOptions={{ position: "left" }}
        />
      )}
    </div>
  );
};

export default ActionsBtns;
