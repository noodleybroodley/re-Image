import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './App.css'
import { useState } from 'react';
import FileInfoBar from './components/FileInfoBar/FileInfoBar';

export default function App() {
  const [file, setFile] = useState<File>();

  function getTheFile(){
    const inputElement = document.getElementById("input") as HTMLInputElement;
    const files = inputElement.files;
    if(files!=null){
      setFile(files[0]);
    }
  }

  return (
    <div className="Homepage">
      <div className="Title">
        <div>re-Image</div>
        <CameraAltIcon data-testid="logo" fontSize='inherit' />
      </div>
      <div className="Subtitle">The Simple Image Converter</div>
      {!!file ?
        <FileInfoBar file={file} setFile={setFile} />
        :
        <div className='ChooseFileButton'>
          <label htmlFor="input">Choose File...</label>
          <input id="input" type="file" accept="image/png,image/jpeg,image/apng,image/avif,image/gif,image/webp,image/heic" onChange={getTheFile}/>
        </div>
      }
    </div>
  )
}
