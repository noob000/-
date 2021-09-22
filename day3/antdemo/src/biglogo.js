import { useEffect, useState, useRef } from "react";
import './biglogo.css';
export default function Biglogo() {
    const logolist = [
        'https://gw.alipayobjects.com/zos/basement_prod/ad510b94-5f85-4b30-b929-2e3a34ad673c.svg',
        'https://gw.alipayobjects.com/zos/basement_prod/fef2f3d5-9326-48e3-a8f3-a99584efd425.svg',
        'https://gw.alipayobjects.com/zos/basement_prod/29aa8cd8-de97-42b8-a370-f901be43e18a.svg',
        'https://gw.alipayobjects.com/zos/basement_prod/43d010fa-71ac-44e3-8475-bb77d95c331c.svg',
        'https://gw.alipayobjects.com/zos/basement_prod/95736b64-de90-4fcd-bae9-a827091a247d.svg'
    ]
    const l = logolist.length;
    const [index, setIndex] = useState(0)
    let timer = useRef()
    function setTimer() {
        timer.current = setInterval(() => {
            setIndex((index) => ++index);
        }, 100)
    }
    function clearTimer(){
        clearInterval(timer.current)
    }


    return (
        <div>
            <div className='iconContainer'>
                <img src={logolist[index % l]} className='icon' />
            </div>
            <img
                onMouseEnter={setTimer}
                onMouseLeave={clearTimer}
                className='logo'
                src={"https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"} />
        </div>
    )
}