export const APISettings = {
    headerParameters: {
        headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key" : "188aae29ccmsh760576013171a02p149d6djsnf9834a9451ef"
        }
    },
    coronaVirus: {
        baseUrl: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/',
        coronaStatus: {
            getWorldData: 'worldstat.php',
            getCountryData: 'latest_stat_by_iso_alpha_3.php',
            getCountryList: 'affected.php'
        }
    },
    countryCode: {
        baseUrl: 'https://restcountries.eu/rest/v2/all'
    }
}