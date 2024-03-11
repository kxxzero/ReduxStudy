import {Fragment, useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {fetchRecipeDetail} from "../../actions/foodActions";
import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";

/*
    - useSelector : store 안에 있는 데이터를 선택해서 가지고 옴
    - useDispatch : action 안에 있는 함수 호출


    *** Front-End MVC
        React => Redux
        Vue => Vuex

 */

function RecipeDetail(){
    const nav=useNavigate()
    const {no}=useParams()//String no=getParameter("no")
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchRecipeDetail(no)) //store 에 저장 완료
    }, []); // mounted => componentDidMount => window.onload
    // [curpage] => curpage가 변경이 되는 재호출
    // react-query uesQuery(), useQueues => 새로운 내용이 있는 경우 재호출
    const recipe_detail=useSelector((state)=>state.foods.recipe_detail)
    console.log(recipe_detail)
    const recipe_data=recipe_detail
    const recipe_makes=useSelector((state)=>state.foods.recipe_makes)
    const recipe_posters=useSelector((state)=>state.foods.recipe_posters)

    const recipe_date=recipe_detail.recipe

    let html=recipe_makes.map((m,index)=>
        <tr>
            <td className={"text-center"}>{m}</td>
            <td className={"text-right"}>
                <img src={recipe_posters[index]} style={{"width":"120px","height":"80px"}}/>
            </td>
        </tr>
    )

    return (
        <div className={"rwo"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <img src={recipe_data.poster} style={{"width": "600px", "height": "200px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <h3 className={"text-center"}>{recipe_data.title}</h3>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        {recipe_data.content}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL + "/icon/a1.png"}/></td>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL + "/icon/a2.png"}/></td>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL + "/icon/a3.png"}/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>{recipe_data.info1}</td>
                    <td className={"text-center"}>{recipe_data.info2}</td>
                    <td className={"text-center"}>{recipe_data.info3}</td>
                </tr>
                </tbody>
            </table>

            <table className={"table"}>
                <caption><h3>조리 방법</h3></caption>
                <tbody>
                <tr>
                    {html}
                </tr>
                </tbody>
            </table>

            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} rowSpan={"2"}>
                        <img src={recipe_data.chef_poster} style={{"width": "150px", "height": "100px"}}/>
                    </td>
                    <td>{recipe_data.chef}</td>
                </tr>
                <tr>
                    <td>{recipe_data.chef_profile}</td>
                </tr>
                <tr>
                    <td colSpan={"2"} className={"text-right"}>
                        <button className={"btn-sm btn-danger"} onClick={() => nav(-1)}>

                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecipeDetail