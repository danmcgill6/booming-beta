import React, { Component } from 'react';

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            isUser:true, 
        }

        this.toggleCheckInput = this.toggleCheckInput.bind(this)
    }

    toggleCheckInput(e){
        console.log(e)
        // this.setState({isUser: !this.state.isUser})
    }

  render() {
   return(
        <div>
            <h1 className='center'>SignUp with BoomingApps !</h1>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={(e) => this.toggleCheckInput(e)}/>
                <label class="form-check-label" for="inlineRadio1">User</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Developer</label>
                </div>
               
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }
}

export default SignUp;