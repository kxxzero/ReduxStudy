import {Fragment} from "react";
import Home from "./Home";

function Header() {
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to={"/"}>Redux</Link>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><Link to={"/"}>Home</Link></li>
                <li><Link to={"/recipe/recipe_list"}>Recipe</Link></li>
                <li><a href="#">Goods</a></li>
                <li><a href="#">FoodFind</a></li>
            </ul>
        </div>
    </nav>
}

export default Header