import React, { Component, Suspense, lazy } from "react";
import MobileHeader from "./MobileHeader";

class Header extends Component {
  render() {
    const isDesktop = window.innerWidth > 767;
    if (!isDesktop) return <MobileHeader />;
    else {
      const DesktopHeader = lazy(() => import("./DesktopHeader"));
      return (
        <Suspense fallback={<MobileHeader />}>
          <DesktopHeader />
        </Suspense>
      );
    }
  }
}

export default Header;
