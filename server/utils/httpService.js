const https = require("https");

const TOKEN =
  "LotmO5MBqsuYta97dvS55P4DdPVKjZvJWik2UNgu0poELBbbV3UuvG6e-AMarfQ2";
// const ACCT_ID = '7aeb0a04-b4e3-4fc0-bca6-a7be00bfd019'

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `token ${TOKEN}`
};

// Default options
const defaultOpts = {
  hostname: "services.reachmail.net",
  port: 443,
  path: `/`,
  method: "GET",
  headers: headers
};

//call function
function call(options) {
  return new Promise((resolve, reject) => {
    const req = https
      .request(Object.assign({}, defaultOpts, options), res => {
        if (res.statusCode !== 200) {
          return new Error("response status code not 200");
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", chunk => (data += chunk));
        res.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", err => reject(err));
    req.end();
  }).catch(console.log);
}

module.exports = {
  call: call
};
