import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBoardList,fetchBoardTotalPage} from "../../actions/boardActions";

function BaordList() {
    const dispatch=useDispatch()
    const [curpage,setCurpage]=useState(1)
    useEffect(() => {
        // dispatch dispatch
        dispatch(fetchBoardList(curpage)) // action => reducer
        dispatch(fetchBoardTotalPage())
    }, [curpage]);
    // store에 저장된 데이터 읽기

    const board_list=useSelector((state)=>state.boards.board_list)
    const totalpage=useSelector((state)=>state.boards.total)

    let html=board_list.map((vo)=>
        <tr>
            <td className={"text-center"} width={"10%"}>{vo.no}</td>
            <td width={"45%"}>
                <Link to={"/board/detail/"+vo.no}>{vo.subject}</Link>
            </td>
            <td className={"text-center"} width={"15%"}>{vo.name}</td>
            <td className={"text-center"} width={"20%"}>{vo.regdate.substring(0,vo.regdate.indexOf(" "))}</td>
            <td className={"text-center"} width={"10%"}>{vo.hit}</td>
        </tr>
    )

    return (
        <div className={"row"}>
            <h3 className={"text-center"}>게시판</h3>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td>
                        <Link to={"/board/insert"} className={"btn btn-sm btn-success"}>새글</Link>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className={"table"}>
                <thead>
                <tr className={"success"}>
                    <th className={"text-center"} width={"10%"}>번호</th>
                    <th className={"text-center"} width={"45%"}>제목</th>
                    <th className={"text-center"} width={"15%"}>이름</th>
                    <th className={"text-center"} width={"20%"}>작성일</th>
                    <th className={"text-center"} width={"10%"}>조회수</th>
                </tr>
                </thead>
                <tbody>
                {html}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={"5"} className={"text-center"}>
                        <input type={"button"} className={"btn-sm btn-danger"} value={"이전"}/>
                        {curpage} page / {totalpage} pages
                        <input type={"button"} className={"btn-sm btn-danger"} value={"다음"}/>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default BaordList