import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./ProjectCard.css";
import { FaGlobe, FaAppStore, FaGooglePlay, FaGithub, FaNpm } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { isMobile } from "react-device-detect";


interface Links {
    playstore?: string;
    appstore?: string;
    github?: string;
    npmurl?: string;
    weburl?: string;
}


export interface Project {
    title: string;
    projectType: string;
    body: string;
    date: string;
    code?: string;
    codeLang?: string;
    image?: string[];
    imagePadding?: string;
    links?: Links;    
}

interface Props {
    project: Project;
}

export default function ProjectCard(props: Props) {
    let linkIconsContainer: React.CSSProperties = {marginRight: '0.5rem', marginTop: -2};
    let linkRow: React.CSSProperties = {marginRight: 0, marginLeft: 0, alignItems: 'center'};
    const [loading, setLoading] = useState(props.project.image?.map((i) => (true)));

    const checkIfLoading = (arr: boolean[]) => {
        for(let i=0; i<arr.length; i++){
            if(arr[i]){
                console.log('true');
                return true;
            }
        }
        return false;
    }

    return (
        <Card style={{ maxWidth: isMobile ? '95vw' : '25vw', margin: 8, borderColor: '#ccc', borderWidth: 1}}>
            <Card.Header>
                <Card.Title style={{textAlign: 'center', fontSize: '1.5rem', paddingTop: '0.5rem'}}>{props.project.title}</Card.Title>
                <Row style={{justifyContent: 'space-between', paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <Card.Subtitle style={{fontSize: 12}} className="mt-2 text-muted">{props.project.projectType}</Card.Subtitle>
                    <Card.Subtitle style={{fontSize: 12}} className="mt-2 text-muted">{props.project.date}</Card.Subtitle>
                </Row>
            </Card.Header>
            {
                props.project.image !== undefined ?
                    <div>
                        <Card.Body style={{paddingTop: '0.1rem', paddingBottom: '0.1rem'}}>
                            <div style={{paddingLeft: props.project.imagePadding !== undefined ? props.project.imagePadding : (isMobile ? '6vw' : '2vw'), paddingRight: props.project.imagePadding !== undefined ? props.project.imagePadding : (isMobile ? '6vw' : '2vw')}}>
                                <div style={{textAlign: 'center', marginBottom: '1rem'}}>
                                    {
                                        checkIfLoading(loading!) ? 
                                            <Spinner animation="border" />
                                            :
                                            <div/>
                                    }
                                </div>
                                <Carousel autoPlay={true} interval={3000} infiniteLoop={true} >
                                    {
                                        props.project.image.map((i) => (
                                            <Card.Img variant="top" src={i}
                                            style={checkIfLoading(loading!) ? {visibility: 'hidden'} : {}}
                                            onLoad={() => {
                                                let arr = [...loading!];
                                                for(let i=0; i<arr.length; i++){
                                                    if(arr[i]){
                                                        arr[i] = false;
                                                        break;
                                                    }
                                                }
                                                setLoading(arr);
                                            } } />
                                        ))
                                    }   
                                </Carousel>
                            </div>
                            </Card.Body>
                            <hr/>
                        </div>
                    :
                    <div/>
            }
            {
                props.project.code !== undefined ?
                    <hr/>
                    :
                    <div/>
            }
            {
                props.project.code !== undefined ?
                    <div>
                        <Card.Body style={{paddingTop: '0.1rem', paddingBottom: '0.1rem'}}>
                            <SyntaxHighlighter language={props.project.codeLang !== undefined ? props.project.codeLang : "javascript"} style={github}>
                                    {props.project.code}
                            </SyntaxHighlighter>
                        </Card.Body>
                        <hr/>
                    </div>
                    :
                    <div/>
            }
            <Card.Body style={{paddingTop: '0.75rem', paddingBottom: '0.75rem'}}>
                <Card.Text>{props.project.body}</Card.Text>
            </Card.Body>
            {
                props.project.links !== undefined ?
                    <div>
                        <hr/>
                        <Card.Body style={{paddingTop: '0.5rem', paddingBottom: '1rem'}}>
                            {
                                props.project.links.playstore !== undefined ?
                                    <Row style={linkRow}>
                                        <div style={linkIconsContainer}><FaGooglePlay/></div><a href={props.project.links.playstore} target="_blank" rel="noopener noreferrer">Play Store</a>
                                    </Row>
                                    :
                                    <div/>
                            }
                            {
                                props.project.links.appstore !== undefined ?
                                    <Row style={linkRow}>
                                        <div style={linkIconsContainer}><FaAppStore/></div><a href={props.project.links.appstore} target="_blank" rel="noopener noreferrer">App Store</a>
                                    </Row>
                                    :
                                    <div/>
                            }
                            {
                                props.project.links.github !== undefined ?
                                    <Row style={linkRow}>
                                        <div style={linkIconsContainer}><FaGithub/></div><a href={props.project.links.github} target="_blank" rel="noopener noreferrer">Github</a>
                                    </Row>
                                    :
                                    <div/>
                            }
                            {
                                props.project.links.npmurl !== undefined ?
                                    <Row style={linkRow}>
                                        <div style={linkIconsContainer}><FaNpm/></div><a href={props.project.links.npmurl} target="_blank" rel="noopener noreferrer">NPM</a>
                                    </Row>
                                    :
                                    <div/>
                            }
                            {
                                props.project.links.weburl !== undefined ?
                                    <Row style={linkRow}>
                                        <div style={linkIconsContainer}><FaGlobe/></div><a href={props.project.links.weburl} target="_blank" rel="noopener noreferrer">Website</a>
                                    </Row>
                                    :
                                    <div/>
                            }
                        </Card.Body>
                    </div>
                :
                <div/>
            }
        </Card>
    )
}
