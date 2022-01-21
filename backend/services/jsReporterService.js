const axios = require('axios').default;


class jsReporterService {

    async createPdf(jsonData) {
        return axios.post(proccess.env.BACKEND_ENDPOINT,jsonData);
    }

}

module.exports = jsReporterService;