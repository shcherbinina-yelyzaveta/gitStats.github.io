export class GetData {
    constructor(username) {
        this.url = "https://api.github.com/users/" + username
        this.user = {}
        this.repos = {}
    }

    getInfo() {
        return this.getUserInfo()
            .then(() => {
                return this.getReposInfo()
            })
            .then(() => {
                return {user: this.user, repos: this.repos}
            })
    }

    getUserInfo() {
        return fetch(this.url)
            .then((response) => response.json())
            .then((response) => {
                this.user = response;
            })
    }

    getReposInfo() {
        return fetch(this.url + "/repos")
            .then((response) => response.json())
            .then((response) => {
                this.repos = response;
            })
    }
}