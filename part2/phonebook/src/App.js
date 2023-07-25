import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import NewPersonForm from './components/NewPersonForm'
import Numbers from './components/Numbers'
import Person from './components/Person'
import Message from './components/Message.js'
import { getAll, createPerson, deletePerson, updatePerson } from './services/server'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredValue, setFilteredValue] = useState('')
  const [personsFiltered, setPersonsFiltered ] = useState([])   
  const [message, setMessage] = useState('')

  const handleAddPerson = (e) => {
    e.preventDefault()
    const newPerson = {name: newName, number: newNumber}

    if(checkIfPersonIsRegistered(newName)) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(confirm) {
          updatePerson(newPerson, checkIfPersonIsRegistered(newName).id)
          .then( () => {
            getAll().then(response => setPersons(response.data))
            setNewName('')
            setNewNumber('')
            setMessage(`${newName}'s number has been updated`)
            document.querySelector('.message').style.background = 'green'
            document.querySelector('.message').style.visibility = 'visible'
            setTimeout(() => {
              setMessage('')
              document.querySelector('.message').style.visibility = 'hidden'
            }, 3000)
          }).catch(error => {
            setMessage(`${newName}'s number was already deleted from the server`)
            document.querySelector('.message').style.visibility = 'visible'
            document.querySelector('.message').style.background = 'orange'
            setTimeout(() => {
              setMessage('')
              document.querySelector('.message').style.visibility = 'hidden'
            }, 3000)
            getAll().then(response => setPersons(response.data))
          })
      }} else {
        createPerson(newPerson).then(() => {
          getAll().then(response => setPersons(response.data))
          setNewName('')
          setNewNumber('')
          setMessage(`${newName}'s number has been saved`)
          document.querySelector('.message').style.background = 'green'
          document.querySelector('.message').style.visibility = 'visible'
            setTimeout(() => {
              setMessage('')
              document.querySelector('.message').style.visibility = 'hidden'
            }, 3000)
          
        })
      }
  }

  const checkIfPersonIsRegistered = (newName) => {
    return persons.find(p => p.name === newName)
  }

  const handleFilter = (e) => {
    setFilteredValue(e.target.value)
    }

  const handleDelete = (id) => {
    const confirm = window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)
    if(confirm) {
      const newPersons = persons.filter(person => person.id !== id)
      deletePerson(id).catch(error => {
        setMessage(`${persons.find(p => p.id === id).name}'s number was already deleted from the server`)
          document.querySelector('.message').style.background = 'orange'
          document.querySelector('.message').style.visibility = 'visible'
          setTimeout(() => {
            setMessage('')
            document.querySelector('.message').style.visibility = 'hidden'
          }, 3000)
          getAll().then(response => setPersons(response.data))
      })
      setPersons(newPersons)
    }
  }

  useEffect(() => {
    const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(filteredValue.toLowerCase()))
                                  .map(person => <Person key={person.id} person={person} handleDelete={handleDelete}/>)
    setPersonsFiltered(personsFiltered)
  },[filteredValue, persons])
  
  useEffect(() => {
    getAll().then(response => setPersons(response.data))
  },[])

  return (
    <div>
      <Filter handleFilter={handleFilter} filteredValue={filteredValue}/>
      <NewPersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleAddPerson={handleAddPerson}/>
      <Numbers personsFiltered={personsFiltered}/>
      <Message message={message}/>
    </div>
  )
}

export default App