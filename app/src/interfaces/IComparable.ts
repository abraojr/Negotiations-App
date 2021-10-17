export interface IComparable<T> {
    isEqual(obj: T): boolean;
}