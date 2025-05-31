import { useState } from "react";
import "./Registration.css";
export const Registration = () => {
  const [user,setUser]=useState({
    firstName:"",lastName:"",phoneNumber:"",email:"",password:""
  })

  const handleInputChange = (e) => {
    const { name, value }= e.target;
   setUser((prev)=>({...prev,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(user)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1 style={{ backgroundColor: "white" }}>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="passwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            
            value={user.password}
            onChange={handleInputChange}
          />

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter your phone Number"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
