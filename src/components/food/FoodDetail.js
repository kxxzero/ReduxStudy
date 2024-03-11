import {Fragment,useState,useEffect} from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchDetail} from "../../actions/foodActions";

function FoodDetail(){
    const {fno}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchDetail(fno))
    },[])
    const food_detail=useSelector((state)=>state.foods.food_detail)

    return (
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={"2"}>
                        <img src={"http://www.menupan.com" + food_detail.poster} style={{"width": "600px","height":"200px"}}/>
                    </td>
                </tr>
                <tr>
                    <td width={"20%"} className={"text-center"}>업체명</td>
                    <td width={"80%"}>{food_detail.name}</td>
                </tr>
                <tr>
                    <td width={"20%"} className={"text-center"}>주소</td>
                    <td width={"80%"}>{food_detail.address}</td>
                </tr>
                <tr>
                    <td width={"20%"} className={"text-center"}>전화</td>
                    <td width={"80%"}>{food_detail.phone}</td>
                </tr>
                <tr>
                    <td width={"20%"} className={"text-center"}>음식종류</td>
                    <td width={"80%"}>{food_detail.type}</td>
                </tr>
                <tr>
                    <td width={"20%"} className={"text-center"}>영업시간</td>
                    <td width={"80%"}>{food_detail.time}</td>
                </tr>
                <tr>
                    <td width={"20%"} className={"text-center"}>테마</td>
                    <td width={"80%"}>{food_detail.theme}</td>
                </tr>
                <tr>
                    <td colSpan={"2"} className={"text-right"}>
                        <button className={"btn-sm btn-danger"} onClick={()=>nav(-1)}>목록</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FoodDetail