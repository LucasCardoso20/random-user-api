import fetchPeople from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";
import getElement from "./utils/getElement.js";

const btn = getElement('.btn')

const showUser = async () => {
    const person = await fetchPeople()
    displayUser(person)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)

