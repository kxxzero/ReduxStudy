import {Fragment,useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchRecipeCount,fetchRecipeList,fetchRecipePage} from "../../actions/foodActions";
import Pagination from "react-js-pagination";

function RecipeList(){
    const dispatch=useDispatch()
    const [curpage,setCurpage]=useState(1)
    // reducer로 전송 => 요청 처리 => 변경된 데이터를 store에 저장
    useEffect(() => {
        dispatch(fetchRecipeList(curpage))
        dispatch(fetchRecipePage())
        dispatch(fetchRecipeCount())
    }, [curpage]);
    // store에 저장된 데이터를 읽어 온다
    const recipe_list=useSelector((state)=>state.foods.recipe_list)
    const recipe_count=useSelector((state)=>state.foods.recipe_count)
    const recipe_total=useSelector((state)=>state.foods.recipe_total)
    const handleChange=(page)=>{
        setCurpage(page)
    }

    let html=recipe_list.map((recipe) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <Link to={"/recipe/recipe_detail/"+recipe.no}>
                    <img src={recipe.poster} style={{"width": "100%"}} title={recipe.title}/>
                    <div className="caption">
                        <p>{recipe.chef}</p>
                    </div>
                </Link>
            </div>
        </div>
    )

    return (
        <Fragment>
            <div className={"row"}>
                <h3>총 {recipe_count}개의 맛있는 레시피가 있습니다.</h3>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>
                {html}
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>
                <div className={"text-center"}>
                    <Pagination
                        activePage={curpage}
                        itemsCountPerPage={12}
                        totalItemsCount={recipe_total}
                        pageRangeDisplayed={10}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default RecipeList