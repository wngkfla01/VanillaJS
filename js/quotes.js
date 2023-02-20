const quotes = [
    {
        quote: "Look inside yourself, you’re more than what you have become.",
    },
    {
        quote: "Oh, yes, the past can hurt. But the way I see it,You can either run from it or learn from it.",
    },
    {
        quote: "Life is a journey to be experienced not a problem to be solved.",
    },
    {
        quote: "You can’t love someone if you don’t love yourself first.",
    },
    {
        quote: "To be happy, we must not be too concerned with others.",
    },
    {
        quote: "Happiness depends upon ourselves.",
    },
    {
        quote: "Do not be embarrassed by your failures, learn from them and start again.",
    },
    {
        quote: "We acquire the strength we have overcome.",
    },
    {
        quote: "Where there is no struggle, there is no strength.",
    },
    {
        quote: "Lighten up on yourself. No one is perfect. Gently accept your humanness.",
    },
];

const quote = document.querySelector("#quote span:first-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todaysQuote.quote;
