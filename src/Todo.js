import React, { useState } from 'react'
import './Todo.css'
function Todo() {
    const [val, setval] = useState('');
    const [arr, setarr] = useState([]);
    const [show, setshow] = useState('false')
    const [getid, setgetid] = useState();
const [toggle, settoggle] = useState(true)
    const lets = (event) => {
        let value = event.target.value;
        setval(value);


    }
    
    const additem = () => {
        if (val === ''||arr==='') {

        }
       
        
        else {
            setshow('true');
            setarr((value) => {



                return [...value, val]
            })
            setval('');
        }
    }
    const del =(get) => {
        
          const update=  arr.filter((val,id)=>{
                return id!==get
            })
            if(arr.length===1)
            {
                setshow('false');
            }
            setarr(update);
    }
  const dele=()=>{
setarr([]);
setshow('false');
  }
  let game;
const edit=(get) => {
    setgetid(get);
    settoggle(false)
  setval(arr[get]);
  
}

const editing=()=>{
    settoggle(true);
    const arr2=[...arr];
    console.log(arr2);
    arr2[getid]=val;
    setarr(arr2);
    setval('');

}

    return (
        <>

            <div className="card">

                <input type="text" placeholder='Add item'
                    onChange={lets} value={val}
                />
                {
                    toggle?<button onClick={additem}>+</button>:
                    <button onClick={editing} >Edit</button>

                }


            </div>
            <div className="showitems">

                {
                    arr.map((val,id)=>{

                            return(
                                <>
                                <div className="ans">

                               
                                <input type="text"  value={val}/>
                                <button onClick={()=>{
                                    del(id)
                                }}>-</button>
                                <button onClick={()=>{
                                    edit(id)
                                }}>edit</button>
                                 </div>
                                </>
                            )


                    })
                }


            </div>
         { show=='true'&&<button onClick={dele}>Remove ALL</button>}




        </>
    )
}

export default Todo
