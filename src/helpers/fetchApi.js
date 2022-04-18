const baseUrl = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const fetchApi = async (endpoint, data, method = "GET") => {
  const url = baseUrl + endpoint + `?token=${token}`;

  if (method === "GET") {
    const resp = await fetch(url, {
      method,
      headers: {
        token: token,
      },
    });
    const body = await resp.json();
    return body;
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        token: token,
      },
      body: JSON.stringify(data),
    });
    const body = await resp.json();
    return body;
  }
};
