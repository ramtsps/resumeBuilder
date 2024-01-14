import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const colorsb = ["#4b0712", "#053c55", "#4b3f05", "#000000", "#834067"];
  const colorsf = ["#FFFFFF", "#000000"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Skills",
  };
  const resumeRef = useRef();

  const defaultTextColor = colors[0];
  const defaultBgColor = colorsb[0];

  const [activeColor, setActiveColor] = useState(defaultTextColor);
  const [activeColorb, setActiveColorb] = useState(defaultBgColor);
  const [activeColorf, setActiveColorf] = useState(colorsf[0]);
  const [textColor, setTextColor] = useState(defaultTextColor);
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  const handleTextColorChange = (color) => {
    setTextColor(color);
    setActiveColor(color);
  };

  const handleBgColorChange = (color) => {
    setBgColor(color);
    setActiveColorb(color);
  };

  return (
    <div
      className={styles.container}
      // style={{ overflowY: "auto", maxHeight: "400px", transform: "scale(1.2)" }}
    >
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          <h3 style={{ marginBottom: "10px", marginTop: "20px" }}>
            Highlight Color
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <select
              value={textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              style={{
                marginRight: "10px",
                padding: "5px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {colors.map((color) => (
                <option
                  key={color}
                  value={color}
                  style={{ backgroundColor: color, color: "#fff" }}
                >
                  {color}
                </option>
              ))}
            </select>

            <span
              style={{
                backgroundColor: textColor,
                width: "20px",
                height: "20px",
                display: "inline-block",
                marginLeft: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            ></span>
            <input
              type="color"
              value={textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              style={{ marginLeft: "10px", backgroundColor: "white" }}
            />
            <span
              style={{
                backgroundColor: textColor,
                width: "20px",
                height: "20px",
                display: "inline-block",
                marginLeft: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            ></span>
          </div>

          <h3 style={{ marginBottom: "10px", marginTop: "20px" }}>
            BackgroundColor Change
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <select
              value={bgColor}
              onChange={(e) => handleBgColorChange(e.target.value)}
              style={{
                marginRight: "10px",
                padding: "5px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {colorsb.map((color) => (
                <option
                  key={color}
                  value={color}
                  style={{ backgroundColor: color, color: "#fff" }}
                >
                  {color}
                </option>
              ))}
            </select>

            <span
              style={{
                backgroundColor: bgColor,
                width: "20px",
                height: "20px",
                display: "inline-block",
                marginLeft: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            ></span>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => handleBgColorChange(e.target.value)}
              style={{ marginLeft: "10px", backgroundColor: "white" }}
            />
            <span
              style={{
                backgroundColor: bgColor,
                width: "20px",
                height: "20px",
                display: "inline-block",
                marginLeft: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            ></span>
          </div>
        </div>
      </div>
      <ReactToPrint
        trigger={() => {
          return (
            <button
              style={{
                backgroundColor: "#239ce2",
                color: "#fff",
                padding: "10px 15px",
                fontSize: "16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Download <ArrowDown />
            </button>
          );
        }}
        content={() => resumeRef.current}
      />

      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
          activeColorb={activeColorb}
          activeColorf={activeColorf}
        />
      </div>
    </div>
  );
}

export default Body;
