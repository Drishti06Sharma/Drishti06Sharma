let step = 1;

const riddle = document.getElementById("riddle");
const result = document.getElementById("result");
const heartbeat = document.getElementById("heartbeat");
const voice = document.getElementById("voice");

heartbeat.volume = 0.4;
heartbeat.play();

function typeText(text) {
    riddle.innerHTML = "";
    let i = 0;

    const typing = setInterval(() => {
        if (i < text.length) {
            riddle.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}

typeText("I scream, I chase, I hide in the dark... But I only fear losing you. What genre do you love?");

function checkAnswer() {
    let ans = document.getElementById("answer").value.toLowerCase();

    if (step === 1 && ans === "horror") {
        typeText("I steal you on weekends. I’m loud, fast, and make you feel free. What am I?");
        result.innerHTML = "Good start, Mr. Busy 😈";
        step++;
    }

    else if (step === 2 && ans === "bike") {
        typeText("Where do you want to sit with me someday, only us and silence?");
        result.innerHTML = "I’ll ride with you forever 🏍️";
        step++;
    }

    else if (step === 3 && ans === "mountains") {
        typeText("You call me Mrs. Busy... then who are YOU?");
        result.innerHTML = "Say it 😏";
        step++;
    }

    else if (step === 4 && ans === "mr busy") {
        typeText("What part of me do you love the most?");
        result.innerHTML = "Be honest 🖤";
        step++;
    }

    else if (step === 5 && ans === "eyes") {
        typeText("If I become your favorite nightmare... will I be yours? (yes/no)");
        result.innerHTML = "My heart is shaking...";
        step++;
    }

    else if (step === 6 && ans === "yes") {
        heartbeat.pause();
        voice.play();
        typeText("🩸 I AM YOURS, MR. BUSY 🖤");
        result.innerHTML = "Your nightmare. Your girl. Your forever.";
    }

    else {
        result.innerHTML = "Think about us 😈";
    }

    document.getElementById("answer").value = "";
}

