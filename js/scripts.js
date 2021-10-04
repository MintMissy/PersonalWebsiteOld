/* ================ Theme releated functions ================*/
const themeSwitcher = document.getElementById("theme-switch");

function clickHandler() {
    if (this.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark")
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light")
    }
}
themeSwitcher.addEventListener("click", clickHandler)

function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme !== null &&
        localStorageTheme === "dark") {
        document.body.className = localStorageTheme;

        const themeSwitch = document.getElementById("theme-switch");
        themeSwitch.checked = true;
    }
}
window.onload = checkTheme();


/* ================ Animation releated functions ================*/

// Timer used for delayed loops
const timer = ms => new Promise(res => setTimeout(res, ms));

/* Function to get typing animation on text inside of a div */
async function typingAnimation(_targeted_id, _typing_speed) {
    // Get character from targeted tag then clear text in tag
    let targeted_tag = document.getElementById(_targeted_id);
    let characters = targeted_tag.innerHTML;
    targeted_tag.innerHTML = "";

    // Variable for excluding typing nested tags with delay
    let inside_of_tags = 0;

    // Add characters with type speed into tag (nested tags excluded) 
    for (let i = 0; i < characters.length; i++) {
        console.log(inside_of_tags);
        // Detect nested tags
        if (characters[i] === "<") {
            inside_of_tags += 1;
        }

        // If in nested tag add text until tag ends
        if (inside_of_tags > 0) {
            if (characters[i] === ">") {
                inside_of_tags -= 1;
            } else {
                targeted_tag.innerHTML += characters[i];
                continue;
            }
        }

        targeted_tag.innerHTML += characters[i];
        await timer(_typing_speed);
    }
}
window.onload = typingAnimation("home-quote", 75);