export function loginRuntime() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
