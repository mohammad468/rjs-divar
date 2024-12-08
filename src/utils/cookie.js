const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`;
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`;
};

const getCookie = (cookieName) => {
  const cookie = document.cookie;
  let cookieValue = "";
  if (cookie.includes(";")) {
    cookieValue = document.cookie
      ? document.cookie
          .split(";")
          .find((token) => token.trim().split("=")[0] === cookieName)
          .split("=")[1]
      : "";
  } else if (cookie.includes(cookieName)) {
    cookieValue = cookie.split("=")[1];
  }
  return cookieValue;
};

export { setCookie, getCookie };
