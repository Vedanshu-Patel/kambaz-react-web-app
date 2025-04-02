import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const enrollInCourse = async (userId: any,courseId: any)=>{
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};
export const findAllEnrollments = async ()=>{
    const {data} = await axiosWithCredentials.get(ENROLLMENTS_API);
    return data;
};
export const unenrollInCourse = async (userId: any,courseId: any)=>{
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};