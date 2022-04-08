import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Guitar from "../../music/guitar/audio";
import "./styles.css";
import Keyboard from "../../music/keyboard/audio";
import { Fade } from "react-awesome-reveal";

export default function Music() {
  const [song, setSong] = useState(Guitar[0]);

  return (
    <Container fluid style={{ height: "90vh", display: "flex" }}>
      <Row style={{ margin: "auto" }}>
        <Col md={3} />
        <Col md={6} xs={12} style={{ marginTop: "5vh", marginBottom: "5vh" }}>
          <Container style={{ marginBottom: "2vh" }}>
            <Fade triggerOnce direction="left" duration={750}>
              <Card style={{ backgroundColor: "#f9f9f9" }}>
                <Card.Body>
                  <div
                    style={{
                      height: "60vh",
                      overflow: "auto",
                      backgroundColor: "#f7f7f7",
                      borderRadius: 8,
                      border: "1px solid #ddd",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 20,
                        paddingBottom: 16,
                        borderBottom: "1px solid black",
                        paddingTop: 16,
                        paddingLeft: 20,
                        backgroundColor: "#343a40",
                        color: "white",
                      }}
                    >
                      Guitar
                    </div>
                    <div>
                      {[...Guitar].map((i, index) => (
                        <div
                          onClick={() => {
                            setSong(i);
                          }}
                          className="SongLink"
                          style={
                            song.item === i.item ? { backgroundColor: "#cccccc" } : {}
                          }
                        >
                          <div style={{ padding: 8 }}>
                            {i.name + ".m4a"}
                          </div>
                          <div
                            style={{ borderBottom: "1px solid black" }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        fontSize: 20,
                        paddingBottom: 12,
                        borderBottom: "1px solid black",
                        paddingTop: 12,
                        paddingLeft: 20,
                        backgroundColor: "#343a40",
                        color: "white",
                      }}
                    >
                      Keyboard
                    </div>
                    <div>
                      {[...Keyboard].map((i, index) => (
                        <div
                          onClick={() => {
                            setSong(i);
                          }}
                          className="SongLink"
                          style={
                            song.item === i.item ? { backgroundColor: "#cccccc" } : {}
                          }
                        >
                          <div style={{ padding: 8 }}>
                            {i.name + ".m4a"}
                          </div>
                          <div
                            style={{ borderBottom: "1px solid black" }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Row style={{ justifyContent: "center" }}>
                    <ReactAudioPlayer
                      style={{ marginTop: 12 }}
                      src={song.item}
                      autoPlay
                      controls
                      preload="metadata"
                    />
                  </Row>
                </Card.Body>
              </Card>
            </Fade>
          </Container>
          <Container>
            <Fade triggerOnce direction="left" duration={850}>
              <Card style={{ backgroundColor: "#f9f9f9" }}>
                <Card.Body>
                  <div>
                    Keep in mind that most of these are old while I was still
                    learning, and I just play as a hobby. All of them are
                    recorded with my somewhat descent phone recorder. With that
                    said, I hope you enjoy listening! :)
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Container>
        </Col>
        <Col md={3} />
      </Row>
    </Container>
  );
}
