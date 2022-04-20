const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/1-hello')
    const { data } = await axios.get('/api/1-hello');
    result.textContent = data;
  } catch (error) {
    result.textContent = error.response.data;
    if (axios.isAxiosError(error)) {
      console.error(error.response);
    } else {
      console.error(error);
    }
  }
};

fetchData();
