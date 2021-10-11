export function inspect() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`--- Method: ${propertyKey}`);
            console.log(`------ parameters: ${JSON.stringify(args)}`)
            const returnMethod = originalMethod.apply(this, args);
            console.log(`------ return: ${JSON.stringify(returnMethod)}`)
            return returnMethod;
        }

        return descriptor;
    }
}