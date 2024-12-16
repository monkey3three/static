document.addEventListener("DOMContentLoaded", function() {
    const texts = [
    "Bringing your adventure to life.",
    "Join our community on Discord!",
    "Made, hosted, and created with care.",
    "Preparing for a smooth journey!",
    "Hang tight, we're almost ready!",
    "Crafting something special for you!",
    "Just a moment, please wait!",
    "Loading your personalized experience.",
    "Launching great content soon!",
    "Getting everything set up!",
    "Making sure everything is just right!",
    "Unblocking your experience for smooth access!",
    "Loading your custom settings!",
    "Just a moment, hang tight!",
    "Getting everything in place for you!",
    "Almost there, stay tuned!",
    "Loading the latest updates!",
    "Hang tight, enjoy the wait!",
    "Crafting your unique journey.",
    "Almost ready to dive in!",
    "Creating an enjoyable experience!",
    "Getting ready for your fun!",
    "Hang on, something special is in progress!",
    "Just a moment, good things are coming!"
];

    const randomText = texts[Math.floor(Math.random() * texts.length)];

    const randomTextElement = document.createElement('p');
    randomTextElement.textContent = randomText;
    randomTextElement.id = 'random-text';

    const loader = document.getElementById('loader');
    loader.appendChild(randomTextElement);

    window.addEventListener('load', function() {
        setTimeout(function() {
            const loader = document.getElementById('loader');
            loader.classList.add('fade-out');

            loader.addEventListener('transitionend', function() {
                loader.style.display = 'none';
                document.getElementById('content').style.display = 'block';
            });
        }, 1000);
    });
});
