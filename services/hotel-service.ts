export async function get<T>(url: string, route: string, initalHeaders?: Headers) {
    const init = initalHeaders ?? {};
    const headers = new Headers({
        "Content-Type": "application/json",
        ...init,
        // "bearer"
    });
    const response = await fetch(`${url}${route}`, { headers });


    if (!response.ok) {
        throw new Error(
            `GET request has been failed,url:${url} rout:${route} and `,
        );
    }

    const data = await response.json() as T;

    return data;
}

// export function post(){

// }

// export function put(){

// }
// export function deleteRestApi(){

// }
