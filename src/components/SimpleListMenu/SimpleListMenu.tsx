import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ArrowDropDown } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import "./SimpleListMenu.css";

interface Props {
	options: any[];
}

export default function SimpleListMenu(props: Props) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedId,setSelectedId] = useState(-1);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
		setAnchorEl(event.currentTarget);
	};
	const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>,index: number) => {
		setSelectedId(index);
		setAnchorEl(null);
	}
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="ListMenu">
			{selectedId === -1 ? "Convert To..." : props.options[selectedId]}
			<Divider orientation="vertical" variant="middle" flexItem/>
			<div className="DropDownButtonContainer"onClick={(event)=>{
					const ev = event as unknown as React.MouseEvent<HTMLButtonElement>;
					handleClick(ev);
				}}>
				<ArrowDropDown/>
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
				'aria-labelledby': 'basic-button',
				}}
			>
				{props.options.map((option, index) => (
					<MenuItem
						key={option}
						disabled={false}
						selected={index === selectedId}
						onClick={(event) => handleMenuItemClick(event, index)}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}