import "./ProfessionalExperience.css";
import React from 'react';
import { useState } from "react";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LogoBodytech from "../../Logo/Bodytech";

import { ProfessionalExperienceList } from "./ProfessionalExperienceList";

const ProfessionalExperience = () => {

    const [open, setOpen] = useState(0);

    const handleClick = (index) => {
        if(index == open){
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
                            {(item.id == open) ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={item.id == open} timeout="auto" unmountOnExit>
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