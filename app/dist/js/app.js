import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error("The application could not be initialized. Check if the form exists.");
}
const importButton = document.querySelector("#import-button");
if (importButton) {
    importButton.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error("Import button not found!");
}
//# sourceMappingURL=app.js.map