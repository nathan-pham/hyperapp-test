import { app, elements } from "/js_modules/hyperapp.js"
const { div } = elements

// import components
import counter, { increment, decrement } from "./components/counter.js"
import data_display, { onfetch } from "./components/data_display.js"

// import subscriptions
import { s_keyboard } from "./subscriptions/s_keyboard.js"
import { s_fetch } from "./subscriptions/s_fetch.js"

app({
    init: { count: 0, json: { loading: true } },
    
    view: ((state) => (
        div({}, [
            counter(state),
            data_display(state)
        ])
    )),

    subscriptions: (state) => ([
        [ s_keyboard, { increment, decrement } ],
        [ s_fetch, { onfetch } ]
    ]),

    node: document.getElementById("root")
})