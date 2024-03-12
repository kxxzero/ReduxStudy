import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={"/"}>Redux</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/recipe/recipe_list"}>Recipe</Link></li>
                    <li><a href="#">Goods</a></li>
                    <li><Link to={"/food/find"}>FoodFind</Link></li>
                    <li><Link to={"/board/list"}>게시판</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header