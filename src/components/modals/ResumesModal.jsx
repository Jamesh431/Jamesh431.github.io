import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DownloadPopup from "../util/DownloadPopup";
import resumeArray from "../helpers/resumeArray";

export default function ResumesModal(props) {
  const { setIsOpen } = props;

  return (
    <div className="resume-selection-modal">
      <div className="modal-header-container">
        <div className="modal-title-wrapper">
          <h1>Hey look, a modal!</h1>
        </div>
        <div className="exit-wrapper" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            style={{ color: "#e2e2e2" }}
          />
        </div>

        <div className="modal-body-container">
          <DownloadPopup list_of_data={resumeArray} />
        </div>
      </div>
    </div>
  );
}
