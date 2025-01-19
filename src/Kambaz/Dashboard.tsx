import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS3241 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Data Scientist  </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
           <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS7632 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning Engineer  </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
           <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS7436 NLP </h5>
              <p className="wd-dashboard-course-title">
                Data Scientist  </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
           <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS5362 App development</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Application developer  </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
           <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS2437 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Cloud Architect  </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
           <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS7362 Cyber Security </h5>
              <p className="wd-dashboard-course-title">
                Security Specialist  </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
      </div>
    </div>
);}
