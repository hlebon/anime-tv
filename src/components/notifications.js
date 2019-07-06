import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 2rem;
  background: transparent;
`;

function Noti({ messages = [] }) {
  return (
    <>
      {messages.length > 0 ? (
        <Container>
          {messages.map((message, index) => {
            return (
              <div
                key={index}
                style={{
                  minWidth: "150px",
                  margin: "0.5rem 0",
                  padding: "1rem 1.5rem",
                  textAlign: "center",
                  background: "rgb(87,217,163)",
                  color: "rgb(23,43,77)",
                  borderLeft: "3px solid black",
                  boxShadow: "1px 3px 7px #57d9c15e"
                }}
              >
                {message}
              </div>
            );
          })}
        </Container>
      ) : null}
    </>
  );
}

export function WithNotifications(WrapperComponent) {
  function WithState(props) {
    const [messages, setMessages] = React.useState([]);

    function showNotification(m, t = 1) {
      setMessages(n => [...n, `${m}`]);
      setTimeout(() => {
        setMessages(n => n.slice(1));
      }, 1000 * t);
    }
    return (
      <>
        <WrapperComponent showNotification={showNotification} {...props} />
        <Noti messages={messages} />
      </>
    );
  }

  return WithState;
}

export default Noti;
