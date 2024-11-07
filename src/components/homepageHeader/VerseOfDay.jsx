import { useState, useEffect } from "react";
import "../homepageHeader/HomepageHeader.css";

const VerseOfDay = () => {
  const [verse, setVerse] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    fetch(
      "https://beta.ourmanna.com/api/v1/get?format=json&order=daily",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const verseText = data.verse.details.text;
        const verseReference = data.verse.details.reference;
        setVerse(verseText);
        setReference(verseReference);
      })
      .catch((error) => {
        console.error("error fetching verse", error);
      });
  }, []);

  return (
    <>
      <h4 id="verse-of-day">{verse}</h4>
      <h6 id="verse-reference">{reference}</h6>
    </>
  );
};

export default VerseOfDay;
