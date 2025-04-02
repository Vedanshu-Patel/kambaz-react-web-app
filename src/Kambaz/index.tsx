import { Routes, Route, Navigate } from "react-router-dom"
import Account from "./Account"
import Dashboard from "./Dashboard"
import KambazNavigation from "./Navigation"
import Courses from "./Courses"
import "./styles.css";
import Session from "./Account/Session";
import { v4 as uuidv4 } from "uuid";
// import * as db from "./Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import * as courseClient from "./Courses/client";
import ProtectedRoute from "./Account/ProtectedRoute"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./Courses/People/client";
import { setEnrollments,removeStudentEnrollment ,addStudentEnrollment} from "./Courses/People/reducer";
export default function Kambaz(){
  // const [courses, setCourses] = useState<any[]>(db.courses);
  // const [course, setCourse] = useState<any>({
  //   _id: "1234", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  // });
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: uuidv4() }]);
  // };
  // const deleteCourse = (courseId: any) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // const { courses } = useSelector((state: any) => state.courseReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
          name: "New Course Name", 
          endDate: "2026-02-09", number: "New Course Number",description: "New Course Description",startDate: "2025-12-07",
          department: "D123",
      credits: 4,
  });
  
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
    console.log(status);
};
const updateCourse = async () => {
  await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  
  const fetchEnrollments = async()=>{
    try{
      const enrollments = await enrollmentsClient.findAllEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch(error){
      console.log(error);
    }
  };
  const enrollInCourse = async (user:any,course:any)=>{
    await enrollmentsClient.enrollInCourse(user._id,course._id);
    dispatch(addStudentEnrollment({course,user}));
  }
  const unenrollInCourse = async(user:any,course:any)=>{
    await enrollmentsClient.unenrollInCourse(user._id,course._id);
    dispatch(removeStudentEnrollment({course,user}));
    fetchCourses();
  }
  // useEffect(()=>{
  //   console.log("calling useeffect to update enrollments")
  //   fetchEnrollments();
  // }, [enrollments]);
  useEffect(() => {
    fetchEnrollments();
  }, []);

    return(
      <Session>
      <div id="wd-kambaz">
      {/* <table>
        <tr>
          <td valign="top"> */}
            <KambazNavigation />
          {/* </td>
          <td valign="top"> */}
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
                <ProtectedRoute><Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                enrollments={enrollments}
                enrollInCourse={enrollInCourse}
                unenrollInCourse={unenrollInCourse}
                /></ProtectedRoute>
              } />
              <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </div>
          {/* </td>
        </tr>
      </table> */}
    </div>
    </Session>
    );
}