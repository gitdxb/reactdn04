import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    showName = () => {
        alert("Hello asdasd")
    }

    showName2 = (name)  => {
        // truyen bien vao chuoi string
        alert(`Hello ${name}`);
    }



  render() {
    return (
      <div className="container py-5">
        {/* cho nguoi dung click button moi chay ham => ko co dau () */}
        <button onClick={this.showName} className='btn btn-danger'>Click</button>

        <button onClick={() => {
            this.showName2("Nguyen Van A");
            console.log('code 2');
            
        }} className='ml-1 btn btn-primary'>Co tham so</button>
      </div>
    )
  }
}
