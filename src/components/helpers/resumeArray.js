import jamesHalesResumeDarkmode from "../../assets/resumes/jamesHalesResumeDarkmode.pdf";
import jamesHalesResumeLightmode from "../../assets/resumes/jamesHalesResumeLightmode.pdf";

const resumeArray = [
  {
    filePath: jamesHalesResumeDarkmode,
    fileName: "james_hales_resume_darkmode.pdf",
    title: "Darkmode resume (lightmode attracts bugs)",
    onHover: "Download me!",
  },
  {
    filePath: jamesHalesResumeLightmode,
    fileName: "james_hales_resume_lightmode.pdf",
    title: "Lightmode version (best for printing)",
    onHover: "No, download me!",
  },
];

export default resumeArray;
