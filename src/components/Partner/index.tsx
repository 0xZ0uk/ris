import React, { useState } from 'react';

interface IPartner {
    name: string;
    enabledImage: any;
    disabledImage: any;
}

const imageOptions = {
    width: '80%',
    margin: '0 auto'
}

const Partner = ({ name, enabledImage, disabledImage }: IPartner) => {
    const [toggle, setToggle] = useState(false);

    const handleHoverIn = () => {
        setToggle(true);
    }

    const handleHoverOut = () => {
        setToggle(false);
    }

    return (
        <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} style={{ display: 'flex', justifyContent: 'center' }}>
            { toggle ? <img src={enabledImage} alt={name} style={imageOptions} /> : <img src={disabledImage} alt={name} style={imageOptions} />}
        </div>
    )
}

export default Partner;