import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

import styles from "./Resume.module.css";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div
          className={styles.sectionTitle}
          style={{
            marginTop: "20px",
            borderBottom: "3px solid black",
          }}
        >
          {info.workExp.sectionTitle}
        </div>

        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.subTitle}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.title}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div
          className={styles.sectionTitle}
          style={{
            borderBottom: "3px solid black",
          }}
        >
          {info.project.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p
                  className={styles.title}
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.poin} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div
          className={styles.sectionTitle}
          style={{
            borderBottom: "3px solid black",
          }}
        >
          {info.summary?.sectionTitle}
        </div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p>
            {info?.other?.detail && (
              <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                {info.other.detail.split(",").map((item, index) => (
                  <li
                    key={index}
                    style={{ marginTop: "5px", textTransform: "capitalize" }}
                  >
                    {item.trim()}
                  </li>
                ))}
              </ul>
            )}
          </p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.education, sections.other, sections.achievement],
      [sections.workExp, , sections.project, sections.summary],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColorb || !container) return;

    container.style.setProperty("--colore", props.activeColorb);
  }, [props.activeColorb]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColorf || !container) return;

    container.style.setProperty("--colorf", props.activeColorf);
  }, [props.activeColorf]);

  const profileImage = info.basicInfo?.detail?.profileImage;
  const [imageSrc, setImageSrc] = useState("");
  console.log("image data ", info.basicInfo?.detail);
  useEffect(() => {
    if (profileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(profileImage);
    }
  }, [profileImage]);

  return (
    <div ref={ref}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="User Profile"
                style={{
                  borderRadius: "50%",
                  margin: "18px",
                  height: "200px",
                  width: "200px",
                }}
              />
            )}
            {info.basicInfo?.detail?.email && (
              <a
                className={styles.link}
                style={{
                  fontSize: "18px",
                  color: "white",
                  marginBottom: "20px",
                }}
                type="email"
              >
                <AtSign /> {info.basicInfo?.detail?.email}
              </a>
            )}
            <div className={styles.col1}>
              {columns[0].map((item) => sectionDiv[item])}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.taitle}>
              <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
              <p className={styles.subHeading}>
                {info.basicInfo?.detail?.role}
              </p>
              <p className={styles.role}>{info.basicInfo?.detail?.title}</p>
            </div>
            <div className={styles.links} style={{ marginLeft: "16px" }}>
              {/* {info.basicInfo?.detail?.email && (
                <a className={styles.link} type="email">
                  <AtSign /> {info.basicInfo?.detail?.email}
                </a>
              )} */}
              {info.basicInfo?.detail?.phone && (
                <a className={styles.link}>
                  <Phone /> {info.basicInfo?.detail?.phone}
                </a>
              )}
              {info.basicInfo?.detail?.linkedin && (
                <a className={styles.link}>
                  <Linkedin /> {info.basicInfo?.detail?.linkedin}
                </a>
              )}
              {info.basicInfo?.detail?.github && (
                <a className={styles.link}>
                  <GitHub /> {info.basicInfo?.detail?.github}
                </a>
              )}
            </div>
            <div className={styles.col2}>
              {columns[1].map((item) => sectionDiv[item])}
            </div>
          </div>
        </div>

        <div className={styles.main}></div>
      </div>
    </div>
  );
});

export default Resume;
