import {Fragment,useState,useEffect} from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchDetail} from "../../actions/foodActions";
/* global kakao */

function FoodDetail(){
    const {fno}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchDetail(fno))
    },[])
    useEffect(()=>{
        const script=document.createElement("script")
        // <script src=""></script>
        script.async=true
        script.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9965c727d3306713c47391be682e4be9&autoload=false&libraries=services"
        document.head.appendChild(script)
        /*
            <head>
             <script src=""></script>
            </head>
         */
        script.onload=()=>{
            kakao.maps.load(()=>{
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                // 지도를 생성합니다
                var map = new kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new kakao.maps.services.Geocoder();

                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(food_detail.address, function(result, status) {

                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {

                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        var marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        var infowindow = new kakao.maps.InfoWindow({
                            content: '<div style="width:150px;text-align:center;padding:6px 0;">'+food_detail.name+'</div>'
                        });
                        infowindow.open(map, marker);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        map.setCenter(coords);
                    }
                });
            })
        }

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
            <table className={"table"}>
                <tr>
                    <td>
                        <div id="map" style={{"width": "100%", "height": "350px"}}></div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default FoodDetail