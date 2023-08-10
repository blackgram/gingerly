import React from "react";
import { Container, Div1, H1, Image, Button } from "./CTAStyles";

const CTA = () => {
  return (
    <Container>
      <Div1>
        <H1>Shopping made easy</H1>
        <H1>Create your digital wallet in just a few clicks.</H1>
        <H1>
          Add your cards and pay with your phone everywhere. Convenience is the
          key.
        </H1>
        <Button href="#">
          <div
            style={{
              width: "150px",
              height: "50px",
              borderRadius: "20px",
              border: "2px solid #BA68C8",
              background: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Buy it Now</div>
            <img style={{padding: "5px"}} src="/assets/arrow.svg" alt="arrow" />
          </div>
        </Button>
      </Div1>
      <Image src='/assets/Group60.png' />
    </Container>
  );
};

export default CTA;
