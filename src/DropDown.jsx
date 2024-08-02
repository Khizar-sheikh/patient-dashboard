import React from 'react';
import { ChevronDown } from "lucide-react"

const Dropdown = ({ value, options, onChange }) => {
    return (
        <div className="dropdown">
            <div className="dropdown-button flex items-center text-xs">{`Last ${value} months`}
                <span><ChevronDown size={16} className="text-xs" /></span>
            </div>
            <div className="dropdown-content">
                {options.map(option => (
                    <div key={option} onClick={() => onChange(option)}>
                        {`Last ${option} months`}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
