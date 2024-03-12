import {Fragment, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardInsert} from "../../actions/boardActions";

function BoardInsert() {
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')

    // 태그를 제어 => focus , 비활성,활성화 => useRef
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const dispatch=useDispatch() // 선언이 안 된 경우 전송 불가 => action에 등록된 함수를 연결하는 역할

    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }

    const insert=()=>{
        if(name.trim()==="") {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==="") {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==="") {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==="") {
            pwdRef.current.focus()
            return
        }
        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }
        dispatch(boardInsert(params))
    }

    const result=useSelector((state)=>state.boards.result)
    if(result==='yes') {
        window.location.href="/board/list"
    } else if(result==='no') { // else 입력 시 무조건 수행되기 때문에 else if 사용
        alert("게시판 추가에 실패하셨습니다.")
    }

    return (
        <div className={"row"}>
            <h3 className={"text-center"}>글쓰기</h3>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td width={"15%"} className={"text-center"}>이름</td>
                    <td width={"85%"}>
                        <input type={"text"} size={"15"} className={"input-sm"} onChange={nameChange} value={name} ref={nameRef}/>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>제목</td>
                    <td width={"85%"}>
                        <input type={"text"} size={"50"} className={"input-sm"} onChange={subjectChange} value={subject} ref={subjectRef}/>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>내용</td>
                    <td width={"85%"}>
                        <textarea rows={"10"} cols={"52"} onChange={contentChange} ref={contentRef}>{content}</textarea>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>비밀번호</td>
                    <td width={"85%"}>
                        <input type={"password"} size={"15"} className={"input-sm"} onChange={pwdChange} value={pwd} ref={pwdRef}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"} className={"text-center"}>
                        <input type={"button"} className={"btn-sm btn-info"} value={"글쓰기"} onClick={insert}/>
                        <input type={"button"} className={"btn-sm btn-warning"} value={"취소"} onClick={()=>nav(-1)}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BoardInsert