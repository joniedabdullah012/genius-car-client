export const setAuthToken = (user) => {

    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('https://genious-car-server-seven.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'


        },

        body: JSON.stringify(currentUser)


    })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('genious token', data.token)

            // navigate(from, { replace: true });


        })





}