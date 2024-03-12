import {
    FETCH_FOOD_DETAIL,
    FETCH_FOOD_LIST,
    FETCH_PAGE,
    FETCH_RECIPE_PAGE,
    FETCH_RECIPE_COUNT,
    FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_LIST,
    FETCH_RECIPE_POSTERS,
    FETCH_RECIPE_MAKES,
    FETCH_FIND_LIST,
    FETCH_FIND_PAGE
} from "../actions/types";

/*
    board
    news
    goods
    food
    recipe
 */

const initialState={
    food_list:[],
    food_detail:{},
    total:0,
    recipe_list:[],
    recipe_total:0,
    recipe_count:0,
    recipe_detail:{},
    recipe_posters:[],
    recipe_makes:[],
    find_list:[],
    find_page:0
}


// state = initialState => 모든 데이터가 state에 저장되어 있음
// dispatch(action) => {type,data(payload)}
export default function(state=initialState,action) {
    console.log("reducer function call... action()"+action)

    switch (action.type) {
        case FETCH_FOOD_LIST:
            return{
                ...state,  // 기존의 데이터 값을 가져옴(전부 삭제(초기화)할 수는 없기 때문)
                food_list: action.payload // 새로운 내용으로 갱신
                /*
                    ... : 데이터를 그대로 복사하는 연산자
                    사용 목적 : 그 전에 적용된 데이터를 저장해두고 변경된 데이터만 가져옴

                    예) let arr=[1,2,3,4,5]
                        let k=...arr
                 */
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                total: action.payload
            }
        case FETCH_RECIPE_LIST:
            return {
                ...state,
                recipe_list: action.payload
            }
        case FETCH_RECIPE_COUNT:
            return {
                ...state,
                recipe_count:action.payload
            }
        case FETCH_RECIPE_PAGE:
            return {
                ...state,
                recipe_total: action.payload
            }
        case FETCH_RECIPE_DETAIL:
            return {
                ...state,
                recipe_detail: action.payload
            }
        case FETCH_RECIPE_MAKES:
            return {
                ...state,
                recipe_makes: action.payload
            }
        case FETCH_RECIPE_POSTERS:
            return {
                ...state,
                recipe_posters: action.payload
            }
        case FETCH_FIND_LIST:
            return {
                ...state,
                find_list:action.payload
            }
        case FETCH_FIND_PAGE:
            return {
                ...state,
                find_page: action.payload
            }
        default:
            return state
    }


}

