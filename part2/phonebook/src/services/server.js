import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
    return axios.get(baseUrl)
}

export const createPerson = (newPerson) => {
    return axios.post(baseUrl, {name: newPerson.name, number: newPerson.number})
}

export const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export const updatePerson = (newPerson, id) => {
    return axios.put(`${baseUrl}/${id}`, newPerson)
}