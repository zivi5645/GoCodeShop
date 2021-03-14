import { React, useContext } from "react";
import "./about.css";
import ThemeContext, { themes } from "../../ThemeContext";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src="https://www.shutterstock.com/image-photo/confident-successful-ceo-business-woman-suit-1088049656"
              alt="Jane"
              style={{ width: "100%" }}
            ></img>
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://www.shutterstock.com/image-photo/confident-successful-ceo-business-woman-suit-1088049656"
              alt="Mike"
              style={{ width: "100%" }}
            ></img>
            <div className="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="/w3images/team3.jpg"
              alt="John"
              style={{ width: "100%" }}
            ></img>
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

// <div
// style={{
//   background: theme.background,
//   color: theme.foreground,
//   display: "flex",
//   justifyContent: "center",
//   fontSize: "55px",
// }}
// >
// About Our Company
// </div>
// <br></br>
// <div style={{ background: theme.background, color: theme.foreground }}>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
// sapien quis ligula faucibus imperdiet vitae et risus. Cras gravida
// congue consectetur. Donec molestie molestie erat, vel sagittis nulla
// malesuada eu. Duis dapibus pellentesque urna, sit amet mattis urna
// faucibus eu. Sed non urna tempus ligula gravida hendrerit. Praesent
// interdum felis eget risus lobortis, a lobortis felis varius. Sed commodo
// libero ut convallis vulputate. Quisque quis velit venenatis, condimentum
// mauris sed, hendrerit purus. Suspendisse vitae dui odio. Maecenas a
// tincidunt est, sit amet posuere nunc. Fusce aliquet, ipsum ac dapibus
// scelerisque, massa quam scelerisque velit, quis accumsan dolor neque a
// lorem. Nulla nec ultricies ipsum, ut sollicitudin odio. Mauris laoreet
// nunc et magna hendrerit molestie. Mauris aliquam neque eu feugiat
// facilisis. Fusce accumsan volutpat commodo. Cras feugiat convallis
// sodales. Nunc libero velit, pretium ut eros sit amet, cursus pretium
// nisi. Ut vestibulum ultricies venenatis. Vivamus eros tellus, commodo
// eget diam sed, volutpat sagittis urna. Curabitur malesuada ullamcorper
// felis, quis dapibus diam pharetra et. Interdum et malesuada fames ac
// ante ipsum primis in faucibus. Vestibulum pulvinar dignissim diam vel
// accumsan. In hac habitasse platea dictumst. Nullam eget enim non turpis
// cursus accumsan. Suspendisse lectus tellus, fringilla in ligula vitae,
// rutrum egestas sem. Sed at rutrum ex. Nulla velit libero, auctor id
// vestibulum nec, blandit id nunc. Vivamus condimentum sapien in ex
// malesuada vulputate. Morbi fermentum interdum nibh et imperdiet. Duis
// vestibulum egestas dolor, vitae suscipit quam ultricies eu. Nullam a
// urna vel ligula varius laoreet et nec neque. Maecenas a ligula ac mauris
// semper efficitur. Class aptent taciti sociosqu ad litora torquent per
// conubia nostra, per inceptos himenaeos. Nullam iaculis, ligula id
// consequat tincidunt, dolor lacus blandit dolor, quis scelerisque diam
// eros ut nunc. Fusce vitae tristique dolor. Quisque a nulla vel odio
// sodales suscipit. Suspendisse ipsum sapien, eleifend rhoncus vulputate
// in, consectetur nec est. Morbi tincidunt, lectus at vestibulum tempor,
// ante sapien ultricies neque, eu interdum ante tortor eget enim.
// Suspendisse potenti. Morbi vel quam finibus sem semper feugiat at
// consectetur tellus. Donec sagittis nibh turpis, sit amet cursus magna
// vulputate congue. Cras in lectus et dolor mollis dignissim id sed augue.
// Pellentesque molestie ac nunc ac dictum. Curabitur id magna ut quam
// lobortis gravida. Pellentesque eget est vitae purus tincidunt tincidunt
// vel et justo. Mauris vitae tortor pulvinar tortor ultricies tincidunt.
// Sed sed congue velit. Nulla sit amet neque orci. Nam in efficitur
// mauris. Ut sagittis libero et mattis volutpat.{" "}
// </div>
