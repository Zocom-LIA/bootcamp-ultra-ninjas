import "./style.scss";

/* Import dependencies */
import { useState } from "react";
import { Button } from "@zocom/button";
import { useData, ChuckNorrisResponse } from "..";

<<<<<<< Updated upstream
import { Header } from "@zocom/header";

=======
>>>>>>> Stashed changes
export const LandingPage = () => {
  const [quote, setQuote] = useState<ChuckNorrisResponse | null>(null);

  const { fetchQuote } = useData();

  async function handleFetchQuote() {
    const quote = await fetchQuote();
    setQuote(quote ? quote : null);
  }

  return (
    <main className="landing-page">
<<<<<<< Updated upstream
      <Header />
      <h1 className="quote">{quote?.value}</h1>
      <Button onClick={() => handleFetchQuote()}>Fetch a quote!</Button>
=======
        <h1 className='quote'>{quote?.value}</h1>
        <Button onClick={() => handleFetchQuote()}>Fetch a quote!</Button>
>>>>>>> Stashed changes
    </main>
  );
};
