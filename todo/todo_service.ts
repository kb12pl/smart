import { kb } from "../kb"

export async function TodoAll() {

    try {
        let res = await fetch('http://192.168.100.103:1219/api/ToDo')
        let post = await res.json();
        return post;
    } catch (e) {
        console.error(e);
    }
}



export async function TodoDelete(id) {
    try {
        await fetch('http://192.168.100.103:1219/api/ToDo/' + id, { method: "DELETE" })
    } catch (e) {
        console.error(e);
    }
}

export async function TodoAdd(text) {
    if (text === null || text === "") {
        return false;
    }
    try {
        let res = await fetch('http://192.168.100.103:1219/api/ToDo',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",                    
                },
                body: JSON.stringify({ Name: text })
            });
        let post: Todo = await res.json();

        text = post.id + ":" + post.name;
    } catch (e) {
        console.error(e);
    }
}