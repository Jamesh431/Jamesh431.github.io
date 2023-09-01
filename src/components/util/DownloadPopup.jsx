import { Link } from "react-router-dom";

const DownloadPopup = ({ list_of_data }) => {
  return (
    <div className="download-popup-container">
      <div className="download-options">
        {list_of_data.map((data) => {
          return (
            <a href={data.filePath} download={data.fileName}>
              <button className="download-option-wrapper">
                {data.fileName}
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadPopup;
