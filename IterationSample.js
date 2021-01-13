import React from  'react';

const IterationSample =() =>{
    const names=['눈사람', '얼음', '눈', '바람'];
    const namesList = names.map((name,index)=><li key={index}>{name}</li>);
    //const nameList=names.map(name => <li>{name}</li>);
    //key가 없지만 실행은 가능함,콘솔에서 경고메세지만 나올뿐
    
    return<u1>{namesList}</u1>;

};
export default IterationSample;
