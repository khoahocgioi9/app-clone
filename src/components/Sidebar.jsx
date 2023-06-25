/** @format */

import { Home } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, Layout, Menu, Space, Tag } from 'antd';
import React, { useState } from 'react';
import CardComponent from './CardComponent';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children, to) {
	return {
		key,
		icon,
		label,
		children,
		to,
	};
}

const Sidebar = () => {
	const [language, setLanguage] = useState('Vietnamese');

	const handleLanguageSwitch = () => {
		const newLanguage = language === 'Vietnamese' ? 'English' : 'Vietnamese';
		setLanguage(newLanguage);
	};

	const navigate = useNavigate();

	const mainMenu = [
		{
			key: 'item1',
			label: <Link to='/'>Home</Link>,
			icon: <Home />,
		},
		{
			key: 'item2',
			label: <Link to='/search'>Search</Link>,
			icon: <SearchIcon />,
		},
	];
	const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6'];

	return (
		<Sider
			theme='light'
			width={320}
			style={{
				background: '#ffffff',
				margin: 10,
				maxHeight: '100%',
			}}>
			<Card style={{ background: '#f5f5f5' }}>
				<Menu
					mode='inline'
					bordered={false}
					items={mainMenu}
					style={{ background: '#f5f5f5' }}></Menu>
			</Card>

			<Card
				bordered={false}
				className='text-white shadow-lg'
				title={
					<span
						className='text-xl font-bold'
						style={{ color: '#000000', fontWeight: 'bold' }}>
						<BookmarkBorderIcon />
						Default size card
					</span>
				}
				extra={
					<a href='#' style={{ color: '#000000', fontWeight: 'bold' }}>
						<AddIcon />
					</a>
				}
				style={{
					width: 320,
					margin: '12px 0',
					background: '#f5f5f5',
					color: '#000000',
					fontWeight: 'bold',
					fontSize: '16px',
				}}>
				<div id='SideScroll' style={{ overflow: 'auto', height: 250 }}>
					<CardComponent
						color={'#2B2730'}
						handleShowAlert={() => alert('hello')}>
						<h1 style={{ fontSize: 24 }}>Top chart of June</h1>
						<p style={{ fontWeight: 400 }}>
							See the top 10 highest rated songs of June{' '}
						</p>
					</CardComponent>

					<CardComponent
						color={'#2B2730'}
						handleShowAlert={() => alert('hello')}>
						<h1 style={{ fontSize: 24 }}>Top chart of June</h1>
						<p style={{ fontWeight: 400 }}>
							See the top 10 highest rated songs of June{' '}
						</p>
					</CardComponent>
				</div>

				<footer style={{ marginTop: 40 }}>
					<div>
						{tags.map((tag, index) => (
							<a
								href=''
								key={index}
								style={{
									marginRight: 20,
									fontSize: 15,
									textAlign: 'justify',
									display: 'inline-block',
								}}>
								{tag}
							</a>
						))}
					</div>

					<Space />
					<Button
						type='primary'
						shape='round'
						style={{ background: '#000000', marginTop: 20, marginBottom: 20 }}
						onClick={handleLanguageSwitch}>
						{language}
					</Button>
				</footer>
			</Card>
		</Sider>
	);
};

export default Sidebar;
