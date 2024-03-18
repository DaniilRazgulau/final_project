import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ResultMessage } from "./ResultMessage";

export type userDataType = {
    username: string
    email: string
}

export const Result = () => {
    const location = useLocation();
    const state = location?.state
    const userData = state?.userData as userDataType | undefined
    const navigate = useNavigate()


    useEffect(() => {
        if(!state){
            navigate("/cart")
        }
    },[state])

    return <>
        {userData && <ResultMessage data={userData}/>}
    </>
}