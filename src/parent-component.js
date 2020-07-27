import React from 'react';

const ParentComponent = (props) => {
    return (
        <div>
            <p>Parent component</p>
            {props.children}
            <p>After children content</p>
        </div>
    );
};

export default ParentComponent;
