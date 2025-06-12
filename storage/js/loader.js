document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const h1Element = document.getElementById('ld');

    const headings = [
        "limited edition!",
        "90% bug free",
        "this assignment is not it",
        "shoutout to the school wifi",
        "nexus v2 ayy 🗣️🗣️🔥🔥",
        "javascript is pain",
        "bring back flash games",
        "ctrl+w for a surprise",
        "proxy speedrun any%",
        "say hi to your seat buddy",
        "use at your own risk",
        "ts ste lwk pmo ngl lke icl ts ste is so bns ddss nt gnna us ts",
        "my chromebook is on life support",
        "instead of handing them a freaking packet, yo 😐",
        "is it lunch yet",
        "not my final project (nexus v3 2026)",
        "\"if gravity can pull an apple, then you can pull a bad bih too\". - isacc newton",
        "best website for the unemployed",
        "w's in chat for this website",
        "why is everything blocked",
        "quick hide it, teachers coming 😱",
        "404 motivation not found",
        "my chromebook is melting",
        "snacks over school",
        "miss this is not what it looks like",
        "probably against school tos",
        "this page is a decoy",
        "this is nexus peak education",
        "alt+f4 fixes everything",
        "trust the process",
        "more stuff coming soon",
        "i miss coolmath games",
        "still better than the school site",
        "im renaming to ggc"
    ];

    if (loadingScreen) {
        document.body.classList.add('loading');

        if (h1Element) {
            h1Element.textContent = headings[Math.floor(Math.random() * headings.length)];
        }

        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 500);
            }, 500);
        });
    } else {
        console.error('loading screen not found?????');
    }
});
