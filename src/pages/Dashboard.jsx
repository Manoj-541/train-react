import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard
        <br/>
        <br/>

      <form>
        <label>Username:</label>
        <input type="text" name="username" placeholder="username"/>  <br/>
        <label>Email:</label>
        <input type="email" name="usermail"   placeholder="email"/>  <br/>
        <label>Password:</label>
        <input type="password" name="userpass"  placeholder="password"/>  <br/>
        <label>Gender:
        </label>
        <input type="radio" name="gender" value="male" />
        <label>Male</label>
        <input type="radio" name="gender" value="female" />
        <label>Female</label>
        <input type = "radio" name="gender" value="others"/>
        <label>Others</label>
        <br/>
        <label>Address:</label>
        <textarea name="address"  placeholder="address" />
        <br/><br/>
        <label>File:</label>
        <input type="file" name="file" />
        <br/>
        <label>Country:</label>
        <select name="country">
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="pakistan">Pakistan</option>
          <option value="srilanka">Srilanka</option>
          </select>
          <br/>
          <br/>

        <input type="submit" value="Submit"/>

      </form>
    </div>
  )
}

export default Dashboard