import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://bcyclejson-production.up.railway.app/"
})
export default axiosInstance