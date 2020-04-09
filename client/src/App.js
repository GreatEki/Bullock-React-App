import React from 'react';
import Home from './components/Home';
import {
	BrowserRouter,
	Route,
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
import HowToOrder from './components/view-templates/HowToOrder';
import Dashboard from './components/user/Dashboard';
import PrivateRoute from './components/user/PrivateRoute';
import context from './contexts/UserContext';
import OrderContext from './contexts/OrderContext';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ProductContextProvider>
					<UserContextProvider>
						<CartContextProvider>
							<OrderContext>
								<Route exact path='/' component={Home} />
								<Route exact path='/shop' component={Shop} />
								<Route exact path='/product/:id' component={Product} />
								<Route path='/how-to-order' component={HowToOrder} />
								<Route path='/contact' component={Contact} />
								<Route path='/product/search/:val' component={Search} />
								<Route path='/cart/overview' component={Cart} />
								<Route path='/cart/checkout' component={Checkout} />
								<Route path='/users/signup' component={SignUp} />
								<Route path='/users/signin' component={SignIn} />
								<PrivateRoute
									exact
									path='/users/auth/dashboard'
									component={Dashboard}
									auth={context.auth}
								/>
							</OrderContext>
						</CartContextProvider>
					</UserContextProvider>
				</ProductContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
