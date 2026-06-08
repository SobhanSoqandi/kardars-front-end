import React from 'react'
import { useNavigate } from 'react-router-dom';

function CancleBtn() {

    const navigate = useNavigate();

    return (
        <button 
        onClick={() => navigate(-1) }
        type="button" className="shadow w-full btn">
            انصراف
        </button>
    )
}

export default CancleBtn;