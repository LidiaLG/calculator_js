document.addEventListener('DOMContentLoaded', function() {

    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");


    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const btnActive = button.textContent;

            if (button.id === "delete") {
                screen.textContent = "0";
                return;
            }

            if (button.id === "clear") {
                if (screen.textContent.length === 1 || screen.textContent === "404") {
                    screen.textContent = "0";
                }else {
                    screen.textContent = screen.textContent.slice(0, -1);
                }
                return;
            }

            if (button.id === "equals") {
                try {
                    screen.textContent = eval(screen.textContent);
                } catch {
                    screen.textContent = "404"
                }
                return;
            }

            if (screen.textContent === "0" || screen.textContent === "404") {
                screen.textContent = btnActive;
            }else {
                screen.textContent += btnActive;
            }
        })
    })
})