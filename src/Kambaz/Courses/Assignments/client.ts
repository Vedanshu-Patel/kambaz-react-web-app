import axios from "axios";
// import { assignments } from "../../Database";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const findAllAssignments = async ()=>{
    const {data} = await axiosWithCredentials.get(ASSIGNMENTS_API);
    return data;
}
export const findAssignmentsForCourses = async (courseId:string)=>{
    const {data} = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return data;
}
export const createAssignment = async(assignment:any)=>{
    const response = await axiosWithCredentials.post(`${ASSIGNMENTS_API}/create`,assignment);
    return response.data;
}

export const updateAssignment = async(assignment:any)=>{
    const {data} = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`,assignment);
    return data;
}
export const deleteAssignment = async(assignmentId:string)=>{
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
}