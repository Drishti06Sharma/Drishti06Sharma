let step = 1;

function checkAnswer() {
    const ans = document.getElementById("answer").value.toLowerCase();
    const riddle = document.getElementById("riddle");
    const result = document.getElementById("result");

    if (step === 1 && ans === "a house") {
        riddle.innerHTML = 
        "I speak without a mouth and hear without ears. What am I?";
        result.innerHTML = "Correct... 🩸";
        step++;
    }

    else if (step === 2 && ans === "echo") {
        riddle.innerHTML = 
        "The more you take, the more you leave behind. What am I?";
        result.innerHTML = "You're good at this... 🖤";
        step++;
    }

    else if (step === 3 && ans === "footsteps") {
        riddle.innerHTML = 
        "One last question... Will you be my Valentine? (yes/no)";
        result.innerHTML = "Final door unlocked... ❤️";
        step++;
    }

    else if (step === 4 && ans === "yes") {
        riddle.innerHTML = "🖤 YOU ARE MY VALENTINE FOREVER ❤️";
        result.innerHTML = "I knew you'd say yes 😍";
    }

    else {
        result.innerHTML = "Wrong answer... try again 😈";
    }

    document.getElementById("answer").value = "";
}
