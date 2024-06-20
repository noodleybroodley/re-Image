import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import './FileInfoBar.css';
import React from 'react';
import Selector from '../Selector/Selector';
import { Download } from '@mui/icons-material';
import { convertFile, downloadFile } from '../../utils/utils';

interface Props {
	file: File,
	setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

export default function FileInfoBar (props: Props) {
	const [thumbnailURL, setThumbnailURL] = useState<string | null | ArrayBuffer>();
	const [selectedType,setType] = React.useState('');
	const reader = new FileReader();

	let fileNameList = props.file.name.split('.');
	if(fileNameList[0].length > 10){
		fileNameList[0] = fileNameList[0].slice(0,11)+"...";
	}
	const fileName = fileNameList.join('.');
	const fileType = props.file.type.split('/')[1];

    reader.onload = function () {
      const dataURL = reader.result;
      setThumbnailURL(dataURL);
    };
    reader.readAsDataURL(props.file);
	
	const handleDownload = () => {
		const newFile = convertFile(props.file,selectedType);
		console.log(newFile);
		let downloadURL = URL.createObjectURL(newFile);
		downloadFile(downloadURL,newFile.name);
	};

	return (
		<div className="InfoBarContainer">
			<CloseIcon className="CloseIcon" data-testid="CloseIcon" onClick={()=>{props.setFile(undefined)}}/>
			<div className="InfoBar" data-testid="InfoBar">
				<img className="FileThumbnail" data-testid="FileThumbnail" src={`${thumbnailURL}`}/>
				{fileName}
				<Selector type={fileType} selectedType={selectedType} setType={setType}/>
				{selectedType != '' ?
					<Download className='DownloadButton' onClick={handleDownload}/>
					:
					<></>
				}
			</div>
		</div>
	)
}