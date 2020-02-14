import React, { useState } from 'react';
//import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';

const Searchtab = () => {
	const [val, setVal] = useState('');

	//const { handleSearch } = useContext(ProductContext);
	return (
		<main>
			{/* Search and Menu Tab */}
			<nav className=' nav justify-content-end bg-secondary container-fluid'>
				<form className='form-inline my-3'>
					<input
						className='form-control rounded mr-2'
						type='text'
						placeholder='Search items, brands here'
						onChange={e => setVal(e.target.value)}
						value={val}
					/>
					<Link
						className='btn btn-outline-warning buy-btn my-2 my-sm-2'
						type='submit'
						to={`/product/search/${val}`}
					>
						Search
					</Link>
				</form>
			</nav>
		</main>
	);
};

export default Searchtab;
