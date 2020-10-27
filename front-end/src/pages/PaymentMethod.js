import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import React, { useCallback, memo, useState, useEffect, useRef } from 'react';
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
	Carousel,
	CarouselItem,
} from 'reactstrap';
import '../styles/pageTitle.css';
import '../styles/cart.css';
import { Icon, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useDebounce from '../untils/debounce';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import '../styles/forAll.css';
import { MyStepper } from '../components';
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import paypal from '../assets/paypal.svg';
import pay from '../assets/pay.svg';
const PaymentMethod = () => {
	console.log('cart render ne');
	const [method, setMethod] = useState('credit');
	return (
		<Container fluid className="pb-5" style={{ backgroundColor: '#F9F9FF' }}>
			<Row className="title-container mt-5">
				<p class="page-title">Payment Method</p>
			</Row>
			<MyStepper activeStep={2} />
			<Container className="mt-5" style={{ backgroundColor: '#F9F9FF' }}>
				<Row>
					<Col lg="4" md="3" sm="6" className="pt-2">
						<Row>
							<img src={visa} style={{ width: '40%', maxHeight: 100 }} />
							<img
								src={mastercard}
								style={{ width: '40%', maxHeight: 100 }}
							/>
						</Row>
						<Row className="justify-content-center mt-1">
							<Button
								onClick={() => setMethod('credit')}
								style={{
									width: 26,
									height: 26,
									borderRadius: 13,
									backgroundColor:
										method === 'credit' ? '#458AFF' : 'white',
									borderWidth: method === 'credit' ? 0 : 1,
									marginRight: 5,
								}}
							/>
							<p>Pay with credit card</p>
						</Row>
					</Col>
					<Col lg="4" md="3" sm="6" className="pt-2">
						<img src={paypal} style={{ width: '40%', maxHeight: 100 }} />
						<Row className="justify-content-center mt-1">
							<Button
								onClick={() => setMethod('paypal')}
								style={{
									width: 26,
									height: 26,
									borderRadius: 13,
									backgroundColor:
										method === 'paypal' ? '#458AFF' : 'white',
									borderWidth: method === 'paypal' ? 0 : 1,
									marginRight: 5,
								}}
							/>
							<p>Pay with paypal</p>
						</Row>
					</Col>
					<Col lg="4" md="3" sm="6" className="pt-2">
						<img src={pay} style={{ width: '40%', maxHeight: 100 }} />
						<Row className="justify-content-center mt-1">
							<Button
								onClick={() => setMethod('delivery')}
								style={{
									width: 26,
									height: 26,
									borderRadius: 13,
									backgroundColor:
										method === 'delivery' ? '#458AFF' : 'white',
									borderWidth: method === 'delivery' ? 0 : 1,
									marginRight: 5,
								}}
							/>
							<p>Payment on delivery</p>
						</Row>
					</Col>
				</Row>
			</Container>
			<Container>
				{method !== 'delivery' ? (
					<Container fluid className="p-0">
						<Row className="d-flex justify-content-around align-items-center mt-5">
							<TextField
								label="Name on Card"
								className="w-100"
								variant="outlined"
							/>
						</Row>
						<Row className="pl-0 justify-content-between align-items-center justify-content-center mt-3">
							<Col md="6" className="m-0 p-0 pr-5">
								<TextField
									label="Card Number"
									className="w-100"
									variant="outlined"
								/>
							</Col>
							<Col md="6" className="p-0">
								<TextField
									label="CVV"
									className="w-100"
									variant="outlined"
								/>
							</Col>
						</Row>
						<Row className="d-flex justify-content-around align-items-center mt-1">
							<TextField
								label="Expiration Date"
								className="w-100"
								variant="outlined"
							/>
						</Row>
					</Container>
				) : (
					<div />
				)}

				<NavLink
					exact
					to={{
						pathname: '/confirmation',
						// state: { data },
					}}
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
				>
					<Button
						className="button-container-box-shadow"
						style={{
							marginTop: 10,
							color: 'white',
							backgroundColor: '#4285f4',
							color: 'white',
							borderWidth: 0,
							borderRadius: 25,
							width: '100%',
							height: 50,
						}}
					>
						Next step
					</Button>
				</NavLink>
			</Container>
		</Container>
	);
};
export default PaymentMethod;