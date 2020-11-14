import React from 'react';
import ReceiptList from './ReceiptList'

class Receipt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: '',
            amount: '',
            price: '',
            totalPrice: ''
        };
        this.productHandler = this.productHandler.bind(this);
        this.amountHandler = this.amountHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.eSubmit = this.eSubmit.bind(this);
    }

    render() {
        return(
            <div>
                <h3>Kvitto</h3>
                <div>
                    <form onSubmit={this.eSubmit}>
                        <p>
                            <label htmlFor="product">Produkt: </label>
                            <input id="new-product" onChange={this.productHandler} value={this.state.product} />
                        </p>
                        <p>
                            <label htmlFor="amount">Antal: </label>
                            <input id="new-amount" onChange={this.amountHandler} value={this.state.amount} />
                        </p>
                        <p>
                            <label htmlFor="price">Pris: </label>
                            <input id="new-price" onChange={this.priceHandler} value={this.state.price} />
                        </p>
                        <p>
                            <button>Nästa</button>
                        </p>
                    </form>
                </div>
                <div>
                    <ReceiptList products={this.state.products}/>
                </div>
                <div>
                    Summa: {this.totalPrice()} kronor
                </div>
            </div>
        );
    }

    totalPrice() {
        return this.state.totalPrice;
    }

    productHandler(e) {
        console.log(e.target.value);
        this.setState({product: e.target.value});
    }

    amountHandler(e) {
        console.log(e.target.value);
        if(!Number(e.target.value)) {
            return;
        }
        this.setState({amount: e.target.value});
    }

    priceHandler(e) {
        console.log(e.target.value);
        if(!Number(e.target.value)) {
            return;
        }
        this.setState({price: e.target.value});
    }

    eSubmit(e) {
        e.preventDefault();
        if( this.state.product.length === 0 ||
            this.state.amount.length === 0 || 
            this.state.price.length === 0) {
            return;
        }
        const newProduct = {
            product: this.state.product,
            amount: this.state.amount,
            price: this.state.price,
            id: Date.now()
        }
        this.setState(state => ({
            products: state.products.concat(newProduct),
            product: '',
            amount: '',
            price: '',
            totalPrice: Number(state.totalPrice) + Number((this.state.amount * this.state.price))
        }));
    }
}

export default Receipt;