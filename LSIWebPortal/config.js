var details = {};
/** node server port number **/
details.portNumber = {
    "port": 8080
};

/** database connectivety  **/
details.dbConfig = {
    server: "BLRMIESPC-714",
    database: "LSIWebPortalDB",
    user: "sa",
    password: "admin@123"
};


/** Sparkfly **/
details.BASEURL_SPARKFLY = 'api-staging.sparkfly.com';

/** Prism **/
details.BASEURL_PRISM = 'https://api.prism.com/v2/';

/** Fortinate**/
details.BASEURL_FORTINET = 'http://insight.fortipresence.com/rest/';
//details.BASEURL_FORTINET = 'http://insight.kianaanalytics.com/rest/';
details.BASEURL_FORTINET_RealtimeDensityHeatMap = 'http://146.148.48.30:8080/Localization/rest/';

details.PROXY = 'http://10.9.64.4:8002';


module.exports = details;