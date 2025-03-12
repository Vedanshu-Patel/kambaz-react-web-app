import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
// import { v4 as uuidv4 } from "uuid";
const initialState = {
    courses:courses,
    // course:{
    //     name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    // }
};
const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers:{
        // addCourse:(state,action) =>{
        //     state.courses = [...state.courses,{...action.payload,_id: uuidv4()}];
        //     state.course={
        //         name: "New Course", number: "New Number",
        //         startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
        //     }
        // },
        // updateCourse:(state,action)=>{
        //     state.courses = (state.courses = state.courses.map((c) =>
        //         c._id === action.payload._id ? action.payload : c
        //     ));
        //     state.course={
        //         name: "New Course", number: "New Number",
        //         startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
        //     }
        // },
        // deleteCourse:(state,action)=>{
        //     state.courses = state.courses.filter(
        //         (c) => c._id !== action.payload
        //     );
        // },
        // setCourse:(state,action)=>{
        //     state.course=action.payload;
        // }
        addCourse:(state,{payload:course})=>{
            state.courses = [...state.courses, course] as any;
        },
        updateCourse: (state, { payload :course}) => {
            state.courses = state.courses.map((c) => {
                    if ( course._id===  c._id) {
                        return course;
                    } else {
                        return c;}})
        },
        deleteCourse: (state, { payload : courseId }) => {
            state.courses =  (state.courses.filter((course) => courseId  !== course._id));
        }

    }
})
export const {addCourse,updateCourse,deleteCourse} =
courseSlice.actions;
export default courseSlice.reducer;