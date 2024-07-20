import { useEffect , ReactElement } from "react";
// packages dependencies
import { useCookies } from "react-cookie";
// react router
import { useNavigate , useLocation } from "react-router-dom";
// // redux
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../store/slices/userSlice";
import { setLoading } from "../../store/slices/loadingSlice";
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

        // dispatch(setLoading(true));
    useEffect(() => {

        const fetchUser = async () => {
            dispatch(setLoading(true));
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
                if(userLogin === false && path !== "/") navigate("/login");
            }
        }

        fetchUser();
        dispatch(setLoading(false));
    },[]);
    
    

    return (
        children
    )
}

export default ProtectedRoute;