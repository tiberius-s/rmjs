const https = require("https");

const TOKEN =
  "LotmO5MBqsuYta97dvS55P4DdPVKjZvJWik2UNgu0poELBbbV3UuvG6e-AMarfQ2";
// const ACCT_ID = '7aeb0a04-b4e3-4fc0-bca6-a7be00bfd019'
// const LIST_ID = '826ea73d-5c62-4e2c-8a0e-a7bf00e92b22'

const headers = {
  Accept: "application/json",
  Authorization: `token ${TOKEN}`,
  "Content-Type": "application/json",
  "User-Agent": "rmjs"
};

// Default options
const defaultOpts = {
  hostname: "services.reachmail.net",
  port: 443,
  path: `/`,
  method: "GET",
  body: "",
  headers: headers
};

//call function
function call(options) {
  return new Promise((resolve, reject) => {
    const opts = Object.assign({}, defaultOpts, options);
    const body = JSON.stringify(opts.body);
    opts.headers["Content-Lengh"] = Buffer.byteLength(body);
    const req = https
      .request(opts, res => {
        if (res.statusCode !== 200) {
          reject(
            new Error(`code: ${res.statusCode}, msg: ${res.statusMessage}`)
          );
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", chunk => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {reject(e)}
        });
      })
      .on("error", err => reject(err));
    req.write(body);
    req.end();
  }).catch(console.log);
}

module.exports = {
  call: call
};
