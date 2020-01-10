import React from "react";
import userConfig from "../../../config";

import Container from "../Container";
import HeaderImage from "../HeaderImage";
import Social from "../Social";
import H1 from "../H1";
import P from "./P";
import Link from "./Link";
import Wrapper from "./Wrapper";
import H2 from "../H2";

function Header({ config }) {
  const { author, description } = config;
  const social = undefined;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && <HeaderImage />}
        <H1>
          <Link to="/">{author}</Link>
        </H1>
        <P>{description}</P>
        <H2>
          <Link to="/about">About</Link>
        </H2>
        {social && <Social github={social.github} linkedin={social.linkedin} />}
      </Wrapper>
    </Container>
  );
}

export default Header;
