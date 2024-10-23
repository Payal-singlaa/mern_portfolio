import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCalendar } from "@fortawesome/free-solid-svg-icons";

import classes from './css/Education.module.css';
import { Card, List, ListItem, Tag, Text, useTheme } from "stelios";
import styled from "styled-components";

const StyledItemCircle = styled.div`
  background-color: ${props => props.$circleColor};
`;
const StyledTimeline = styled.div`
  background-color: ${props => props.$timelineColor};
`;
const StyledCard = styled(Card)`
  width: 45%;

  @media (max-width: 1100px) {
    width: 85%;
  }
`;

const Education = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];

    return (
        <div>
        <Text color="primary" size="large">Education</Text>
        <div id="educational-timeline" className={classes.timeline}>
            <StyledTimeline $timelineColor={_primaryBgColor} className={classes["time-line"]}>&nbsp;</StyledTimeline >
            <div className={`${classes["timeline-row"]} ${classes["timeline-row-first"]}`}>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                    <Text preciseColor={_color}>B.Tech (Computer Science)</Text>
                    <div className={classes["timeline-location"]}>
                        <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;JK Lakshmipat University</Text>
                        <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Aug 2022 - Aug 2026&nbsp;&nbsp;</Text>
                    </div>
                    <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                        <ListItem><Text size="small" preciseColor={_color}>1st sem</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Computational Data Analysis (Python)</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Fundamanentals of Automation Engineering</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Linear Algebra</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>SGPA: 7.8</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>2nd sem</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>OOP (Java)</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Basic Calculus</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>SGPA: 7.2</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>3rd sem</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Data Structures (C programming)</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>DBMS</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Computer Organization and Architecture</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA:8.0</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>4th sem</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Algorithms</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Machine Learning</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Operating Systems</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Optimization</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA: 7.2</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>CGPA: 7.57</Text></ListItem> 
                    </List>
                    <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Python</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Java</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C++</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>MySQL</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Machine Learning</Text></Tag></ListItem>
                    </List>
                    </>
                </StyledCard>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            </div>
            <div className={`${classes["timeline-row"]}`}>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                <div className={classes["timeline-circle"]}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                        <Text preciseColor={_color}>XII (CBSE)</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;DAV Public School</Text>
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;April 2021 - Jul 2022&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem><Text size="small" preciseColor={_color}>Marks: 81.2%</Text></ListItem>
                        </List>
                        
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                        </List>
                    </>
                </StyledCard>
            </div>
            <div className={`${classes["timeline-row"]}`}>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                        <Text preciseColor={_color}>X (CBSE)</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;St. Thomas Sr. Sec. School</Text>
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;April 2019 - March 2020&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem><Text size="small" preciseColor={_color}>Marks: 86.2%</Text></ListItem>
                        </List>
                    </>
                </StyledCard>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            </div>
        </div>
        </div>
    );
};

export default Education;