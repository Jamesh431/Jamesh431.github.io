import { useEffect } from "react";
import Modal from "react-modal";

import hapna_slab_medium from "../../fonts/hapna_slab_medium.ttf";

Modal.setAppElement("#root");

export default function EasyModal(props) {
  const { isOpen, onRequestClose, overlay, content, children } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: { ...overlay },
        content: {
          position: "relative",
          zIndex: 7,
          width: "550px",
          height: "450px",
          top: "20%",
          inset: "20% 0px 0px",
          left: "32.6%",
          margin: "0 auto",
          borderRadius: "10px",
          backgroundColor: "#020202",
          padding: "0px",
          overflow: "hidden",
          border: "2px solid #d92020",
          filter: "drop-shadow(0px 2px 3px #d92020)",
          fontFamily: hapna_slab_medium,
          ...content,
        },
      }}
    >
      {children}
    </Modal>
  );
}
