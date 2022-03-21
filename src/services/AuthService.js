import { LISTA_PROGETTI } from "shared/DefaultValues"

export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_APIUrl // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
    }

    loggedIn() {
        return true
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken(nameToken) {
        return LISTA_PROGETTI.find(element => element.nameToken === nameToken)?.token;
    }

    fetch(url, nameToken, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken(nameToken)
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => {
                console.log(response);
                return response.json()
            })
    }


    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

}

