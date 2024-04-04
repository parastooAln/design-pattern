export interface IIterator<T> {
    next: () => void;
    current: () => T;
    isDone: () => boolean
}