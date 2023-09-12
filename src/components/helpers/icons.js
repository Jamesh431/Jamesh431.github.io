import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faCode,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faFile,
  faCircleQuestion,
  faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function initIcons() {
  return library.add(
    fab,
    far,
    faHouse,
    faCode,
    faGlobe,
    faXmark,
    faSquareGithub,
    faLinkedin,
    faFile,
    faCircleQuestion,
    faFloppyDisk,
    fas,
    faCircleLeft,
    faCircleRight
  );
}
