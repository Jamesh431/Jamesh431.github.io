import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadPopup = ({ list_of_data }) => {
  return (
    <div className="download-popup-container">
      <div className="download-options" style={{ fontSize: "22px" }}>
        {list_of_data.map((data, idx) => {
          return (
            <div
              className="resume-option-wrapper"
              key={idx}
              style={{ marginBottom: "2.7%" }}
            >
              <a
                href={data.filePath}
                download={data.fileName}
                title={data.onHover}
              >
                <FontAwesomeIcon icon="fa-regular fa-floppy-disk" />{" "}
                {data.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadPopup;
