import { text, elements } from "/js_modules/hyperapp.js"
const { h1, div, button } = elements

// effects
const effect = (dispatch, message) => alert(message)

// action state modifiers
export const increment = (state) => ([
    { ...state, count: state.count + 1 },
    state.count + 1 == 13 && [ effect, "13 is unlucky!" ]
])

export const decrement = (state) => ({ 
    ...state, count: Math.max(state.count - 1, 0)
})

// export component
export default ({ count }) => (
    div({}, [
        h1({}, text(`count: ${ count }`)),
        button({ onclick: decrement, disabled: count < 1 }, text("-")),
        button({ onclick: increment }, text("+"))
    ])
)