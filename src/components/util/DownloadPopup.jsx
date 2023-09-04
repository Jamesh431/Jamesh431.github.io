// import { Link } from "react-router-dom";

const DownloadPopup = ({ list_of_data }) => {
  return (
    <div className="download-popup-container">
      <div className="download-options">
        {list_of_data.map((data) => {
          return (
            <div className="resume-option-wrapper">
              <a
                href={data.filePath}
                download={data.fileName}
                title={data.onHover}
              >
                +{data.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadPopup;
