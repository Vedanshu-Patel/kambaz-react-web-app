export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
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
        </tr>
        <tr>
          <td ><label  htmlFor="wd-group">Assignment Group</label></td>
    <td align="left"><select id="wd-group" name="options">
        <option value="option1">ASSIGNMENTS</option>
        <option value="option2">QUIZZES</option>
        <option value="option3">EXAMS</option>
    </select></td>
          </tr>
          <tr>
          <label htmlFor="wd-display-grade-as">Display grade as </label>
    <select id="wd-display-grade-as" name="options">
        <option value="option1">Percentage</option>
        <option value="option2">Marks</option>
    </select>
          </tr>
          <tr>
          <tr>
          <label htmlFor="wd-submission-type">Submission Type </label>
          <select id="wd-submission-type" name="options">
        <option value="option1">Online</option>
        <option value="option2">Offline</option>
    </select>
            </tr>
            <tr>Online Entry Options</tr>
      <tr><input type="checkbox" name="interests" value="technology" /> Text Entry</tr>
    
      <tr><input type="checkbox" name="interests" value="science" /> Website URL</tr>
    
      <tr><input type="checkbox" name="interests" value="sports"/> Media Recordings</tr>
    
     <tr> <input type="checkbox" name="interests" value="music"/> Student Annotations</tr>
    
      <tr><input type="checkbox" name="interests" value="travel"/> File Uploads</tr>
    
          </tr>
          <tr>
          <label htmlFor="wd-assign-to">Assign </label>
          <text> Assign to </text><br></br>
          <input id="wd-assign-to" value="Everyone"  /><br /><br />
    
          </tr>
          <tr>
          <label htmlFor="wd-due-date">Due</label>
          
          </tr>
          <tr><td><input type="date" id="wd-due-date"  value="2024-05-13"/></td></tr>
          <tr>
          <td><label htmlFor="wd-available-from">Available From</label></td>
          <td><label htmlFor="wd-available-until">Until</label></td>
          </tr>
          <tr>
            <td><input type="date" id="wd-available-from" value="2024-05-13" /></td>
            <td><input type="date" id="wd-available-until" value="2024-05-13" /></td>
          </tr>
          <tr>
        <hr/>
        <button type="button" >Cancel</button><span> </span>  <button type="submit">Save</button>
          </tr>
      </table>
    </div>
);}
  