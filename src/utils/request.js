const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const request = payload => {
  // const prodUrl = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSeX9qqQjQYPiksfXUGbXupZHHOwAZW4SUxdmAWnxit2xwlxaw/formResponse';
  const andelaurl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe8k48BeX9yAkqkAO5kU7ehfFnuzB5_Jj7A5xF7WuOZQfzebA/formResponse';
  const devUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIHD9S64Ja6UpSYwV56XAI3zyHU-RuXFpIT0eFe2QnTT921A/formResponse';
  const url = isDev ? devUrl : andelaurl; // TODO Error: Sorry, unable to open the file at this time

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
