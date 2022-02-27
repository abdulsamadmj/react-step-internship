import axios from "axios";
import { useState, useEffect } from "react";


const axiosObj = axios.create({
  baseURL: "https://cataas.com/",
  params: { json: true }
});

//CAN USE fetch() but to get json use json()

const Cat = () => {
  const [imageURL, setImageURL] = useState(null);

  async function fetchURL() {
    console.log("button click");
    const response = await axiosObj.get("/cat");
    setImageURL("https://cataas.com/" + response.data.url);
  }

  useEffect(async () => {
    await fetchURL();
  }, []);

  // ^ useEffect[] run once when a state change occurs.

  return (
    <div>
      <img src={imageURL} alt="cat" /><br />
      <button onClick={fetchURL}>Next</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Random Cat</h1>
      <Cat />
    </div>
  );
}

export default App;
