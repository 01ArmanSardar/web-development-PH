import axios from "axios";


const AxiosInstance=axios.create(
    {
        baseURL:'http://localhost:5000/',
        withCredentials:true
    }

)

const useSecureAxios = () => {
    return AxiosInstance
};

export default useSecureAxios;