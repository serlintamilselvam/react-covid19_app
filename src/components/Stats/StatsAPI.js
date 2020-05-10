import axios from 'axios'
import { APISettings } from '../../api'
const coronaApiUrl = APISettings.coronaVirus.baseUrl
const coronaHeaders = APISettings.coronaVirus.headerParameters

class StatsAPI {

    getWorldUpdate() {
        var requesturl = coronaApiUrl + APISettings.coronaVirus.coronaStatus.getWorldData
        return axios.get(requesturl,coronaHeaders)
    }

    getDataByCountryName(countryName) {
        var requesturl = coronaApiUrl + APISettings.coronaVirus.coronaStatus.getCountryData+ '?country=' +countryName
        return axios.get(requesturl,coronaHeaders)
    }

    getCountryList() {
        var requesturl = coronaApiUrl + APISettings.coronaVirus.coronaStatus.getCountryList
        return axios.get(requesturl,coronaHeaders)
    }

}

export default StatsAPI