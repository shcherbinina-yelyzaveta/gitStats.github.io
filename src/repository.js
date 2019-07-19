export class Repository {
    static fetch(url) {
        return fetch(url)
            .then((response) => response.json())
    }
}
