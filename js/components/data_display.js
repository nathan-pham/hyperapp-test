import { text, elements } from "/js_modules/hyperapp.js"
const { pre } = elements

// action state modifiers
export const onfetch = (state, json) =>  ({ ...state, json })

// export component
export default ({ json }) => (
    pre({}, text(json.loading
        ? "fetching data..."
        : JSON.stringify(json, null, 2) 
    ))
)