import { useEffect , ReactElement } from "react";
// packages dependencies
import { useCookies } from "react-cookie";
// react router
import { useNavigate , useLocation } from "react-router-dom";
// // redux
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../store/slices/userSlice";
// helpers
import callApi from "../../helpers/callApi";
// utils
import { userRoute } from "../../utils/APIRoutes";

interface Props {
    children: ReactElement
    userLogin?: boolean
}

const ProtectedRoute = ({ children , userLogin=false }: Props) => {
    const [ cookies , , removeCookies ] = useCookies();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const path : string = useLocation().pathname.toLowerCase();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await callApi().post(userRoute , {} ,{
                    headers: {
                        authorization: cookies["chat-user"]
                    }
                });

                dispatch(setUser(res?.data.user));
                userLogin && navigate("/chat");
            } catch {
                removeCookies("chat-user");
                if(userLogin === false && path === "/chat") navigate("/login");
            }
        }

        fetchUser();
    },[]);
    
    

    return (
        children
    )
}

export default ProtectedRoute;