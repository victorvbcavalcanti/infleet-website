import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import "../../assets/sass/styles.sass";
import config from "../../../config";
import NavBar from "../NavBar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div style={{ height: "5600px" }}>
        <Fragment>
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <NavBar
            isActive={this.state.isActive}
            toggleNavbar={() => this.toggleNavbar()}
          />
          <Fragment>{this.props.children}</Fragment>
          {/* <Footer /> */}
        </Fragment>
      </div>
    );
  }
}

export default Layout;
