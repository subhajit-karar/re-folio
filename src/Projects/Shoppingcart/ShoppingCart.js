import React, { Component } from 'react';
import "./assets/cart.scss";
import CartItems from './components/CartItems/CartItems';
import Header from './components/Header/Header';
//import axios from 'axios';

export class ShoppingCart extends Component {
   
    state = {
        dummyPost:[

        ],
        cartItems:[

        ],
        savedItems:[]
    }
   /* componentDidMount(){
        axios.get('jsonplaceholder.typicode.com/posts')
            .then(response => {
                if(response.statusText === "OK" && response.status === 200){
                    //const dummyPost = [...this.state.dummyPost];
                    const res = response.data.slice(0,4);
                    this.setState({cartItems:res});
                }

            });
    };*/
    deleteClickedhandler = (index) =>{
        console.log("Delete clicked:",index);
        const cartItems = [...this.state.cartItems];
        cartItems.splice(index,1);
        this.setState({cartItems:cartItems});
    }
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
        items = this.state.cartItems.map((item,index) =>{
            return(
                <CartItems
                    key={item.id}
                    saveClicked={()=>{this.saveClickedhandler(index)}}
                    deleteClicked={()=>{this.deleteClickedhandler(index)}}
                    pname={item.title}
                    pdes={item.body}
                     />
            )


        });
        let saveitems = null;
        saveitems = this.state.savedItems.map((item,index) =>{
            return(
                <CartItems
                    key={item.id}
                    saveClicked={()=>{this.saveClickedhandler(index)}}
                    deleteClicked={()=>{this.deleteClickedhandler(index)}}
                    pname={item.title}
                    pdes={item.body}
                     />
            )


        });
        return(
            <React.Fragment>
            <Header />
            <div className="container mt-4">
               
                <div className="row">
                    <div className="col-md-8">
                        <h2>Shopping Basket</h2>
                        <p>Your cart is here</p>
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
                                        <div className="py-2 text-uppercase">Action</div>
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
                        <h2>Saved Cart</h2>
                        <p>Your saved cart is here</p>
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
                                      <div className="py-2 text-uppercase">Action</div>
                                    </th>
                                  </tr>
                                </thead>
                              <tbody>
                                  {saveitems}
                              </tbody>

                              </table>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sideCheckout rounded">
                            <h4>Order Total</h4>
                            <div className="row orderDetails">
                                <div className="col-6">
                                    Total:
                                </div>
                                <div className="col-6 text-right">
                                    $50.00
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
