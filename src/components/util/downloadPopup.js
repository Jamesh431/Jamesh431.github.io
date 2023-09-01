import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const downloadPopup = ({ list_of_data }) => {
  return (
    <div className="download-popup-container">
      <div className="download-options">
        {list_of_data.map((data) => {
          <Link to={data.filePath} download={data.fileName}>
            <Button className="download-option-wrapper">{data.fileName}</Button>
          </Link>;
        })}
      </div>
    </div>
  );
};

export default downloadPopup;
