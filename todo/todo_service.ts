import { kb } from "../kb"

export async function TodoAll(){

    try {
        let res = await fetch('http://192.168.100.103:1219/api/ToDo')
        let post = await res.json();
        //kb.log(post)
        return post;
    } catch (e) {
        console.error(e);
    }

    

    return [{key: 1, value: "123" }]

}