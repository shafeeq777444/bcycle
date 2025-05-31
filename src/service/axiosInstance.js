import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"bcyclejson-production.up.railway.app"
})
export default axiosInstance