const loadData = (data) => {
  const url = `https://worldtimeapi.org/api/timezone/${data}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.datetime));
};
const displayData = (data) => {
  // console.log(data.error);
  console.log(data);
  const Data = data;

  const time = Data.split("T")[1].slice(0, -12);
  console.log(time);

  const min = time.slice(2, -1);

  const uniTime = time.slice(0, -7);

  const hour = uniTime > 12 ? uniTime - 12 : uniTime;
  
//   const date = new Date(data); // convert UTC datetime string to local time
//   const time = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: 'numeric', second: 'numeric', hour12: true}); // format time in 12-hour format
//   console.log(time);
  document.getElementById("time").innerHTML = `${hour < 1 ?parseInt(hour) +12 : hour}${min}`;
//   document.getElementById("time").innerHTML = time;
};
// displayData()
// loadData()

const loadCountryName = () => {
  fetch("https://worldtimeapi.org/api/timezone/")
    .then((res) => res.json())
    .then((data) => displayCountryName(data));
};
const countryList = document.getElementById("country-list");
const displayCountryName = (data) => {
  for (const country of data) {
    // console.log(country)

    //   console.log(countryList);
    countryList.innerHTML += `<option><h4  id="country-name">${country}</h4></option>`;
  }
};
function select() {
  const currentCountry = countryList.value;
  console.log(currentCountry);
  loadData(currentCountry);

}
setInterval(select, 1000);
loadCountryName();
