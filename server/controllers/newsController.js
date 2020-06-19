const config = require('../config');
const httpClient = require('../util/httpClient');

exports.getNews = async (req, res, next) => {
  try {

    const params = new URLSearchParams({
      apiKey: config.NEWS_API_KEY,
      country: config.COUNTRY_CODE,
      pageSize: config.PAGE_SIZE,
      page: req.query.page,
      q: req.query.searchString,
    });
    
    const url = config.NEWS_API_URL + "?" + params;

    const result = await httpClient.get(url);
    result.pageNavigation = (result.totalResults > config.PAGE_SIZE) ? true :false;
        
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: "Critical Server Error" });
  }
};
