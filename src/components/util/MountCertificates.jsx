// import { Link } from "react-router-dom";

const MountCertificates = ({ list_of_data }) => {
  return (
    <>
      {list_of_data.map((data, idx) => {
        return (
          <div className="certificate-wrapper" key={idx}>
            <img
              src={data.filePath}
              type="image/jpg"
              className="certificate"
              alt={data.onHover}
              title={data.onHover}
            ></img>
          </div>
        );
      })}
    </>
  );
};

export default MountCertificates;
