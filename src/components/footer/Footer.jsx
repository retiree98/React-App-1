import React from "react";
import footercss from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div
        className={`${footercss.footer_top} text-white flex p-16 flex-wrap items-start`}
      >
        <div className="sm:w-1/3 w-full text-center p-4">
          <h3 className="pt-5 mb-2">LOCATION</h3>
          <p className="mb-4">2215 John Daniel Drive</p>
          <p className="mb-4">Clark, MO 65243</p>
        </div>
        <div className="sm:w-1/3 w-full text-center p-4">
          <h3 className="pt-5 mb-2">AROUND THE WEB</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <FontAwesomeIcon
              className="p-3 border border-white rounded-full flex justify-center items-center"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="p-3 border border-white rounded-full flex justify-center items-center"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="p-3 border border-white rounded-full flex justify-center items-center"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              className="p-3 border border-white rounded-full flex justify-center items-center"
              icon={faGlobe}
            />
          </div>
        </div>
        <div className="sm:w-1/3 w-full text-center p-4">
          <h3 className="pt-5 mb-2">ABOUT FREELANCER</h3>
          <p className="mb-4">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className={footercss.footer_bottom}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
