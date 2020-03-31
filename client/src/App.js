import React from 'react';
import Home from './components/Home';
import {
	BrowserRouter,
	Route
} from 'react-router-dom/cjs/react-router-dom.min';
import Shop from './components/Shop';
import ProductContextProvider from './contexts/ProductContext';
import Product from './components/Product';
import Contact from './components/Contact';
import Search from './components/Search';
import Cart from './components/Cart';
import CartContextProvider from './contexts/CartContext';
import UserContextProvider from './contexts/UserContext';
import Checkout from './components/CheckOut';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<ProductContextProvider>
					<UserContextProvider>
						<CartContextProvider>
							<Route exact path='/shop' component={Shop} />
							<Route exact path='/product/:id' component={Product} />
							<Route path='/contact' component={Contact} />
							<Route path='/product/search/:val' component={Search} />
							<Route path='/cart/overview' component={Cart} />
							<Route path='/cart/checkout' component={Checkout} />
							<Route path='/users/signup' component={SignUp} />
							<Route path='/users/signin' component={SignIn} />
						</CartContextProvider>
					</UserContextProvider>
				</ProductContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
