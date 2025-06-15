const phrases = [
    `hi guys`,
    `cheese`,
    `dont type this on your keyboard: up, up, down, down, left, right, left, right, B, A, enter`,
    `im going to put bleach in your eyes`,
    `im in your walls`,
    /*{ other: 'loop', width: '200px', type: "video", src: `https://media.tenor.com/SIpmtvnEsDIAAAPo/rotating-chips.mp4` },*/
    { type: "image", width: '100%', src: `/storage/images/splash1.png` },
    { type: "image", width: '45%', src: `/storage/images/splash2.png` },
    { type: "image", width: '25%', src: `/storage/images/splash3.png` },
    /*{ type: "image", width: '400px', src: `https://c.tenor.com/9MVlipGuNioAAAAC/tenor.gif` },*/
    `i accidentally muted the teacher`,
    `my homework ate my dog`,
    `late to class again`,
    `now with MORE html`,
    `omg i better not get iss for this 😭`,
    `made at school`,
    `made with javascript`,
    `thanks voucan`,
    `press ctrl+shift+q+q for free money`,
    `school. is. bad`,
    `school lunch is mid`,
    `i dare you to rub a magnet on the side of your chromebook`,
    `bruh`,
    `we should be able to play football ⚽`,
    `index.html`,
    `fortnite is cringe`,
    `help`,
    `ts not tuff 🥀😭`,
    `sleep is for the weak 🥀`,
    `i forgot to mute`,
    `someone stole my mouse`,
    `why is the fan so loud`,
    `chromebooks suck`,
    `do not replace nexus://new-tab-page with nexus://secret 🤫`,
    `this is definitely schoolwork`,
    `school says no fun`,
    `how many times have u clicked it`,
    `deployed on netlify`,
    `can someone help me find a bare`,
    `splash-messages.js`,
    `static proxy 😱 those who know 💀`,
    `who votes yt should be unblocked`,
];

const paragraph = document.getElementById('dynamicParagraph');

paragraph.style.userSelect = 'none';

function changeText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    if (typeof randomPhrase === "string") {
        paragraph.textContent = randomPhrase;
    } else if (randomPhrase.type === "image") {
        paragraph.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: ${randomPhrase.width};">`;
    } else if (randomPhrase.type === "video") {
        paragraph.innerHTML = `<video ${randomPhrase.other} autoplay style="max-width: ${randomPhrase.width}; height: auto; "> <source src="${randomPhrase.src}" type="video/mp4"> </video>`;
    }
}

paragraph.addEventListener('click', changeText);
window.onload = changeText;
