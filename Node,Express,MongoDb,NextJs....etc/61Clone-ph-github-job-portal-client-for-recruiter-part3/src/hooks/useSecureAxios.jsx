import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const AxiosInstance = axios.create(
    {
        baseURL: 'http://localhost:5000/',
        withCredentials: true
    }

)


const useSecureAxios = () => {
    const { signOutUser } = useAuth()
    const navigate = useNavigate
    useEffect(() => {
        AxiosInstance.interceptors.response.use(response => {
            return response
        },
            err => {
                console.log('error in interceptors', err);
                if (err.status === 401 || err.status === 403) {

                    console.log('need to logout the user');
                    signOutUser()
                        .then(() => {
                            console.log('log out user');
                            navigate('/signIn')
                        })
                        .catch(err => console.log(err))
                }
                return Promise.reject(err);
            }
        )
    }, [])



    return AxiosInstance
};

export default useSecureAxios;