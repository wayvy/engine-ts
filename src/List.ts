class List<T> {
    list: Array<T> = [];

    add(input: T) {
        this.list.push(input);
    }
}

export { List }