import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://bcyclejson-production.up.railway.app/"
    // baseURL:"http://localhost:5001/"
})
export default axiosInstance