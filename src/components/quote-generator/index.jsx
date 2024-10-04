import { FaTwitter, FaTumblr, FaQuoteLeft } from "react-icons/fa";
import { quotes } from "../../asset/randomQuotes";
import { useEffect, useState } from "react";

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [randomColor, setRandomColor] = useState("#000000");

  const generateQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const generateColor = () => {
    setRandomColor(
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    );
  };

  useEffect(() => {
    generateQuote();
    generateColor();
  }, []);

  const handleClick = () => {
    generateColor();
    generateQuote();
  };

  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center"
        style={{
          background: randomColor,
          transition: "background 1s ease",
        }}
      >
        <div className="w-[540px] bg-white rounded-sm flex justify-between flex-col p-10 gap-6">
          <div className="font-semibold flex">
            <div
              className="text-3xl font-normal text-center"
              style={{
                color: randomColor,
                transition: "color 1s ease",
              }}
            >
              <FaQuoteLeft className=" inline text-4xl pb-2" />
              {currentQuote.quote}
            </div>
          </div>

          <div
            className="w-full flex justify-end"
            style={{
              color: randomColor,
              transition: "color 1s ease",
            }}
          >
            - {currentQuote.author}
          </div>

          <div className="flex w-full justify-between">
            <div className="flex gap-1 text-white">
              <a
                className="h-10 w-10 rounded-sm  flex items-center justify-center cursor-pointer"
                style={{
                  background: randomColor,
                  transition: "background 1s ease",
                }}
                href={`https://twitter.com/intent/tweet?text=${currentQuote.quote} -${currentQuote.author}`}
                target="_"
                data-size="large"
              >
                <FaTwitter size={18} />
              </a>
              <a
                className="h-10 w-10 rounded-sm flex items-center justify-center cursor-pointer"
                style={{
                  background: randomColor,
                  transition: "background 1s ease",
                }}
                href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=example,quote&caption=${encodeURIComponent(
                  currentQuote.author
                )}&content=${encodeURIComponent(
                  currentQuote.quote
                )}&canonicalUrl=https%3A%2F%2Fyourwebsite.com`}
                target="_blank"
              >
                <FaTumblr size={18} />
              </a>
            </div>
            <button
              className="p-2 rounded-sm text-white cursor-pointer"
              onClick={handleClick}
              style={{
                background: randomColor,
                transition: "background 1s ease",
              }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
