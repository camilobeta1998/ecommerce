import React from "react";
import List from "./List";

const ItemList = ({ products }) => {
    return (
        <div className='contenedor__tarjetas'>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <List prop={product} />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;