import axios from 'axios'
import { APISettings } from '../../api'
const coronaApiUrl = APISettings.coronaVirus.baseUrl
const headers = APISettings.headerParameters
const iSBCodeUrl = APISettings.countryCode.baseUrl

class StatsAPI {

    getWorldUpdate() {
        var requesturl = coronaApiUrl + APISettings.coronaVirus.coronaStatus.getWorldData
        return axios.get(requesturl,headers)
    }

    getDataByCountryName(countryName) {
        var requesturl = coronaApiUrl + APISettings.coronaVirus.coronaStatus.getCountryData+ '?alpha3=' +countryName
        return axios.get(requesturl,headers)
    }

    getCountryList() {
        return axios.get(iSBCodeUrl)
    }

}

export default StatsAPI