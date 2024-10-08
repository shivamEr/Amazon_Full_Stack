import React from 'react'
import './Sign.css'

const Sign = () => {
  return (
    <div class="body">
      <div class="container">
        <h2>Sign In</h2>
        <form action="submit_form.php" method="post">
            <div class="form-group">
              <label for="first-name">First Name:</label>
              <input type="text" id="first-name" name="first_name" required></input>
              <label for="last-name">Last Name:</label>
              <input type="text" id="last-name" name="last_name" required></input>
            </div>
          
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required></input>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required></input>
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required></input>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}"></input>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <input type="submit" value="Sign In"></input>
        </form>
      </div>
    </div>
  )
}

export default Sign
