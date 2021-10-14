export function domInjector(selector: string) {
    return function (target: any, propertyKey: string) {
        console.log(`Modifying prototype ${target.constructor.name} and adding getter for the ${propertyKey} property`);

        let element: HTMLElement;

        const getter = function () {
            if (!element) {
                element = document.querySelector(selector) as HTMLElement;
                console.log(`Fetching DOM element with ${selector} selector to inject into ${propertyKey}`);
            }
            return element
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }
}