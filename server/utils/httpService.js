const https = require("https");

const TOKEN =
  "LotmO5MBqsuYta97dvS55P4DdPVKjZvJWik2UNgu0poELBbbV3UuvG6e-AMarfQ2";


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
          } catch (e) {
            reject(e);
          }
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
