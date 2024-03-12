import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import store from "./store/store";
import {Provider} from "react-redux";
import FoodDetail from "./components/food/FoodDetail";
import RecipeList from "./components/recipe/RecipeList";
import RecipeDetail from "./components/recipe/RecipeDetail";
import FoodFind from "./components/food/FoodFind";
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardInsert from "./components/board/BoardInsert";
import BoardDelete from "./components/board/BoardDelete";
import BoardUpdate from "./components/board/BoardUpdate";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <div className={"container"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
                        <Route path={"/recipe/recipe_list"} element={<RecipeList/>}/>
                        <Route path={"/recipe/recipe_detail/:no"} element={<RecipeDetail/>}/>
                        <Route path={"/food/find"} element={<FoodFind/>}/>
                        <Route path={"/board/list"} element={<BoardList/>}/>
                        <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                        <Route path={"/board/insert"} element={<BoardInsert/>}/>
                        <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
                        <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
