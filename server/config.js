const envy = require("envy");
const env = envy();

module.exports = {
  SERVER_PORT: env.serverPort,
  NEWS_API_URL: env.newsApiUrl,
  NEWS_API_KEY: env.newsApiKey,
  PAGE_SIZE: env.pageSize,
  COUNTRY_CODE: env.countryCode,
  CLIENT_URL: env.clientUrl,
};
