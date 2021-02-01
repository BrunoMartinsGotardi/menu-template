export interface StorageServiceInterface<T> {

    getFromStorage() : Array<T>;
    setToStorage(allData : Array<T>);
}