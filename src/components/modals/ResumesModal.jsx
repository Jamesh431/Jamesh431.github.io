import DownloadPopup from "../util/DownloadPopup";
import resumeArray from "../helpers/resumeArray";

export default function ResumesModal(props) {
  const { setIsOpen } = props;

  return (
    <div className="resume-selection-modal">
      <div className="exit-wrapper" onClick={() => setIsOpen(false)}>
        <p>X</p>
      </div>
      <DownloadPopup list_of_data={resumeArray} />
    </div>
  );
}
