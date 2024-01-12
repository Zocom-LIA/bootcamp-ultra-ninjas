export async function APIGet(endpoint:string) {

    const response:Response = await fetch(import.meta.env.API_URL + endpoint, {
        method: 'GET',
        headers: {
            'content-type': "application/json"
        },
    })
    // .then((response) => {

    //     if(!response.ok) {
    //         throw new Error("Connection issue");
    //     }
    // });
    const data = response.json();
    return data;
}

export async function APIPost(endpoint:string, body:object) {

    const response:Response = await fetch(import.meta.env.API_URL + endpoint, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(body)
    })
    // .then((response) => {

    //     if(!response.ok) {
    //         throw new Error("Connection issue");
    //     }
    // });
    const data = response.json();
    return data;
}

export async function APIPut(endpoint:string, body:object) {

    const response:Response = await fetch(import.meta.env.API_URL + endpoint, {
        method: 'PUT',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(body)
    })
    // .then((response) => {

    //     if(!response.ok) {
    //         throw new Error("Connection issue");
    //     }
    // });
    const data = response.json();
    return data;
}

export async function APIDelete(endpoint:string) {

    const response:Response = await fetch(import.meta.env.API_URL + endpoint, {
        method: 'DELETE',
        headers: {
            'content-type': "application/json"
        }
    })
    // .then((response) => {

    //     if(!response.ok) {
    //         throw new Error("Connection issue");
    //     }
    // });
    const data = response.json();
    return data;
}