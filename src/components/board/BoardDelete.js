import {useState,useRef,useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardDelete} from "../../actions/boardActions";

function BoardDelete() {
    const {no} = useParams()
    const nav=useNavigate()
    const [pwd,setPwd]=useState('')
    const pwdRef=useRef(null)
    const dispatch=useDispatch()
    /*const pwdChange=(e)=>{
        setPwd(e.target.value)
    }*/
    useEffect(()=>{
        dispatch(boardDelete(no,pwd))
    },[pwd])

    const result=useSelector((state)=>state.boards.del_result)

    const boarddel=()=>{
        if(pwd.trim()==="") {
            pwdRef.current.focus()
            return
        }

        if(result==="yes" && result!=="") {
            window.location.href="/board/list"
        }
        else if(result==="no" && result!=="") {
            alert("비밀번호가 틀립니다")
            pwdRef.current.value=''
            pwdRef.current.focus()
        }

        /*axios.post('http://localhost/board/delete_react', null, {
            params:{
                pwd:pwd,
                no:no
            }
        }).then(response=>{
            if(response.data==='yes') {
                window.location.href="/board/list"
            }
            else if(result==='no'){
                alert("비밀번호가 틀립니다")
                setPwd('')
                pwdRef.current.focus()
            }
        })*/
    }

    return (
        <div className={"row row1"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td>
                        비밀번호:<input type={"password"} className={"input-sm"} ref={pwdRef} value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    </td>
                </tr>

                <tr>
                    <td className={"text-center"}>
                        <input type={"button"} value={"삭제"} className={"btn btn-sm btn-danger"} onClick={boarddel}/>
                        <button className={"btn btn-sm btn-danger"} onClick={()=>nav(-1)}>취소</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BoardDelete