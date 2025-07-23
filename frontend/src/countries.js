export default function getCountries() {
  return fetch("https://restcountries.com/v3.1/all?fields=name")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const countriesList = data.map((country) => country.name.common);
      return countriesList;
    })
    .catch((error) => {
      console.error("Failed fo fetch countires:", error);
      return [];
    });
}
