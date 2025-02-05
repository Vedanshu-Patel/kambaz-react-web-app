import { Col, Container, ListGroup, Row } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdEditDocument } from "react-icons/md";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary1" id="wd-assignments-title"><BsGripVertical className="me-2 fs-3" /><FontAwesomeIcon icon={faCaretDown} /> ASSIGNMENTS<AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lesson rounded-0" id="wd-assignment-list">
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-assignment-list-item">
              <div className="d-flex">
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEditDocument className="me-2 fs-3" style={{ color: '#008000' }} />
                </span>
                <div className="position-relative flex-grow-1">
                  <LessonControlButtons />
                  <a className="wd-assignment-link text-black link-underline link-underline-opacity-0" href="#/Kambaz/Courses/1234/Assignments/123">
                    <b>A1</b>
                  </a>
                  <div>
                    <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> July 4 at 10:20am | <b>Due</b> July 14 at 11:59pm | 100 pts</p>
                  </div>
                </div></div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-assignment-list-item">
              <div className="d-flex">
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEditDocument className="me-2 fs-3" style={{ color: '#008000' }} />
                </span>
                <div className="position-relative flex-grow-1">
                  <LessonControlButtons />
                  <a className="wd-assignment-link text-black link-underline link-underline-opacity-0" href="#/Kambaz/Courses/1234/Assignments/123">
                    <b>A2</b>
                  </a>
                  <div>
                    <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> Feb 19 at 9:00am | <b>Due</b> Feb 24 at 11:59pm | 100 pts</p>
                  </div>
                </div></div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-assignment-list-item">
              <div className="d-flex">
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEditDocument className="me-2 fs-3" style={{ color: '#008000' }} />
                </span>
                <div className="position-relative flex-grow-1">
                  <LessonControlButtons />
                  <a className="wd-assignment-link text-black link-underline link-underline-opacity-0" href="#/Kambaz/Courses/1234/Assignments/123">
                    <b>A3</b>
                  </a>
                  <div>
                    <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> April 7 at 8:00am | <b>Due</b> April 20 at 11:59pm | 100 pts</p>
                  </div>
                </div></div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-assignment-list-item">
              <div className="d-flex">
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEditDocument className="me-2 fs-3" style={{ color: '#008000' }} />
                </span>
                <div className="position-relative flex-grow-1">
                  <LessonControlButtons />
                  <a className="wd-assignment-link text-black link-underline link-underline-opacity-0" href="#/Kambaz/Courses/1234/Assignments/123">
                    <b>A4</b>
                  </a>
                  <div>
                    <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> Sept 12 at 11:00am | <b>Due</b> Sept 13 at 11:59pm | 100 pts</p>
                  </div>
                </div></div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-assignment-list-item">
              <div className="d-flex">
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEditDocument className="me-2 fs-3" style={{ color: '#008000' }} />
                </span>
                <div className="position-relative flex-grow-1">
                  <LessonControlButtons />
                  <a className="wd-assignment-link text-black link-underline link-underline-opacity-0" href="#/Kambaz/Courses/1234/Assignments/123">
                    <b>A5</b>
                  </a>
                  <div>
                    <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> Sept 10 at 11:00am | <b>Due</b> Sept 20 at 11:59pm | 100 pts</p>
                  </div>
                </div></div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

      </ListGroup>

    </div>
  );
}
