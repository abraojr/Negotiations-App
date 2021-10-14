export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            const element = document.querySelector(selector);
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
