import {Fragment,useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchBoardDetail} from "../../actions/boardActions";

/*
    Fragment : 임시 루트를 생성할 때 사용
    useState : 변수 => state(계속 변경되는 데이터가 있는 경우에 설정)
    props : 고정된 데이터 => 태그의 속성값을 값을 전송
        => 함수 매개변수로 받음
    useEffect : mounted, window.onload
        - ,[])
        - [변수명]) : 변수가 변경될 때마다 재호출
    useParams : URL을 이용해서 데이터 전송 => getParameter()
    useRef : 태그 제어
    useNavigate : 브라우저 이동 제어
    useNemo / useContext / useReducer / Redux(Front의 MVC)
    사용자 정의 Hooks => 함수 기반에서만 사용 가능

    *** function App()
    const App=()=>{}
    const APP=function(){}
    => 다른 JS에서 사용 시 반드시 export를 설정
 */

function BoardDetail() {
    const{no}=useParams()
    /*
        - List => [{}, {}, {}, ...] => useState([])
        - VO => {} useState({})
        - 정수 => useState(0)
        - useState(true)
        - 문자열 useState('')
     */
    const dispatch=useDispatch()
    useEffect(() => {
    /*  ↓ 이미 action에서 만들어짐
        axios.get('http://localhost/board/detail_react', {
            params:{
                no:no
            }
        }).then(response=>{
            setDetail(response.data)
        })*/
        dispatch(fetchBoardDetail(no))
    }, [])

    // store에 저장된 데이터
    const detail=useSelector((state)=>state.boards.board_detail)

    return (
        <div className={"row"}>
            <h3 className={"text-center"}>내용보기</h3>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center success"} width={"20%"}>번호</td>
                    <td className={"text-center"} width={"30%"}>{detail.no}</td>
                    <td className={"text-center success"} width={"20%"}>작성일</td>
                    <td className={"text-center"} width={"30%"}>{detail.regdate}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>이름</td>
                    <td className={"text-center"} width={"30%"}>{detail.name}</td>
                    <td className={"text-center success"} width={"20%"}>조회수</td>
                    <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>제목</td>
                    <td colSpan={"3"}>{detail.subject}</td>
                </tr>
                <tr>
                    <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                        <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>{detail.content}</pre>
                    </td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={"4"}>
                        <Link to={"/board/update/"+no} className={"btn btn-info btn-xs"}>수정</Link>
                        <Link to={"/board/delete/"+no} className={"btn btn-success btn-xs"}>삭제</Link>
                        <Link to={"/board/list"} className={"btn btn-warning btn-xs"}>목록</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BoardDetail