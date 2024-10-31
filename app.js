const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "I’m on a whiskey diet. I’ve lost three days already!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the coffee file a police report? It got mugged!"
];

const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('joke');

jokeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[randomIndex];
});
