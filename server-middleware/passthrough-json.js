// const bodyParser = require("body-parser");
// const app = require("express")();

// app.use(bodyParser.json());
// app.all("/getJSON", (req, res) => {
//     res.json({ data: "data" });
// });

// module.exports = app;

// some-api-endpoint.js
import axios from "axios";

// export default {
//     path: '/endpoint',
//     handler: async (req, res) => {
//         // const { data } = await axios.get('some-request')
//         res.json({ dd: "dd"})
//     }
// }
// export default function(context) {
//     context.userAgent = process.server
//         ? context.req.headers["user-agent"]
//         : navigator.userAgent;
// }
export default {
    path: "/endpoint",
    async handler(req, res, context) {
        let pwbApiMainHost =
            process.env.PWB_API_MAIN_HOST || "http://demo.lvh.me:3000";
        let apiUrl = `${pwbApiMainHost}/${req.url}`;
        //"http://demo.lvh.me:3000/api_public/v4/en/component_data/listing/ss"

        // const body = [];
        // req.on("data", chunk => {
        //     body.push(chunk);
        // });
        // req.on("end", () => {
        //     const event = JSON.parse(body);
        //     console.log(event);
        // });
        const { data } = await axios.get(apiUrl);
        let jsonToSend = {
          url: req.url,
          pwbApiMainHost: pwbApiMainHost,
          original: data,
        }
        // data.pwbApiMainHost = pwbApiMainHost;
        // res.json({ dd: "dd" });
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(JSON.stringify(jsonToSend));
        res.end();

        // res.setHeader("Content-Type", "text/html");
        // res.end(data);
    }
};
