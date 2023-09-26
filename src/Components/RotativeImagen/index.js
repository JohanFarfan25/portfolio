import React, { useState } from 'react';
import './RotativeImagen.css';
import { IconButton } from '@mui/material';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';

const RotativeImagen = (props) => {

    const [mostrarDelante, setMostrarDelante] = useState(true);

    const { front_image, back_image } = props;

    const toggleImagen = () => {
        setMostrarDelante(!mostrarDelante);
    };

    return (
        <div className='container_rotative'>
            <div className={mostrarDelante ? "imagenDelante" : "imagenDetras"}>

                <div className="flip-container">
                    <div className="card" style={{ transform:mostrarDelante ? "rotateY(0deg)" :  "rotateY(-180deg)"}}>
                        <div className="frente">
                            <img src={front_image} alt="Imagen" />
                        </div>
                        <div className="dorso">
                            <img src={back_image} alt="Imagen" />
                        </div>
                    </div>
                </div>

                <span className='icon'>
                    <IconButton
                        size="large"
                        className="rigthBtn"
                        onClick={toggleImagen}
                    >
                        <CameraswitchIcon />
                    </IconButton>
                </span>
            </div>
        </div>
    );
}

export default RotativeImagen;
