
import {Camera,Trash,Icon} from 'lucide-react';
import { planet,burger } from '@lucide/lab';

function App() {

  return (
    <>
      <Camera color='blue' size={48} strokeWidth={1}/>
      <Trash color='green' size={48} strokeWidth={1}/>
      <Icon iconNode={planet}  size={48} color='grey'/>
      <Icon iconNode={burger}  size={48} color='brown' strokeWidth={2}/>
    </>
  )
}

export default App
