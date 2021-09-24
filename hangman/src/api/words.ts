const url = 'https://random-word-api.herokuapp.com'

export default {
    random: () => fetch(`${url}/word`)
}