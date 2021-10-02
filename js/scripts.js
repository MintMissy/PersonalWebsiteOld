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
