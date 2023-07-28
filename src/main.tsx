import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Lightswitch from './Lightswitch.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Lightswitch lightBulbColor = {'bg-yellow-300'} lightBulbTextColor = {'text-slate-950'} buttonCopy={'flip switch'} lightCopyOn={'light is on'} lightCopyOff={'light is off'}/>
    <Lightswitch lightBulbColor = {'bg-yellow-100'} lightBulbTextColor = {'text-slate-700'} buttonCopy={'flip this'} lightCopyOn={'brightness bb'} lightCopyOff={'lites out'}/>
    <Lightswitch lightBulbColor = {'bg-yellow-500'} lightBulbTextColor = {'text-neutral-950'} buttonCopy={'flick me'} lightCopyOn={'hallelujah'} lightCopyOff={'hello darkness my old friend'}/>
  </React.StrictMode>,
)
