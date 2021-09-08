const API_ENDPOINT = "https://random-data-api.com/api/cannabis/random_cannabis?size=10"

export const s_fetch = (dispatch, { onfetch }) => {
    fetch(API_ENDPOINT)
        .then(res => res.json())
        .then(json => dispatch(onfetch, json))
}