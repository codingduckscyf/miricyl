export const fetcher = async (url, token) => {
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  });

  // By default, HTTP requests won't throw an error if they fail, but they
  // will return a false on res.ok if the status is not 200-299
  // So we can use that to throw an error.

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
