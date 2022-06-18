import React,{useState} from 'react'
import './Dashboard.css'
import Currency from './Currency'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from '@emotion/styled/types/base';
import styledComponents from "styled-components";
import { iconClasses } from '@mui/material';
import { color, style } from '@mui/system';

type Props = {}

function Dashboard({}: Props) {
    const [style,setStyle]=useState("unsync")
    const [text,setText]=useState("Synchronize")
    

    
    const Changestyle:any=(text:string)=>{
        console.log("you clicked the tick icon");
        text="";
        setStyle("sync");
        setText("Synchronized")

    }
  return (
    <div className='dashboard'>
        
        <div className="dashboard_sync">
            <div className={style}>
                 <CheckCircleOutlineIcon onClick={Changestyle}/> 
                <h4>
                {text}</h4>
                 
            </div>
        </div>
        <div className="dashboard_addcoin">
            <h2>Wallet 1</h2>
            <button className='add_button'>+ Add Button
            </button>
        </div>
        <div className="dashboard_sort">
           <h4 >Total Coin - 3 </h4> 
        </div>
        <div className="dashboard_coins">
            
            <Currency/>

            
        </div>
        </div>
  )
}

export default Dashboard