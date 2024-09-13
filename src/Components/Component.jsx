import { useState } from 'react';
import './Component.css';
function Changer(){
    const [color,setcolor] = useState('white')
    return(
        <>
            <div style={{backgroundColor: color}} className='screen'>

                <div className='bar'>
                    <button className='black btn' onClick={()=>setcolor('black')}>Black</button>

                    <button onClick={()=>setcolor('red')} className='red btn'>Red</button>

                    <button onClick={()=>setcolor('skyblue')} className='blue btn'>Blue</button>

                    <button onClick={()=>setcolor('greenyellow')} className='green btn'>Green</button>

                    <button onClick={()=>setcolor('orange')} className='orange btn'>Orange</button>
                </div>
            </div>
        </>
    );
}

export default  Changer;