
//Put function on making sure user uploads a json file... not pretty just did this to meet requirements.

export const uploadJson = async (fileContent) => {
  const url = 'https://json-store.p.rapidapi.com/';
  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '818816d76fmshec5f96e5bcd9cd6p121067jsn3e4c582a5cf7',
      'X-RapidAPI-Host': 'json-store.p.rapidapi.com'
    },
    body: '{ "name": "Example", "document": ' + fileContent + ' }'
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}