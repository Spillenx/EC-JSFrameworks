import React from 'react';

class ReceiptList extends React.Component {

    render() {

        return(
            <div>
                <ul>
                    {this.props.products.map(item =>(
                        <li key={item.id}>
                            {item.amount} {item.product} : {this.totalCost(item.amount, item.price)} Kr
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

    totalCost(amount, price) {
        return amount * price;
    }
}

export default ReceiptList;