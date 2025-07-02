import React from 'react';
import './triangle.css'

export default function TriangleButton({ type, label, onClick, isHidden, index }) {
    return (
        <div
            className={`triangle-wrapper ${type} ${isHidden ? 'slide-up': ''}`}
            onClick={onClick}
        >
            <div className='triangle'></div>
            <span className='label'>{label}</span>
        </div>
    )
}