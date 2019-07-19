import {CoderStats} from "./coderStats"
import {GetData} from "./getData";
import React from "react"
import ReactDOM from "react-dom"

class App {
    constructor(element) {
        this.$el = element

        this.$userName = this.$el.querySelector('[data-component="user-name"]').value
        this.$stats = new GetData(this.$userName)
        this.$stats.getInfo()
            .then(() => {
                const coderStats = new CoderStats({user: this.$stats.user, repos: this.$stats.repos})
                ReactDOM.render(coderStats.render(), document.getElementById("root"))
            })
    }
}

const element = document.querySelector('[data-selector="form"]')
console.log(element)
element.querySelector("button").addEventListener("click", function () {
    const app = new App(element)
})
