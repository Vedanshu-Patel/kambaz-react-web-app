import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" >

      <Form>
        <FormGroup>
          <FormLabel htmlFor="wd-name">
            <h3>Assignment Name</h3>
          </FormLabel>
          <FormControl type="text" id="wd-name" value="A1">

          </FormControl>
        </FormGroup>
        <FormGroup><br />
          <FormControl as="textarea" id="wd-description" rows={3}>
            This assignment is
            Submit a link to the landing page of  online our Web application running on Netlify.

            The landing page should be the Kambaz application with a link to the Lab exercises.

            Lab 1 should be the landing page of the Lab exercises and should include the following:

            Your full name and section
            Links to each of the lab assignments
            Link to the Kambaz application
            Links to all relevant source code repositories
            The Kambaz application should include a link to navigate back to the landing page.
          </FormControl>
        </FormGroup><br />
        <FormGroup as={Row}>
          <Col md="3" className="text-end">
            <FormLabel htmlFor="wd-points" className="mb-0">
              Points
            </FormLabel>
          </Col>
          <Col md="9">
            <FormControl type="text" id="wd-points" value={100} />
          </Col>
        </FormGroup><br />
        <FormGroup as={Row}>
          <Col md="3" className="text-end">
            <FormLabel htmlFor="wd-group" className="mb-0">
              Assignment Group
            </FormLabel>
          </Col>
          <Col md="9">
            <Form.Select id="wd-group">
              <option value={"ASSIGNMENTS"}>ASSIGNMENTS</option>
              <option value={"PROJECT"}>PROJECT</option>
              <option value={"QUIZZES"}>QUIZZES</option>
              <option value={"EXAMS"}>EXAMS</option>
            </Form.Select>
          </Col>
        </FormGroup><br />
        <FormGroup as={Row}>
          <Col md="3" className="text-end">
            <FormLabel htmlFor="wd-display-grade-as" className="mb-0">
              Display Grade as
            </FormLabel>
          </Col>
          <Col md="9">
            <Form.Select id="wd-display-grade-as">
              <option value={"Percentage"}>Percentage</option>
              <option value={"Marks"}>Marks</option>
              <option value={"Percentile"}>Percentile</option>
            </Form.Select>
          </Col>
        </FormGroup><br />
        <FormGroup as={Row}>
          <Col md="3" className="text-end">
            <FormLabel htmlFor="wd-submission-type" className="mb-0">
              Submission Type
            </FormLabel>
          </Col>
          <Col md="9" >
            <div className="border px-2">
              <Form.Select id="wd-submission-type" className="mt-2">
                <option value={"Online"}>Online</option>
                <option value={"Offline"}>Offline</option>
                <option value={"Hybrid"}>Hybrid</option>
              </Form.Select><br />
              <FormGroup>
                <span><strong>Online Entry Options</strong></span><br /><br />
                <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" /><br />
                <FormCheck type="checkbox" id="wd-website-url" label="Website URL" defaultChecked /><br />
                <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" /><br />
                <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" /><br />
                <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" /><br />
              </FormGroup>
            </div>
          </Col>
        </FormGroup><br />
        <FormGroup as={Row}>
          <Col md="3" className="text-end">
            <FormLabel htmlFor="wd-assign-to" className="mb-0">
              Assign
            </FormLabel>
          </Col>
          <Col md="9" >
            <div className="border px-2 pb-4">
              <br />
              <FormLabel htmlFor="wd-assign-to" className="mb-0">
                <strong>Assign to</strong>
              </FormLabel>
              <FormControl type="text" id="wd-assign-to" className="mt-2" value={"Everyone"}>

              </FormControl><br />
              <FormLabel htmlFor="wd-due-date" className="mb-0">
                <strong>Due</strong>
              </FormLabel>
              <FormControl type="date" value={"2025-05-25"} id="wd-due-date"></FormControl>
              <br />
              <Row>
                <Col>
                  <FormLabel htmlFor="wd-available-from" className="mb-0">
                    <strong>Available From</strong>
                  </FormLabel><br />
                  <FormControl type="date" value={"2025-05-25"} id="wd-available-from"></FormControl>
                </Col>
                <Col>
                  <FormLabel htmlFor="wd-available-until" className="mb-0">
                    <strong>Until</strong>
                  </FormLabel>
                  <FormControl type="date" value={"2025-05-25"} id="wd-available-until"></FormControl>
                </Col>
              </Row>
            </div>
          </Col>
        </FormGroup><br />
        <hr></hr>
        <FormGroup as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2">
                Cancel
              </Button>
              <Button variant="danger">
                Save
              </Button>
            </div>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
