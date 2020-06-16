import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, HashRouter } from 'react-router-dom'
import axios from 'axios'

import NavBar from './components/NavBar' //!CHANGE FILES NAMES
import Cheeses from './components/Cheeses'
import HomePage from './components/Home'
import SingleCheese from './components/SingleCheese'

import 'bulma'
import './styles/style.scss'

const App = () => {
  return <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cheeses" component={Cheeses} />
      <Route path="/cheeses/:id" component={SingleCheese} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path='/create' component={CreateCheese} />
    </Switch>
  </HashRouter>
}

// const CreateCheese = (props) => {

//   const [formData, updateFormData] = useState({
//     name: '',
//     origin: '',
//     image: '',
//     tastingNotes: ''
//   })

//   function handleChange(event) {
//     const name = event.target.name
//     console.log(name)
//     const data = {
//       ...formData,
//       [name]: event.target.value
//     }
//     console.log(data)
//     updateFormData(data)
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     const token = localStorage.getItem('token')
//     axios.post('http://cheesebored.herokuapp.com/cheeses', formData, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(resp => {
//         props.history.push('/')
//         console.log(resp)
//       })
//   }

//   return <form className="form" onSubmit={handleSubmit}>
//     <div className="container">
//       <div className="field">
//         <label className="label">Name</label>
//         <div className="control">
//           <input
//             name="name"
//             className="input"
//             onChange={handleChange}
//             type="text"
//             placeholder="Text input"
//             value={formData.name}
//           />
//         </div>
//       </div>
//     </div>
//     <div className="container">
//       <div className="field">
//         <label className="label">Origin</label>
//         <div className="control">
//           <input
//             name="origin"
//             className="input"
//             onChange={handleChange}
//             type="text"
//             placeholder="Text input"
//             value={formData.origin}
//           />
//         </div>
//       </div>
//     </div>
//     <div className="container">
//       <div className="field">
//         <label className="label">Image</label>
//         <div className="control">
//           <input
//             name="image"
//             className="input"
//             onChange={handleChange}
//             type="text"
//             placeholder="Text input"
//             value={formData.image}
//           />
//         </div>
//       </div>
//     </div>
//     <div className="container">
//       <div className="field">
//         <label className="label">Tasting notes</label>
//         <div className="control">
//           <input
//             name="tastingNotes"
//             className="input"
//             onChange={handleChange}
//             type="text"
//             placeholder="Text input"
//             value={formData.tastingNotes}
//           />
//         </div>
//       </div>
//     </div>
//     <div className="container">
//       <button className="button is-primary">Submit</button>
//     </div>
//   </form>

// }


const Login = (props) => {

  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const name = event.target.name
    const data = {
      ...formData,
      [name]: event.target.value
    }
    updateFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://cheesebored.herokuapp.com/login', formData)
      .then(resp => {
        // localStorage.setItem saves a key and value
        // to the browser
        localStorage.setItem('token', resp.data.token)
        props.history.push('/')
      })
  }

  return <form className="form" onSubmit={handleSubmit}>
    <div className="container">
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Text input"
            value={formData.email}
          />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            name="password"
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Text input"
            value={formData.password}
          />
        </div>
      </div>
    </div>
    <div className="container">
      <button className="button is-primary">Submit</button>
    </div>
  </form>

}

const Register = (props) => {

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  function handleChange(event) {
    const name = event.target.name
    const data = {
      ...formData,
      [name]: event.target.value
    }
    updateFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios.post('http://cheesebored.herokuapp.com/register', formData)
      .then(data => {
        props.history.push('/login')
      })
  }

  return <form className="form" onSubmit={handleSubmit}>
    <div className="container">
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            name="username"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Text input"
            value={formData.username}
          />
        </div>
        {/* <p className="help">This is a help text</p> */}
      </div>
    </div>
    <div className="container">
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Text input"
            value={formData.email}
          />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            name="password"
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Text input"
            value={formData.password}
          />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="field">
        <label className="label">Confirm password</label>
        <div className="control">
          <input
            name="passwordConfirmation"
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Text input"
            value={formData.passwordConfirmation}
          />
        </div>
      </div>
    </div>
    <div className="container">
      <button className="button is-primary">Submit</button>
    </div>
  </form>


}

export default App