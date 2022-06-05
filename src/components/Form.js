import { useState } from 'react';



export const Form = () => {

    const [username, setUsername] = useState('')
    const [address,setAddress] = useState('')
    const [option,setOption] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form data is ${username} at ${address} with the option ${option}`)

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
                <textarea value={address} onChange={(event) => setAddress(event.target.value)} ></textarea>
                <select value={option} onChange={(event) => setOption(event.target.value)} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}