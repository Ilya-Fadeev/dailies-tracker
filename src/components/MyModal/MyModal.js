import React from 'react';
import './mymodal.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClass = ['myModal'];

    if (visible) {
        rootClass.push('active');
    }

    return (
        <div className={rootClass.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={'myModalContent'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;