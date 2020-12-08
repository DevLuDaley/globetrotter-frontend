//synchronous action creators 
export const currentUser = () => {
    return {
        type: "SET_CURRENT_USER",
        payload: "user"
    }
}
 
//asynchronous action creators 
export const login = credentials => {
    const url = 'http://localhost:3001/'
    return dispatch => {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username:"cpdundon", password:"password"})

        })
    }
}
//  currentUser; 