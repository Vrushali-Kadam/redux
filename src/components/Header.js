import React from "react";
function Header(props) {
    console.log('header',props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design-thumbnail.png"/>
            </div> 
            
            
        </div>
    )
}
export default Header;
