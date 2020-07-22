import React from 'react';
import Home from './components/Home';
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Shop from './components/Shop';
import ProductContextProvider from './contexts/ProductContext';
import Product from './components/Product';
import Contact from './components/Contact';
import Search from './components/Search';
import Cart from './components/Cart';
import CartContextProvider from './contexts/CartContext';
import UserContextProvider from './contexts/UserContext';
import CheckOut from './components/CheckOut';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HowToOrder from './components/view-templates/HowToOrder';
import Dashboard from './components/user/Dashboard';
import PrivateRoute from './components/user/PrivateRoute';
import context from './contexts/UserContext';
import OrderContext from './contexts/OrderContext';
import HomeContextProvider from './contexts/HomeContext';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ProductContextProvider>
					<UserContextProvider>
						<CartContextProvider>
							<OrderContext>
								<HomeContextProvider>
									<Switch>
										<Route exact path='/' component={Home} />
										<Route exact path='/shop' component={Shop} />
										<Route exact path='/product/:id' component={Product} />
										<Route exact path='/how-to-order' component={HowToOrder} />
										<Route exact path='/contact' component={Contact} />
										<Route
											exact
											path='/product/search/:val'
											component={Search}
										/>
										<Route exact path='/cart/overview' component={Cart} />
										<Route exact path='/users/signup' component={SignUp} />
										<Route exact path='/users/signin' component={SignIn} />
										<PrivateRoute
											exact
											path='/users/auth/dashboard'
											component={Dashboard}
											auth={context.auth}
										/>

										<PrivateRoute
											exact
											path='/cart/checkout'
											component={CheckOut}
											auth={context.auth}
										/>
									</Switch>
								</HomeContextProvider>
							</OrderContext>
						</CartContextProvider>
					</UserContextProvider>
				</ProductContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
