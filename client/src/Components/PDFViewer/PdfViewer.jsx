import React from "react";
import { useEffect, useState } from "react";
const [url, setUrl] = useState(null);

async function getUrl() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const url = "http://localhost:5000/api";
  const response = await axios.get(url, requestOptions);
  console.log(response.data);
  setUrl(response.data.fileUrl);
  return response.data;
}

useEffect(() => {
  getUrl();
}, []);
const PreviewPdf = () => {
  return <div>PDF</div>;
};

export default PreviewPdf;
