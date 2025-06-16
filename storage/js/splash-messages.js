const phrases = [
    `hi guys`,
    `cheese`,
    `dont type this on your keyboard: up, up, down, down, left, right, left, right, B, A, enter`,
    `im going to put bleach in your eyes`,
    `im in your walls`,
    /*{ other: 'loop', width: '200px', type: "video", src: `https://media.tenor.com/SIpmtvnEsDIAAAPo/rotating-chips.mp4` },*/
    { type: "image", width: '100%', src: `/storage/images/splash1.png` },
    { type: "image", width: '45%', src: `/storage/images/splash2.png` },
    { type: "image", width: '35%', src: `/storage/images/splash3.png` },
    { type: "image", width: '40%', src: `/storage/images/splash4.gif` },
    `i accidentally muted the teacher`,
    `my homework ate my dog`,
    `late to class again`,
    `now with MORE html`,
    `you can click me you know`,
    `omg i better not get iss for this 😭`,
    `made at school`,
    `made with javascript`,
    `thanks voucan`,
    `press ctrl+shift+q+q for hidden game`,
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
    `who can help me code`,
    `sub teacher today yay`,
    `math test tomorrow`,
    `the bell just rang`,
    `calculator? more like calc-you-later! 🥀 (i didnt make this one)`,
    `forgot my pe clothes, again.`,
    `C1?`,
    `anyone up for basketball after school?`,
    `i dont like sitting near the window during class`,
    `💀`,
    `ts ste lwk pmo ngl lke icl ts ste is so bns ddss nt gnna us ts 🥀`,
    `:D`,
    `best static website for the unemployed`,
    `nexusv2.netlify.app ay 🗣️🗣️🔥🔥`,
    `ヽ༼ ಠ益ಠ ༽ﾉ`,
    `i swear I'm paying attention`,
    `am i not the only one with 481178:44:26 hours on minecraft`,
    `i saw you got a 6 on your last test 💀`,
    `mom`,
    `(╯°□°)╯︵ ┻━┻`,
    `hehe`,
    `stop asking for red dead to me and maybe i'll think abt it 🥀`,
    `hey all nexus users`,
    `https://youtube.com/watch?v=dQw4w9WgXcQ`,
    `whoa is this a splash text`,
    `this is ur ip: {ip} dont believe me, hit ctrl + shift + i and click on console`,
    `teacher gave us too much homework 😭`,
    `downloading your passwords...`,
    `the wifi went out... again 💀`,
    `😉`,
    `hello`,
    `NUKE INCOMING!`,
    `i spent way too much time making these`,
    `bottom text`,
    `w h a t`,
    `my phone passcode is 563543 btw`,
    `reload the page NOW!`,
    `beep boop! are you a robot?`,
    `stop skidding my website 😭`,
    `oh the weather outside is rizzy, and the fire is so skibidi, and since ive gyatt to go, ohio ohio ohio`,
    `oh the weather outside is rizzy`,
    `i forgor`,
    `school uses blocker *inefective*`,
    `snuck a snack into class 😎 (tuff?)`,
    `no phones during school hour`,
    `why did you ask me to add bitlife 😭`,
    `:0`,
    `Roblox? Cringe!`,
    `i wanted free vbucks :(`,
    `what the dog doin?`,
    `powered by 20gb of ram!`,
    `Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd`,
    `if you are using Microsoft Edge, you need some help.`,
    `made in the uk`,
    `better than tortilla games`,
    `#Relatable`,
    `redbull gives u wings`,
    `as seen on tv!`,
    `how many sides does a circle have? (ans 3 🤫)`,
    `you can read btw`,
    `now with less bugs`,
    `hello, this is microsoft tech support`,
    `press ctrl+shift+q+q for free money`,
    `doot doot`,
    `{ip}`,
    `◉_◉`,
    `heres a free bare: vplaza.org/bare`,
    `the school can’t stop me now 😎 (100% certified as tuff 💪)`,
    `my homework folder is suspiciously fun`,
    `this tab self-destructs in 3… 2…`,
    `ctrl+w for secret mode`,
    `proxy speedrun any%`,
    `bored? nexus://secret`,
    `no cap this site tuff 🥀`,
    `✏️ just taking notes… on unblocking`,
    `trust me i’m a coder 🤓`,
    `this is my villain arc`,
    `my site is faster than my grades`,
    `built with html, css, javascript and tears`,
    `what are you looking at👀`,
    `stealth mode engaged`,
    `😤 built different`,
    `this site bypasses everything`,
    `🕶️ incognito mode? nah proxy mode (i didnt make ts 🥀)`,
    `is this even legal`,
    `one more tab won’t hurt`,
    `one more juice box🧃for my coding session`,
    `html never tasted so good`,
    `made with 💖 by breezly`,
    `pls unblock discord 🙏`,
    `📎hi i'm clippy and i’m stuck here`,
    `0 homework 1 tab`,
    `📎 unblocked since 2025 (how long till blocked?)`,
    `📵 definitely not off-task`,
    `html is my coping mechanism`,
    `👻 ghost tab`,
    `skibid`,
    `n e x u s`,
    `hear me out: css 🤫`,
    `1 vCPU, 4 GB RAM, 20 GB Storage`,
    `chrome://inducebrowsercrashforrealz`,
    `sup 👋`,
    `oops.. i thought that tab was muted`,
    `made on github, deployed on netlify`,
    `best proxy? lmk`,
    `nexus ≫ 55gms`, 
    `error 404: page not found`,
    `pls dont block the site 🙏`,
    `szvy central sucks`,
    `🙂 dıןɟ ʎddıןɟ ɐ pıp ǝƃɐd ǝɥʇ sdooɥʍ`,
];

