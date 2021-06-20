const err = require("restify-errors");
const { nanoid } = require("nanoid");

const URL = require("../db/models/url");

module.exports = (server) => {
  server.post("/bytes/:sourceUrl", async (req, res, next) => {
    const sourceUrl = req.params.sourceUrl;
    const shortCode = nanoid(8);

    try {
      let url = await URL.findOne({ sourceURL: sourceUrl });

      if (url) {
        return res.send(url.byteCode);
      } else {
        url = new URL({
          sourceURL: sourceUrl,
          byteCode: shortCode,
        });
        await url.save();
        return res.send(url.byteCode);
      }
    } catch (err) {
      console.error(err.message);
      return res.send(err.message);
    }
  });

  server.get("/:byteCode", async (req, res, next) => {
    const byteCode = req.params.byteCode;
    let url = await URL.findOne({ byteCode: byteCode });
    if (url){
      return res.send(url.sourceURL);
    }else{
      return res.send("No URL Match.")
    }
  })
};
