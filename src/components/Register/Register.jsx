import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import './Register.css'

const Registration = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [regErr, setRegErr] = useState(false)
    const history = useHistory();

    const PostUserHandler = (e) => {
        e.preventDefault()
        const user = {username, password, confirmPassword }
    
        axios.defaults.withCredentials = true;
        axios.post("http://localhost:1337/register/", user)
            .then(res => {
                history.push(`/${res.data}`)
                console.log(res)
            })
            .catch(err => {
                const errArr = []
                const error = err.response.data

                if (error.errors) {
                    for (const key of Object.keys(error.errors)) {
                        errArr.push(error.errors[key].message)
                    }
                }
                if (error.keyValue) {
                    for (const key of Object.keys(error.keyValue)) {
                        errArr.push(`${key.toLowerCase()} has already been taken`)
                    }
                }
                setRegErr(errArr)
                console.log(err)
            })
    }

    return (
        <div id="container">
            <div id="left">

            </div>
            <div id="right">
                <form onSubmit={PostUserHandler} id="form">
                    {/* <label>email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} /> */}
                    <label>User Name</label>
                    <input value={username} onChange={e => setUserName(e.target.value)} />
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} />
                    <label>Confirm Password</label>
                    <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    <button>Submit</button>
                    {
                        regErr &&
                        regErr.map((v, i) => { return <p key={i} className="dangerErr">{v}</p> })
                    }
                </form>
            </div>
        </div>
    )
}

export default Registration