import React from 'react'
import BookList from '../index'
import InvalidData from './invalid';
import '../login/loginStyles.css'

class Form extends React.Component {
    render() {
      const {
        email,
        password,
        status,
        handleEmail,
        handlePassword,
        handleLogin
      } = this.props;
      return (
        <>
          {status === "succeeded" ? (
            <BookList />
          ) : (
            <div className="input">
              <h1 className='Lib'>Library</h1>
              <form onSubmit={handleLogin}>
                <input
                  className="inputs"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter email"
                />
                <input
                  className="inputs"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter Password"
                  type="password"
                />
                {status === "failed" ? < InvalidData/> : ""}
  
                <button id="btn">Log in</button>
              </form>
            </div>
          )}
        </>
      );
    }
} 

export default Form