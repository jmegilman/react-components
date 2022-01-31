const API_URL = "https://api.agify.io/?name=";

const fetchUser = (searchTerm = "") => {
  // returns Promise to be handled by consumer
  return window
    .fetch(`${API_URL}${searchTerm}`)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        if (!data.age) {
          return Promise.reject(new Error(`No result for name ${searchTerm}`));
        } else {
          return data;
        }
      } else {
        return Promise.reject(
          new Error(`Sorry, there was an error with the response`)
        );
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { fetchUser };
