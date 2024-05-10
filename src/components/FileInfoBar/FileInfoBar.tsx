import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

interface Props {
	file: File,
	setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

export default function FileInfoBar (props: Props) {
	const [progress, setProgress] = useState<number>(0);
	return (
		<div>
			<CloseIcon data-testid="CloseIcon" onClick={()=>{console.log("guh")}}/>
			<div data-testid="InfoBar">
				<CircularProgress data-testid="ProgressBar" value={progress}/>
				{props.file.name}
				<button data-testid="Dropdown">Convert to...</button>
			</div>
		</div>
	)
}