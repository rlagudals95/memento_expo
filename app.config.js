module.exports = () => {
  if (process.env.MY_ENVIRONMENT === "production") {
    return {
      API_URL:
        "http://mementomori.prod.s3-website.ap-northeast-2.amazonaws.com/",
    };
  } else {
    return {
      API_URL: null,
    };
  }
};
