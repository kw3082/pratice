import './App.css'
import { useState } from 'react'

function App() {
  let [글제목, 글제목변경] = useState(['포항 국밥', '옥계 짜장', '대전 성심당'])
  let [날짜, 날짜변경] = useState([18, 17, 16])
  let [따봉, 따봉변경] = useState([0, 0, 0])
  let [load, setLoad] = useState(false)
  let [title, setTitle] = useState('제목')
  let [plus, setPlus] = useState('')
  let [따봉1, 따봉변경1] = useState(0)
  console.log(글제목)
  return (
    <div className="App">
      <div className="black-nav">
        <div>
          React Blog{' '}
          <span
            onClick={() => {
              따봉변경1(따봉1 + 1)
            }}
          >
            👍
          </span>{' '}
          {따봉1}
        </div>
      </div>
      {글제목.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setTitle(글제목[i])
              }}
            >
              {글제목[i]}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  let copy = [...따봉]
                  copy[i]++
                  따봉변경(copy)
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>1.{날짜[i]} 발행</p>
            <button
              onClick={() => {
                // let copy = [...글제목]
                let copy = [...글제목]
                copy.splice(i, 1)
                글제목변경(copy)
                console.log(글제목)
              }}
            >
              삭제
            </button>
          </div>
        )
      })}

      <input
        onChange={e => {
          setPlus(e.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          if (plus != '') {
            let copy = [...글제목]
            copy.unshift(plus)
            글제목변경(copy)
            let copy1 = [...날짜]
            copy1.unshift(날짜[0] + 1)
            날짜변경(copy1)
          }
        }}
        style={{
          marginLeft: '10px',
          marginTop: '10px',
          padding: '2px 3px',
        }}
      >
        글발행
      </button>
    </div>
  )
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            props.setLoad(!props.load)
            let copy = [...props.글제목]
            copy[0] = '부산 국밥'
            props.글제목변경(copy)
          }}
        >
          모달창 닫기
        </button>
      </div>
    </>
  )
}

export default App
