import React from "react";
import Layout from "../templates/layout";
import Article from "../components/Article";
import Card from "../components/Card";
import Container from "../components/Container";
import Social from "../components/Social";
import { social } from "../../config";

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Card>
          <Article>
            <Social github={social.github} />
            <hr />
            <div>
              <p>
                When I started my programming journey, I didn't have a mentor or
                someone that could have helped me during my struggles of
                learning how to program.
              </p>
              <p>
                Now, after almost 5 years of someone paying me to write code, I
                decided to try to change that for others, and help as many
                people as I can on their journey. And what better way than to
                start yet another programming blog?!
              </p>
              <p>
                So I hope this blog will serve you, reader, as a mentor I didn't
                have, and help you clarify things while learning, or just give
                you motivation to persist on your journey. Because it's worth
                it, trust me!
              </p>
              <p>
                Of course, I also get something out of this. As I gained some
                experience and knowledge, I realised that I really enjoy helping
                other people, and get a huge amount of satisfaction when a
                student finally has that eureka moment and gets a hard concept.
              </p>
              <p>
                So with all being said, please join me here, and if you have any
                suggestions, wishes or critiques, please contact me.
              </p>
              <p>Hope you have a great time!</p>
            </div>
          </Article>
        </Card>
      </Container>
    </Layout>
  );
};

export default AboutPage;
