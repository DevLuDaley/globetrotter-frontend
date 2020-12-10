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

export const getCurrentUser = credentials => {
    console.log('The value of credentials equals => ', credentials)
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/get_current_user', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert("Error #1 - fly in the ointment", response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                // dispatch(getMyTrips(response.data))
            }
        })
        // ! remember to investigate why the catch is being triggered
        .catch(console.log("actions/currentUserAction => getCurrentUser failing on or around line 57"),
             alert("getCurrentUser Error #2 - something isn't connected properly")
            )
    }
}