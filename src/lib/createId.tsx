let id: number = parseInt(window.localStorage.getItem('maxId') || '0')
const createId = () => {
    id += 1
    window.localStorage.setItem('maxId', id.toString())
    console.log(id)
    return id
}
export {createId}