import "./ProfessionalExperience.css";
import React from 'react';
import { useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import { ProfessionalExperienceList } from "./ProfessionalExperienceList";

const ProfessionalExperience = () => {

    const [open, setOpen] = useState(0);

    const handleClick = (index) => {
        if(index === open){
            setOpen(null);
        }else{
 setOpen(index);
        }
       
    };

    return (
        <section className="profetional_experience" id="professional">
            <h1 className="profetional_experience__title">Experiencia profesional</h1>
            <div className="profetional_experience__description">
                {ProfessionalExperienceList.map((item, index) => (
                    <List
                        key={index}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <div className="list__title">
                                     {item.title}
                                </div>
                            
                            </ListSubheader>
                        }
                    >
                        <ListItem button onClick={()=>handleClick(index)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText >
                                <div className="list__subtitle">
                                 {item.subTitle} 
                                </div>
                            </ListItemText>
                            {(item.id === open) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItem>
                        <Collapse in={item.id === open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    item.list.map((value,index) => (
                                        <div className="container__list__itmens" key={index}>
                                            <ListItemIcon>
                                                <RadioButtonCheckedIcon />
                                            </ListItemIcon>
                                            <ListItemText >
                                                <div className="list__items">
                                                    {value.description}
                                                </div>
                                            </ListItemText>
                                        </div>
                                    ))
                                }
                            </List>
                        </Collapse>
                    </List>
                ))}

            </div>
        </section>
    )
}

export default ProfessionalExperience