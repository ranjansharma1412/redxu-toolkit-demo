import axios from 'axios';

const APIClient = async (config) => {
    try {
        let response = await axios({ ...config, timeout: 10000 });
        console.log("==response==aa=",response);
        if (response.status === 200 || response.status === "200" || response.status === 201 || response.status === "201") {
            return response.data || null;
        } else if (response.status >= 400 && response.status < 500) {
            response.status = false;
            response.message = response.data.message;
            return response;
        }

    } catch (error) {
        console.log("=APIClient===",JSON.stringify(error))
    }
}

export default APIClient