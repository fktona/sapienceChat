import { useQuery , useMutation} from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "@/constants/baseUrl";
import { AuthState } from "@/types";
import { useAuth } from "@/context/Auth/authinfo";
import { AuthResponse } from "@/types";
import useNextRoute from "@/hooks/useNextRoute";
import { verify } from "crypto";

 const protectedRoute = ({dispatch}:{dispatch:any}) => {
    const verifyUser = useQuery({
        queryKey: ["verifyUser"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/api/auth/refresh`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data = res.data;
            const { accessToken, _id, email, verified } = data
      dispatch({
        type: 'refresh',
        payload: {
          token: accessToken,
          userId: _id,
          email: email,
          verified: verified,
        },
      })
            console.log('vu',res);
            return res.data;
        },
        retry:3
        });
        return {
            verifyUser,
        };
    }
    

export default protectedRoute;