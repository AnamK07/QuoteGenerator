
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url =
    "https://motivational-spark-api.vercel.app/api/quotes/random";

async function getquote() {
    try {
        const response = await fetch(api_url);

        console.log("Status:", response.status);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        console.log("API Response:", data);

        quote.innerHTML = `"${data.quote}"`;
        author.innerHTML = ` ${data.author}`;

    } catch (error) {
        console.error("Fetch Error:", error);

        quote.innerHTML = "Failed to load quote";
        author.innerHTML = "";
    }
}

getquote();

function message() {
    const text = `"${quote.innerText}" — ${author.innerText}`;
    const phoneNumber = "9657373987";

    const whatsappUrl =
        "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text);

    window.open(whatsappUrl, "_blank", "Message Window", "width=600", "height=200");
}

