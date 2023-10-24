import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [err, setErr] = useState();
    const [isLoading, setLoading] = useState(false);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${url}&client_id=${process.env.REACT_APP_KEY}`)
            setResponse(res.data.results)
            console.log()
        } catch (error) {
            console.log(error);
            setErr(error);
        } finally {
            setLoading(false)
        }
        
    }
    useEffect(() => {
        fetchData(param);
    }, [param])
    
    return {
        response,
        err,
        isLoading,
        fetchData,
        
    } 
    
}
export default useAxios;