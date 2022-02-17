export default function Fetcher(
  action,
  data = {},
  method = "GET",
  url_base = "https://fakestoreapi.com/"
) {
  // const api_vers = '/v1/';

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const restURL = new URL(action, url_base);

  if (method.toLocaleLowerCase() === "get") {
    Object.keys(data).forEach((key) =>
      restURL.searchParams.append(key, data[key])
    );
  } else if (method.toLocaleLowerCase() === "post") {
    options.body = data;
  }

  return new Promise(function (resolve, eject) {
    fetch(restURL, options)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        eject(error);
      });
  });
}
