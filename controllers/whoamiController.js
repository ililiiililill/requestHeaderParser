// @desc get whoami
// @route GET /api/whoami
const getWhoami = (req, res) => {
  const host = req.ip; // ip
  const acceptLanguage = req.header('Accept-Language'); // language
  const userAgent = req.header('User-Agent'); // software

  let response = {
    ipaddress: host,
    language: acceptLanguage,
    software: userAgent
  };

  res.status(200).json(response);
};

module.exports = { getWhoami };
