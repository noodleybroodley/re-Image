import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import './FileInfoBar.css';
import SplitButton from '../SplitButton/SplitButton';

interface Props {
	file: File,
	setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

export default function FileInfoBar (props: Props) {
	const [progress, setProgress] = useState<number>(0);
	const [thumbnailURL, setThumbnailURL] = useState<string | null | ArrayBuffer>();
	const reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      setThumbnailURL(dataURL);
    };
    reader.readAsDataURL(props.file);

	let fileNameList = props.file.name.split('.');
	if(fileNameList[0].length > 10){
		fileNameList[0] = fileNameList[0].slice(0,11)+"...";
	}
	const fileName = fileNameList.join('.');
	return (
		<div className="InfoBarContainer">
			<CloseIcon className="CloseIcon" data-testid="CloseIcon" onClick={()=>{props.setFile(undefined)}}/>
			<div className="InfoBar" data-testid="InfoBar">
				{/* <CircularProgress data-testid="ProgressBar" className="ProgressBar" value={progress}/> */}
				{/* {!!thumbnailURL ? <img className={"FileThumbnail"} src={`${thumbnailURL}`}/> : <></>} */}
				<img className={"FileThumbnail"} src={`${thumbnailURL}`}/>
				{fileName}
				<SplitButton/>
			</div>
		</div>
	)
}