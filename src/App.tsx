import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './App.css'

export default function App() {

  return (
    <div>
      <div className="Title">
        <div>re-Image</div>
        <CameraAltIcon data-testid="logo" fontSize='inherit'/>
      </div>
      <div className="Subtitle">The Simple Image Converter</div>
      <button className="ChooseFileButton">Choose File...</button>
    </div>
  )
}
