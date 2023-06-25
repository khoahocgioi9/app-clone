/** @format */

import React from 'react';
import { Button, Slider, Space } from 'antd'
import { PlayCircleFilled } from '@mui/icons-material';

function PlayerControllerComponent()
{
	return (
		<div className='player-controler text-light'>
			<div className='row'>
				<div className='col'>audio content</div>
				<div className='col text-center'>
					<div>
						<Space>
							<Button type='text' icon={<PlayCircleFilled style={{
								fontSize: 32,
								color: 'white'
							}} />} />
						</Space>
					</div>

					<div>
						<Space>
							00:00
							<div className='col'>
								<Slider style={{
									width: '100%'
								}} />
							</div>
							00:00
						</Space>
					</div>

				</div>
				<div className='col text-right'>sound control</div>
			</div>
		</div>
	);
}

export default PlayerControllerComponent;
