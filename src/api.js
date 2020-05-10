export const APISettings = {
    coronaVirus: {
        baseUrl: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/',
        headerParameters: {
            headers: {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key" : "188aae29ccmsh760576013171a02p149d6djsnf9834a9451ef"
            }
        },
        coronaStatus: {
            getWorldData: 'worldstat.php',
            getCountryData: 'latest_stat_by_country.php',
            getCountryList: 'affected.php'
        }
    }
}