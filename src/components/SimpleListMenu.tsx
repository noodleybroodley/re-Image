import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

interface Props {
	options: any[];
}

export default function SimpleListMenu(props: Props) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const open = Boolean(anchorEl);
	const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLElement>,
		index: number,
	) => {
		setSelectedIndex(index);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<List
				component="nav"
				aria-label="Device settings"
				sx={{ bgcolor: 'background.paper' }}
			>
				<ListItemButton
					id="lock-button"
					aria-haspopup="listbox"
					aria-controls="lock-menu"
					aria-label="convert to..."
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClickListItem}
				>
					<ListItemText
						primary={selectedIndex === -1 ? "Convert to..." : props.options[selectedIndex]}
					/>
				</ListItemButton>
			</List>
			<Menu
				id="lock-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'lock-button',
					role: 'listbox',
				}}
			>
				{props.options.map((option, index) => (
					<MenuItem
						key={option}
						disabled={index === 0}
						selected={index === selectedIndex}
						onClick={(event) => handleMenuItemClick(event, index)}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}