const paragraph = document.getElementById('dynamicParagraph');
paragraph.style.userSelect = 'none';

let userIP = null;
let flipped = false;
let currentPhrase = null;

function setFlip(state) {
  flipped = state;
  const rotation = flipped ? "180deg" : "0deg";
  ["transform", "-ms-transform", "-webkit-transform", "-o-transform", "-moz-transform"]
    .forEach(prefix => {
      document.body.style[prefix] = `rotate(${rotation})`;
    });
}

function getRandomPhrase() {
  let phrase;
  do {
    phrase = phrases[Math.floor(Math.random() * phrases.length)];
  } while (phrase === currentPhrase);
  return phrase;
}

function changeText() {
  let randomPhrase = getRandomPhrase();
  currentPhrase = randomPhrase;

  if (typeof randomPhrase === "string") {
    if (randomPhrase.includes("{ip}")) {
      randomPhrase = randomPhrase.replace("{ip}", userIP || "fetch error");
    }
    paragraph.textContent = randomPhrase;

    if (randomPhrase === "🙂 dıןɟ ʎddıןɟ ɐ pıp ǝƃɐd ǝɥʇ sdooɥʍ") {
      setFlip(true);
    } else if (flipped) {
      // If page is flipped but phrase isn't flip phrase, reset flip
      setFlip(false);
    }
  } else if (randomPhrase.type === "image") {
    paragraph.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: ${randomPhrase.width};">`;
    if (flipped) setFlip(false); // reset flip if currently flipped
  } else if (randomPhrase.type === "video") {
    paragraph.innerHTML = `<video ${randomPhrase.other} autoplay style="max-width: ${randomPhrase.width}; height: auto;"><source src="${randomPhrase.src}" type="video/mp4"></video>`;
    if (flipped) setFlip(false);
  }
}

window.onload = async () => {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    userIP = data.ip;
    console.log("Internet protocol fetched:", userIP);
  } catch (e) {
    console.error("Failed to get IP", e);
  }
  changeText();
};

paragraph.addEventListener('click', changeText);
