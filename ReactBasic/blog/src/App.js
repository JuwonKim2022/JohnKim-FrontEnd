import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let logo = 'React Blog';
  let [title,setTitle] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉,따봉변경] = useState([0,0,0]);

  let [modal, setModal] = useState(false);

  let [titleNum, setTitleNum] = useState(0);
  
  let [inputVal, setInputVal] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'pink', fontSize:'20px'}}>{logo}</h4>
      </div>
      {/* <div className='list'>
        <h4>{title[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <button onClick={()=>{
          let titleCopy = [...title];
          // let titleCopy = title; <- 안됨
          titleCopy[0] = '여자 코트 추천';
          setTitle(titleCopy);
        }}>성별변경</button>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h2>{a} <span onClick={(e)=>{
                e.stopPropagation();
                let 따봉카피 = [...따봉];
                따봉카피[i] = 따봉카피[i] + 1;
                따봉변경(따봉카피)}}>👍</span> {따봉[i]} </h2>
              <h4 onClick={()=>{setModal(!modal); setTitleNum(i)}}>{title[i]}</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제</button>
              <br></br>
              <br></br>
            </div>
          );
        })
      }

      <button onClick={()=>{
        let titOrder = [...title];
        titOrder.sort()
        setTitle(titOrder);
      }}>가나다순 정렬</button>

      <input onChange={(e)=>{
        setInputVal(e.target.value);
        console.log(inputVal);
      }} type="text" />

      <button onClick={()=>{
        let titCopy = [...title];
        titCopy.unshift(inputVal);
        setTitle(titCopy)
      }}>글등록</button>

      {
        modal == true ? <Modal titleNum={titleNum} setTitle={setTitle} color={'lightpink'} title={title}/> : null
      }

    </div>

  );
}

let Modal = (props)=>{
  return(
    <div className='modal' style={{background:props.color}}>
      <h4>{props.title[props.titleNum]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
