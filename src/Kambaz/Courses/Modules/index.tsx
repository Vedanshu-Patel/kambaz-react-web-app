export default function Modules() {
    return (
      <div>
        <div>
          <form>
            <button>Collapse All</button><span> </span>
            <button>View Progress</button><span> </span>
    <select id="options" name="options">
        <option value="option1">Publish All</option>
        <option value="option2">Publish few</option>
        <option value="option3">Unpublish</option>
        
    </select><span> </span>
            <button>+ Module</button>
          </form>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn what is front end development.</li>
                  <li className="wd-content-item">Learn the different kinds of different frontend frameworks.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn what is backend.</li>
                  <li className="wd-content-item">Learn the different kinds of different backend frameworks.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  