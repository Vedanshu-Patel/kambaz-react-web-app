import { useSelector } from "react-redux";
import { enrollments } from "../Database";
import { useNavigate, useParams } from "react-router-dom";

export default function ProtectedRouteCourse({children}:{ children: any }){
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate();
    const isEnrolled = (courseId: any) => {
        return enrollments.some((enrollment: any) =>enrollment.course === courseId && currentUser._id  ===  enrollment.user);}
        
        if(isEnrolled(cid)){
            return children;
        }
        else{
            navigate(`/Kambaz/Dashboard`)
        }
    
}