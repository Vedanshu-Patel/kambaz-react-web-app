export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br></br>
        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value={"ASSIGNMENTS"}>ASSIGNMENTS</option>
              <option value={"PROJECT"}>PROJECT</option>
              <option value={"QUIZZES"}>QUIZZES</option>
              <option value={"EXAMS"}>EXAMS</option>
            </select>
          </td>
        </tr><br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value={"Percentage"}>Percentage</option>
              <option value={"Marks"}>Marks</option>
              <option value={"Percentile"}>Percentile</option>
            </select>
          </td>
        </tr><br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value={"Online"}>Online</option>
              <option value={"Offline"}>Offline</option>
              <option value={"Hybrid"}>Hybrid</option>
            </select>
          </td>
        </tr><br></br>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <label>Online Entry Options</label><br></br>
            <input id="wd-text-entry" type="checkbox"/>
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <input id="wd-website-url" type="checkbox"/>
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <input id="wd-media-recordings" type="checkbox"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <input id="wd-student-annotation" type="checkbox"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <input id="wd-student-annotation" type="checkbox"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <input id="wd-file-upload" type="checkbox"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr><br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br></br>
            <input id="wd-assign-to" value={"Everyone"} /><br></br> 
          </td>
        </tr><br></br>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <label htmlFor="wd-due-date">Due</label><br></br> 
            <input id="wd-due-date" type="date" value={"2024-05-13"} />
          </td>
        </tr><br></br>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <label htmlFor="wd-available-from">Available from</label><br></br> 
            <input id="wd-available-from" type="date" value={"2024-05-13"} />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label><br></br> 
            <input id="wd-available-until" type="date" value={"2024-05-13"} />
          </td>
        </tr>
      </table>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <button type="button" >Cancel</button><span> </span>
        <button type="button">Save</button>
      </div>
    </div>
  );
}
