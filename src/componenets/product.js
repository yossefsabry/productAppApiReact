import './productJson'
import productList from './productJson';

function Product() {
    const products = productList.map((pro) => {
        return (
            <div className='card' key={pro.id}>
                <h1>{pro.title}</h1>
                <img src={pro.image} alt='product' />
                <h4>{pro.description}</h4>
                <h3>price: {pro.price}$</h3>
                <h3>category: {pro.category}</h3>
                <h4>rating: {pro.rating.rate}</h4>
                <h4>count rating: {pro.rating.count}</h4>
            </div>
        )

    })
    return (
        <>
            <h1 className='center'>welcome in the product store </h1>
            <div>
                <div className='card-container'>
                    {products}
                </div>
            </div>
        </>
    );
}

export default Product;