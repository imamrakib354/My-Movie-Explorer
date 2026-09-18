export const getShows = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");

  const data = await response.json();

  return data;
};

export const searchShows = async (query) => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );

  const data = await response.json();

  return data;
};