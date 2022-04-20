const result = document.getElementsByClassName('result')[0];
// const result = document.querySelector('.result');

const fetchDate = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/1-hello');
    const { data } = await axios.get('/api/1-hello'); // redirect to .netlify/functions/1-hello
    result.textContent = data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response);
    } else {
      console.error(error);
    }
  }
};

fetchDate();
