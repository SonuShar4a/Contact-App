import React from "react";
let Model = ({ onClosed, isOpen, children }) => {
    return (
        <>
            {isOpen && (
                <>
                    <div className="model">
                        <div className="close">
                            <i onClick={onClosed} class="fa-solid fa-xmark"></i>
                        </div>
                        {children}
                    </div>
                    <div className="trans" />
                </>
            )}
        </>
    );
}

export default Model;