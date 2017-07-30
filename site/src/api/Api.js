const API = process.env.API || "http://localhost:3001";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const json = res => res.json();

const call = (endpoint, options) => {
  return fetch(`${API}${endpoint}`, options)
    .then(json)
    .then(data => data)
    .catch(console.log);
};

const get = endpoint => call(endpoint, { headers: headers });

const post = (endpoint, data) => {
  const payload = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };
  return call(`${API}${endpoint}`, payload);
};

const put = (endpoint, data) => {
  const payload = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data)
  };
  return call(`${API}${endpoint}`, payload);
};

const del = endpoint => {
  const payload = {
    method: "DELETE",
    headers: headers
  };
  return call(`${API}/${endpoint}`, payload);
};

class Api {
  static getServer = () =>  API;

  static get = endpoint => get(endpoint);

  static post = (endpoint, options) => post(endpoint, options);

  static put = (endpoint, options) => put(endpoint, options);

  static del = endpoint => del(endpoint);
}

export default Api;
