import axios from 'axios';

export const useFetchState = () => {

    const fetchData = async (url,method,body,header) => {

        let result = {
            ok: true,
            res: null,
            error: null
        }

        try {
            if (method === 'GET') {
                result.res = await axios.get(url,{headers:header});
            } else if (method === 'POST') {
                result.res = await axios.post(url, body, {headers:header});
            }
            return result;
        } catch (error) {
            result.ok = false;
            result.error = error;
            return result;
        }
    };
    return fetchData;
};
