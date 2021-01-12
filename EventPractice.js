import React, {Component} from 'react';

class EventPractice extends Component {
    state={
        message: ' '
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });


    }
    handleClick=()=>{
        alert(this.state.username + ': '+this.state.message);
        this.setState({
            username:'',
            message :''
        });

    }
    render(){
        return(
            <div>
                <h1>이벤트</h1>
                <input
                type="text"
                name="username"
                placeholder="사용자명"//사용자명 input 추가
                value ={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="message"
                placeholder="아무말입력ㄱ"
                value ={this.state.message}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice;