export async function get(url: string, route: string, initalHeaders: Headers) {
    const headers = new Headers({
        "Content-Type": "application/json",
        ...initalHeaders,
        // "bearer"
    })
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `GET request has been failed,url:${url} rout:${route} and `,
        );
    }

    const data = await response.json();

    return data;
}

// export function post(){

// }

// export function put(){

// }
// export function deleteRestApi(){

// }
