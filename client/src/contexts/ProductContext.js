import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState([]);
	const [searchProd, setSearchProd] = useState([]);
	const [hasLoaded, setHasLoaded] = useState(false);

	const retrieveProd = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/shop');

			setProducts(res.data);
			setHasLoaded(true);
			//console.log(products);
		} catch (err) {
			console.log(err);
		}
	};

	const getProd = async (id) => {
		try {
			const res = await axios.get(`http://localhost:8080/api/product/${id}`);

			setProduct(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSearch = async (val) => {
		try {
			const res = await axios.get(
				`http://localhost:8080/api/product/search/${val}`
			);

			setSearchProd(res.data);
		} catch (err) {
			console.log(err);

			setSearchProd([]);
			return searchProd;
		}
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				getProd,
				product,
				retrieveProd,
				searchProd,
				handleSearch,
				hasLoaded,
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
