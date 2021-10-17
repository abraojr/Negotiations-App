import { IComparable } from './IComparable';
import { IPrintable } from './IPrintable.js';

export interface IModel<T> extends IPrintable, IComparable<T> {
}