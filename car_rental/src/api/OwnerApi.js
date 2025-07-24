import axios from 'axios';
import { API } from '../components/LoginSignup/config';
import { json } from 'react-router-dom';

const fetchData = async () => {
    try{
        const res = await axios.get("http://localhost:8000/allowner")
        return res.data.json
    }catch(error){
        console.error("error fetching owners:",error)
        return []
    }
}

export default fetchData