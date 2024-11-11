let baseUrl = "http://localhost:4040/"

export function getData() {
    try {
        let res = fetch(`${baseUrl}goods`)

        return res
    } catch (error) {
        console.error(error);
    }
}


export function getProduct(id) {
    try {
        let res = fetch(`${baseUrl}goods/` + id)

        return res
    } catch (error) {
        console.error(error);
    }
}


// getData("users")
// getData("goods")