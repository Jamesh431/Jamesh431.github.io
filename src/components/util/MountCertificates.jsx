import { Link } from "react-router-dom";

const MountCertificates = ({ list_of_data }) => {
  return (
    <>
      {list_of_data.map((data, idx) => {
        return (
          <object
            data={data.filePath}
            type="application/pdf"
            className="certificate-wrapper"
            title={data.onHover}
            key={idx}
          ></object>
        );
      })}
    </>
  );
};

export default MountCertificates;
