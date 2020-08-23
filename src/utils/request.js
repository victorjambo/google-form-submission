const request = payload => {
  const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-gI7stXjAPh7diDJKI8pSJE5GQQhSujCdg7bbDgGC9rT0fg/formResponse';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();

  payload.forEach(element => {
    const { name, value } = element;
    urlencoded.append(name, value);
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  return fetch(url, requestOptions);
};

export default request;
