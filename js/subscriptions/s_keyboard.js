export const s_keyboard = (dispatch, { increment, decrement }) => {
    const handler = ({ key }) => {
        if(key == "ArrowUp") { dispatch(increment) }
        if(key == "ArrowDown") { dispatch(decrement) }
    }

    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
}