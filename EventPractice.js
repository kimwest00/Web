import React, {Component} from 'react';

class EventPractice extends Component {
    render(){
        return(
            <div>
                <h1>이벤트</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력하렴"
                onChange={
                    (e) => {
                        console.log(e.target.value);//SynthticEvent_이벤트가 종료하면 이벤트 초기화_정보참조불가
                    }//e.target.value로 log괄호값을 수정해주면 바뀌는값이 기록된다
                }
                />
            </div>
        );
    }
}
export default EventPractice;