export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </a> 
            <br></br>Multiple Modules | Not available until April 12 at 10:00am | Due April 9 at 11:59pm | 100 pts</li>
            <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A2 - Node + Express
            </a> 
            <br></br>Multiple Modules | Not available until April 22 at 9:00am | Due April 27 at 11:59pm | 100 pts</li>
            <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A3 - Mongoose + MongoDB
            </a> 
            <br></br>Multiple Modules | Not available until May 13 at 11:30am | Due May 17 at 11:59pm | 100 pts</li>
        </ul>
      </div>
  );}
  