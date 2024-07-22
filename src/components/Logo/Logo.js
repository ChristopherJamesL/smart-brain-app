import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt
                className='Tilt br2 shadow-2'
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                style={{ 
                    height: '150px', 
                    width: '150px', 
                    position: 'relative', /* Ensure the tilt effect works correctly */
                 }}
            >
                <div style={{ 
                    height: '100%', 
                    width: '100%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                 }}>
                    <img alt='logo' src={brain} />
                </div>
            </Tilt>
        </div>   
    );
}

export default Logo;