export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let returnMethod = originalMethod.apply(this, args);
        if (typeof returnMethod === "string") {
            console.log(`@escape in action in the ${this.constructor.name} for the ${propertyKey} method`);
            returnMethod = returnMethod.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return returnMethod;
    }
    return descriptor;

}