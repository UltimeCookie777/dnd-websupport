async function register() {


    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const response = await fetch('127.0.0.1/regsiter', {
        method: "POST",
        body: JSON.stringify
    })

}