export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Method: ${propertyKey}`);
            console.log(`------ parameters: ${JSON.stringify(args)}`);
            const returnMethod = originalMethod.apply(this, args);
            console.log(`------ return: ${JSON.stringify(returnMethod)}`);
            return returnMethod;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map