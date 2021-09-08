import { h } from "https://esm.run/hyperapp"

export const elements = new Proxy({}, {
    get: (_, tag) => (props, children) => h(tag, props, children)
})

export * from "https://esm.run/hyperapp"