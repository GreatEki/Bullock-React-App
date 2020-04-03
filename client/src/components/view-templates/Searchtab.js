import React, { useState } from 'react';
//import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';

const Searchtab = () => {
	const [val, setVal] = useState('');

	//const { handleSearch } = useContext(ProductContext);
	return (
		<main>
			{/* Search and Menu Tab */}
			<nav className='nav justify-content-end container-fluid'>
				<form className='form-inline my-3 search-form'>
					<input
						className='form-control rounded-pill'
						type='text'
						placeholder='Search for items, brands and catergories here'
						onChange={e => setVal(e.target.value)}
						value={val}
					/>
					<Link
						className='btn btn-warning buy-btn ml-0 my-2 my-sm-2'
						type='submit'
						to={`/product/search/${val}`}>
						Search
					</Link>
				</form>
			</nav>
		</main>
	);
};

export default Searchtab;
