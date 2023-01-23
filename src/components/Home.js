import React from "react";
function Home(props) {
    console.log('props',props)
    return (
        <div>
            {/* <div className="add-to-cart">
                 <span className="cart-count">{props.data.length}</span>
                <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design-thumbnail.png"/>
            </div> add new component header.js and paste code */}
            
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png" />
                </div>
                <div className="text-wrapper item">
                    <span>I-phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})
                }>Add to Cart</button>
                  <button className="remove-cart-btn" onClick={()=>{props.removeToCartHandler()}
                }>Remove to Cart</button>
                </div>

            </div>
        </div>
    )
}
export default Home;
