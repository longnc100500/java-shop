import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import React, { useCallback, memo, useState, useEffect } from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	ButtonGroup,
	Input,
	ListGroup,
	ListGroupItem,
	Fade,
} from 'reactstrap';
import '../styles/pageTitle.css';
import '../styles/cart.css';
import { Icon } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';

const Cart = memo(() => {
	const [cartData, setCartData] = useState([]);
	const data = useSelector((state) => state?.cartReducer?.items);
	useEffect(() => {
		setCartData(data);
	}, [data]);
	console.log('cart render ne');
	return (
		<Container fluid>
			<Row className="title-container mt-5">
				<p class="page-title">Cart List</p>
			</Row>
			<Container>
				<Row className="mt-5">
					<Col lg="7" className="box-shadow mr-5">
						<h6 style={{ fontSize: 20 }} className="m-3">
							Cart (2 items)
						</h6>

						{cartData.length ? (
							cartData.map((item, idx) => <ItemDetails product={item} />)
						) : (
							<h3>There is no items</h3>
						)}
					</Col>
					<SumaryCheckout />
				</Row>
			</Container>
		</Container>
	);
});
const ItemDetails = ({ product, onValueChange, onRemoveClick }) => {
	const dispatch = useDispatch();
	const { name, color, brand, size, amount, price, id } = product;
	const [amountOfItem, setAmountOfItem] = useState(amount ? amount : 0);
	const _handleAddItem = () => {
		setAmountOfItem((amount) => amount + 1);
	};
	const _handleSubItem = () => {
		if (amountOfItem !== 1) setAmountOfItem((amount) => amount - 1);
	};
	return (
		<Col>
			<Row className="mb-4 pt-4">
				<Col md="5" lg="3" xl="3">
					<img
						className="img-fluid w-100"
						src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
					/>
				</Col>
				<Col md="7" lg="9" xl="9">
					<div className="mb-0 pl-1">
						<div className="d-flex justify-content-between">
							<div>
								<p
									style={{ fontSize: 20, fontWeight: 'bold' }}
									className="mb-2"
								>
									{name}
								</p>
								<p
									className="mb-3 text-muted text-uppercase small"
									style={{ fontSize: 12 }}
								>
									{`BRAND: ${brand?.toUpperCase()}`}
								</p>
								<p
									className="mb-2 text-muted text-uppercase small"
									style={{ fontSize: 12 }}
								>
									{`COLOR: ${color?.toUpperCase()}`}
								</p>
								<p
									className="mb-3 text-muted text-uppercase small"
									style={{ fontSize: 12 }}
								>
									{`SIZE: ${size?.toUpperCase()}`}
								</p>
							</div>
							<div>
								<div className="mb-0 w-100">
									<ButtonGroup>
										<Button
											onClick={_handleAddItem}
											style={{
												width: 50,
												height: 40,
												justifyContent: 'center',
												flexDirection: 'row',
												borderColor: '#CED4DA',
												backgroundColor: 'white',
												borderRight: 0,
											}}
										>
											<Icon
												style={{
													fontSize: 20,
													color: '#C4D4DA',
												}}
											>
												add
											</Icon>
										</Button>
										<Input
											style={{
												width: 50,
												borderRadius: 0,
												height: 40,
												textAlign: 'center',
											}}
											value={amountOfItem}
										/>
										<Button
											onClick={_handleSubItem}
											style={{
												width: 50,
												height: 40,
												justifyContent: 'center',
												flexDirection: 'row',
												borderColor: '#C4D4DA',
												borderWidth: 1,
												backgroundColor: 'white',
											}}
										>
											<Icon
												style={{
													fontSize: 20,
													color: '#CED4DA',
												}}
											>
												remove
											</Icon>
										</Button>
									</ButtonGroup>

									<small
										id="passwordHelpBlock"
										className="form-text text-muted text-center"
										style={{ fontSize: 10 }}
									>
										(Note, 1 piece)
									</small>
								</div>
							</div>
						</div>
					</div>
					<div class="d-flex justify-content-between align-items-center">
						<div>
							<Button
								color="secondary"
								style={{
									backgroundColor: 'transparent',
									paddingLeft: 0,
									borderWidth: 0,
								}}
							>
								<div className="p-0 m-0 d-flex justify-content-between align-items-center">
									<Icon
										style={{
											fontSize: 25,
											color: '#888',
										}}
									>
										delete_forever
									</Icon>
									<small
										style={{
											fontSize: 10,
											color: '#888',
										}}
									>
										REMOVE
									</small>
								</div>
							</Button>
							<Button
								color="secondary"
								style={{
									backgroundColor: 'transparent',
									borderWidth: 0,
								}}
							>
								<div className="d-flex justify-content-between align-items-center">
									<Icon
										style={{
											fontSize: 25,
											color: '#888',
										}}
									>
										favorite
									</Icon>
									<small
										style={{
											fontSize: 10,
											color: '#888',
										}}
									>
										MOVE TO WISH LIST
									</small>
								</div>
							</Button>
						</div>
						<p class="mb-0">
							<span>
								<strong id="summary">{`$ ${
									amountOfItem * price
								}`}</strong>
							</span>
						</p>
					</div>
				</Col>
			</Row>
		</Col>
	);
};
const SumaryCheckout = () => {
	const [isFaded, setIsFaded] = useState(false);

	return (
		<Col lg="4">
			<div className="p-4 box-shadow">
				<h6 class="mb-3">The total amount of</h6>
				<ListGroup flush>
					<ListGroupItem className="d-flex justify-content-between align-items-center">
						<small style={{ fontSize: 16 }}>Temporary amount</small>
						<small style={{ fontSize: 16 }}>1151.56</small>
					</ListGroupItem>
					<ListGroupItem className="d-flex justify-content-between align-items-center">
						<small style={{ fontSize: 16 }}>Shipping</small>
						<small style={{ fontSize: 16 }}>1151.56</small>
					</ListGroupItem>
					<ListGroupItem className="d-flex justify-content-between align-items-center">
						<small style={{ fontSize: 16, fontWeight: 'bold' }}>
							The total amount of (including VAT)
						</small>
						<small style={{ fontSize: 16 }}>1151.56</small>
					</ListGroupItem>

					<Button
						style={{
							marginTop: 10,
							color: 'white',
							backgroundColor: '#ff0020',
							color: 'white',
							borderWidth: 0,
							borderRadius: 0,
						}}
					>
						Go to checkout
					</Button>
					<Button
						outline
						color="primary"
						className="mt-4"
						onClick={() => setIsFaded(!isFaded)}
						style={{
							color: 'white',
							color: '#ff0020',
							backgroundColor: 'white',
							borderColor: '#ff0020',
							borderRadius: 0,
						}}
					>
						Add a discount code (optional)
					</Button>
					<Fade in={isFaded} className="mt-3">
						<Input className="mb-3" />
					</Fade>
				</ListGroup>
			</div>
		</Col>
	);
};
export default Cart;
