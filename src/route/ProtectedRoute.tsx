/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux"
import { selectAuth } from "../features/authSlice"
import LoadingRedirect from "../components/LoadingRedirect"


const ProtectedRoute = ({children}: {children:any}) => {
    const {token} = useSelector(selectAuth)

    return (
        token
            ? children
            : <LoadingRedirect />
    )
}
export default ProtectedRoute