import { useState } from 'react'
import './App.css'
type Props = {
  lightBulbColor: string,
  lightBulbTextColor: string,
  buttonCopy: string,
  lightCopyOn: string,
  lightCopyOff: string
}
export default function Lightswitch({lightBulbColor, lightBulbTextColor, buttonCopy, lightCopyOn, lightCopyOff}: Props) {
  const [isLightOn, setIsLightOn] = useState(false);

  const flipSwitch = () => {
    if (!isLightOn) {
      setIsLightOn(true);
    } else {
      setIsLightOn(false);
    }
  }

  return (
    <div className="mb-6">
      <button className="button mb-4" onClick={flipSwitch}>{buttonCopy}</button>
      <div className={`p-4 border my-0 mx-auto ${isLightOn && lightBulbColor + ' ' + lightBulbTextColor}`}>{isLightOn ? lightCopyOn : lightCopyOff}</div>
    </div>
  )
}
