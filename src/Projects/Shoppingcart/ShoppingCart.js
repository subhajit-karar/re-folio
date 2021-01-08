import React, { Component } from 'react';
import "./assets/cart.scss";
import CartItems from './components/CartItems/CartItems';
import Header from './components/Header/Header';
import axios from '../../components/axios-base';

export class ShoppingCart extends Component {
   
    state = {
        dummyPost:[
        ],
        cartItems:[
        ],
        savedItems:[
        ],
        total:0
    }
    componentDidMount(){
        axios.get('https://re-folio-default-rtdb.firebaseio.com/shoppingCartProds/-MQTTTjwjkzo5Dydx1x1/products.json')
            .then(response => {
                if(response.statusText === "OK" && response.status === 200){
                    this.setState({cartItems:response.data});
                }

            });
    };
    deleteClickedhandler = (index) =>{
        console.log("Delete clicked:",index);
        const cartItems = [...this.state.cartItems];
        cartItems.splice(index,1);
        this.setState({cartItems:cartItems});
    }
    /*updateProd = () =>{
      console.log('Clicked');
      const prods = {
        products: this.state.dummyPost
      }
      axios.post('/shoppingCartProds.json',prods).then(res=>console.log(res));
    }*/
    // saveClickedhandler = (index) =>{
    //     console.log("Save clicked:",index);
    //     console.log(cartItems[index]);
    //     const cartItems = [...this.state.cartItems];
    //     console.log(cartItems[index]);
    //     //cartItems.splice(index,1);
    //     //this.setState({cartItems:cartItems});

    // }
    render (){
        let items = null;
        let total = 0;
        items = this.state.cartItems.map((item,index) =>{
            total+=parseFloat(item.Price);
            return(
                <CartItems
                    key={item['Product ID']}
                    deleteClicked={()=>{this.deleteClickedhandler(index)}}
                    pname={item.Name}
                    pdes={item.Description}
                    price={item.Price}
                    cat={item.Category}
                    sku={item.SKU}
                    size={item.Size}
                     />
            )
        });
       
        return(
            <React.Fragment>
            <Header count={this.state.cartItems.length} total={total} />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Shopping Basket</h2>
                        <div className="productList">
                          <div className="row">
                            <div className="col-lg-12 rounded mb-5">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col" className="border-0 bg-light">
                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                      </th>
                                      <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Description</div>
                                      </th>
                                      <th scope="col" className="border-0 bg-light">
                                        <div className="py-2 text-uppercase">Price</div>
                                      </th>

                                      <th scope="col" className="border-0 bg-light text-center">
                                        {/* <div className="py-2 text-uppercase">Action</div> */}
                                      </th>
                                    </tr>
                                  </thead>
                                <tbody>
                                  {items}
                                </tbody>

                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="sideCheckout rounded">
                            <h4>Order Details</h4>
                            <div className="row orderDetails">
                                <div className="col-6">
                                    Items:
                                </div>
                                <div className="col-6 text-right">
                                    {this.state.cartItems.length}
                                </div>
                            </div>
                            <div className="row orderDetails">
                                <div className="col-6">
                                    Total:
                                </div>
                                <div className="col-6 text-right">
                                {total}
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block">Checkout Securely</button>
                        </div>

                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default ShoppingCart;
