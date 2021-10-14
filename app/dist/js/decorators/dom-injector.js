export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modifying prototype ${target.constructor.name} and adding getter for the ${propertyKey} property`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Fetching DOM element with ${selector} selector to inject into ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
