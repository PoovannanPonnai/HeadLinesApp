const fetch = require('node-fetch');
const defaultHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};
const get = async (url, data, headers=defaultHeader) => {
  const res = await fetch(url, { method: "GET", headers });
  return await res.json();
};

module.exports = {
  get
};
