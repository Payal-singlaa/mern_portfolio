import { Fragment } from 'react';
import classes from './css/Experience.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Card, List, ListItem, Tag, Text, useTheme } from 'stelios';
import styled from 'styled-components';

const StyledTimeline = styled.div`
  background-color: ${props => props.$timelineColor};
`;
const StyledTimelineItemCircle = styled.div`
  background-color: ${props => props.$circleColor};
`;
const StyledCard = styled(Card)`
  width: 45%;

  @media (max-width: 1100px) {
    width: 85%;
  }
`;


const Experience = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];
    
    return (
        <div>
            <Text size="large" color="primary" className={`${classes.experienceTitle} title`}>Projects</Text>
            <div className={classes.timeline}>
                <div className={`${classes["timeline-row"]} ${classes["timeline-row-first"]}`}>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                    <div className={classes["timeline-circle"]}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}></StyledTimelineItemCircle></div>
                    <StyledCard  className={classes["timeline-item"]} style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                        <>
                        <Text preciseColor={_color}>Automatic Water Dispenser</Text>
                        <div className={classes["timeline-location"]} style={{paddingLeft: "1rem"}}>
                            <Text size="small" preciseColor={_color} variant='span'>Automation-Iot based project</Text>
                        </div>
                        <div className={classes["timeline-description"]} style={{paddingLeft: "1rem"}}>
                            <Text preciseColor={_color} size="small" variant="paragraph">Developed an automatic water dispensing system using sensor-based automation to control water flow. Also was designed with sustainability in mind, aligning with the SDG goals by promoting responsible water consumption and minimizing waste through automation.</Text>
                        </div>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Arduino IDE</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Microcontrollers</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Sensors</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Automation</Text></Tag></ListItem>
                        </List>
                        </>
                    </StyledCard>
                </div>
                <div className={`${classes["timeline-row"]}`}>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary" className={classes["timeline-item"]}>
                        <>
                            <Text preciseColor={_color}>Movie Recommendation System</Text>
                            <div className={classes["timeline-location"]} style={{paddingLeft: "1rem"}}>
                            <Text size="small" preciseColor={_color} variant='span'>Machine Learning project</Text>
                            </div>
                            <div className={classes["timeline-description"]} style={{paddingLeft: "1rem"}}>
                            <Text preciseColor={_color} size="small" variant="paragraph">Developed a movie recommendation system that allows users to enter a movie name, after which the system suggests similar films based on user preferences and movie attributes. Enhancing the user experience by providing personalized suggestions in real-time, enabling users to discover new films that match their tastes.</Text>
                        </div>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Python</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Data processing</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>ML Algorithms</Text></Tag></ListItem>
                        </List>
                        </>
                    </StyledCard>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                </div>
                <div className={`${classes["timeline-row"]}`}>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                    <div className={classes["timeline-circle"]}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary" className={classes["timeline-item"]}>
                        <>
                            <Text preciseColor={_color}>Data Analysis for SDG 3</Text>
                            <div className={classes["timeline-location"]} style={{paddingLeft: "1rem"}}>
                            <Text size="small" preciseColor={_color} variant='span'>Computational Data Analysis project</Text>
                            </div>
                            <div className={classes["timeline-description"]} style={{paddingLeft: "1rem"}}>
                            <Text preciseColor={_color} size="small" variant="paragraph">Utilized statistical techniques and data visualization tools to uncover patterns in health metrics, such as disease prevalence, healthcare access, and life expectancy. Aiming to provide actionable insights to improve health outcomes, reduce inequalities, and support decision-making for global health initiatives.</Text>
                        </div>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Statistics</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Pandas</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Data Visualization</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Python</Text></Tag></ListItem>
                        </List>
                        </>
                    </StyledCard>
                </div>
                <div className={`${classes["timeline-row"]}`}>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary" className={classes.timeline}>
                        <>
                            <Text preciseColor={_color}>Face Mask Detection</Text>
                            <div className={classes["timeline-location"]} style={{paddingLeft: "1rem"}}>
                            <Text size="small" preciseColor={_color} variant='span'>ML project</Text>
                            </div>
                            <div className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <Text preciseColor={_color} size="small" variant="paragraph">Utilized Convolutional Neural Networks (CNN) to identify whether individuals are wearing face masks in real-time. Enhancing public safety by automating monitoring in public places.</Text>
                            </div>
                            <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>CNN</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Image Processing</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>TensorFlow</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Keras</Text></Tag></ListItem>
                            </List>
                        </>
                    </StyledCard>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                </div>
                <StyledTimeline $timelineColor={_primaryBgColor} className={classes["time-line"]}>&nbsp;</StyledTimeline >
            </div>
        </div>
  );
}

export default Experience;