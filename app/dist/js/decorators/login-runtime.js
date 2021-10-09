export function loginRuntime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const returnMethod = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, runtime: ${(t2 - t1) / 1000} seconds`);
            returnMethod;
        };
        return descriptor;
    };
}
