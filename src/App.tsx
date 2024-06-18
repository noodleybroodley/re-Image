import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './App.css'
import { useState } from 'react';
import FileInfoBar from './components/FileInfoBar/FileInfoBar';

export default function App() {
  const [file, setFile] = useState<File>();
  //define settings for file picker
  const pickerOpts = {
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  /** Opens the system file picker and saves it to the "file" variable.
   * @param none
   * @returns none
  */
  async function getTheFile() {
    // Open file picker and destructure so to grab the first element of the returned list
    //@ts-ignore
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

    // get file contents
    const fileData = await fileHandle.getFile();
    console.log(fileData)
    setFile(fileData);
  }

  return (
    <div className="Homepage">
      <div className="Title">
        <div>re-Image</div>
        <CameraAltIcon data-testid="logo" fontSize='inherit' />
      </div>
      <div className="Subtitle">The Simple Image Converter</div>
      {file ?
        <FileInfoBar file={file} setFile={setFile} />
        :
        <button className="ChooseFileButton" onClick={getTheFile}>Choose File...</button>}
    </div>
  )
}
