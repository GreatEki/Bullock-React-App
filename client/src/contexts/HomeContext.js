import React, { createContext, useState } from 'react';
import axios from 'axios';

export const HomeContext = createContext();

const HomeContextProvider = (props) => {
	const [nikeProd, setNikeProd] = useState([]);
	const [addidasProd, setAddidasProd] = useState([]);
	const [reebookProd, setReebookProd] = useState([]);
	const [erkeProd, setErkeProd] = useState([]);
	const [wristWatch, setWristWatch] = useState([]);
	const [wallets, setWallets] = useState([]);
	const [shoes, setShoes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	//DESC: Fetches nike sneakers which will display in our Home Component
	//URL: '/api/products/nike'
	const getNikeProducts = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/nike');

			setNikeProd(res.data.nikeSneakers);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};

	//DESC: Fetches addidas sneakers which will display in our Home Component
	//URL: '/api/products/addidas'
	const getAddidasProducts = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/addidas');

			setAddidasProd(res.data.addidasSneakers);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};

	//DESC: Fetches Reebook sneakers which will display in our Home Component
	//URL: '/api/products/reebook
	const getReebookProducts = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/reebook');

			setReebookProd(res.data.reebookSneakers);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};

	//DESC: Fetches Erke sneakers which will display in our Home Component
	//URL: '/api/products/erke
	const getErkeProducts = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/erke');

			setErkeProd(res.data.erkeSneakers);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};

	//DESC: Fetches wrist watches which will display in our Home Component
	//URL: '/api/products/watch
	const getWatches = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/watch');

			setWristWatch(res.data.wristWatches);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};

	//DESC: Fetches wallets which will display in our Home Component
	//URL: '/api/products/wallets
	const getWallets = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/wallets');

			setWallets(res.data.wallets);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};

	//DESC: Fetches shoes which will display in our Home Component
	//URL: '/api/products/shoes
	const getShoes = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/product/shoes');

			setShoes(res.data.wallets);
			setIsLoading(true);
		} catch (err) {
			err.message = 'REQUEST NOT SENT';
			setIsLoading(false);
		}
	};
	return (
		<HomeContext.Provider
			value={{
				getNikeProducts,
				getAddidasProducts,
				getReebookProducts,
				getErkeProducts,
				getWatches,
				getWallets,
				getShoes,
				nikeProd,
				addidasProd,
				reebookProd,
				erkeProd,
				wristWatch,
				wallets,
				shoes,
				isLoading,
			}}>
			{props.children}
		</HomeContext.Provider>
	);
};

export default HomeContextProvider;
