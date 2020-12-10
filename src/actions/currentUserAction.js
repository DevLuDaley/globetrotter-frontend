//synchronous action creators 
export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        // payload: user
        user
    }
}
 
//asynchronous action creators 
export const login = credentials => {
    console.log('The value of credentials equals => ', credentials)
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials) //({username:"cpdundon", password:"password"})

        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert("Error #1 - fly in the ointment", user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        // ! remember to investigate why the catch is being triggered
        .catch(console.log("actions/currentUser failing on or around line 30"),
            // alert("Error #2 - something isn't connected properly")
            )
    }
}
//  currentUser; 