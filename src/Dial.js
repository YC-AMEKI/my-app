import React, { useState } from 'react';
import './Dial.css';

const Dial = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const getRotation = (value) => {
        // 将值转换为角度，这里假设值的范围是0到100
        return (value / 100) * 360;
    };

    return (
        <div className="dial-container">
            <div
                className="dial"
                style={{ transform: `rotate(${getRotation(value)}deg)` }}
            >
                <div className="pointer"></div>
            </div>
            <input
                type="range"
                min="-50"
                max="50"
                value={value}
                onChange={handleChange}
                className="slider"
            />
        </div>
    );
};

export default Dial;
