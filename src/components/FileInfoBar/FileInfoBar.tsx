import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import SimpleListMenu from '../SimpleListMenu/SimpleListMenu';
import './FileInfoBar.css';
import SplitButton from '../SplitButton/SplitButton';

interface Props {
	file: File,
	setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

export default function FileInfoBar (props: Props) {
	const [progress, setProgress] = useState<number>(0);
	return (
		<div className="InfoBarContainer">
			<CloseIcon data-testid="CloseIcon" onClick={()=>{console.log("guh")}}/>
			<div className="InfoBar" data-testid="InfoBar">
				<CircularProgress data-testid="ProgressBar" className="ProgressBar" value={progress}/>
				{props.file.name.length < 13 ? props.file.name : props.file.name.slice(0,13) + "..."}
				{/* <SimpleListMenu options={['png','gif']}/> */}
				<SplitButton/>
			</div>
		</div>
	)
}