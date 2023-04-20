import { Container } from "@mui/material";
import MediaCard from "../itemCard/ItemCard";
import MenuCategory from "../menu-category/MenuCategory";
import "./Menu.css";

function Menu() {
    return (
      <div className="menu-section">
        <p>our menu</p>
        <h1>Discover Our Exclusive Menu</h1>
        <MenuCategory/>
        <div className="items">
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
        </div>
      </div>
    );
  }
  
  export default Menu;
  