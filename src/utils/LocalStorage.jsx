import { users } from "./testData"


function setLocalStorage(userData = users) {
    localStorage.setItem("users", JSON.stringify(userData));
}

const getLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem('users'))
    return {users:userData}

}



export { setLocalStorage, getLocalStorage }
