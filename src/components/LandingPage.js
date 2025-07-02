import React from "react";
import TriangleButton from "./TriangleButton";
import { useState } from "react";
import './LandingPage.css'

export default function LandingPage(){
    const [selected, setSelected] = useState(null)
    // const [hasMounted, setHasMounted] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => setHasMounted(true), 10); // 10ms достаточно
    //     return () => clearTimeout(timer);
    //   }, []);

    const buttons = [
        { id: 1, type: 'up', label: 'Web3 Aeterno' },
        { id: 2, type: 'down', label: 'lorem' },
        { id: 3, type: 'right', label: 'lorem' },
        { id: 4, type: 'left', label: 'lorem' },
    ]

    const handleBack = () => {
        setSelected(null); // сбрасываем выбор
    };

    return (
        <div className="landing">
            <div className={`button-row ${selected ? 'hidden' : 'visible'}`}>
                {buttons.map((btn, index) => (
                    <TriangleButton 
                        key={btn.id}
                        type={btn.type}
                        label={btn.label}
                        onClick={() => setSelected(btn.id)}
                        isHidden={selected !== null}
                        index={index}
                        // isVisible={selected === null && hasMounted}
                    />
                ))}
            </div>

            {selected && (
                <div className="content">
                    <div className="back-container">
                        <button className="back-button" onClick={handleBack}>
                            ⬅ Back
                        </button>
                    </div>
                    <h2>{buttons.find(b => b.id === selected).label}</h2>
                    <p>Тут может быть ваша реклама</p>
                </div>    
            )}
        </div>
    )
}