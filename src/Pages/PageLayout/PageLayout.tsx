import React from "react";
import { Outlet } from "react-router";
// import { css } from "@compiled/react";
import {
  Content,
  PageLayout as Layout,
  LeftSidebar,
  Main,
  TopNavigation,
} from "@atlaskit/page-layout";
import { Box, xcss } from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import {
  AtlassianNavigation,
  PrimaryButton,
} from "@atlaskit/atlassian-navigation";
import { NavigationHeader, SideNavigation } from "@atlaskit/side-navigation";

const MainHome = () => <h2 style={{ marginRight: 4 }}>MR</h2>;

const wrapperStyles = xcss({
  paddingBlock: "space.200",
  paddingInline: "space.300",
  // height: "100%",
});

export const PageLayout = () => {
  return (
    <Layout>
      <TopNavigation isFixed={false}>
        <AtlassianNavigation
          label="my notes"
          renderProductHome={MainHome}
          primaryItems={[
            <PrimaryButton key="1" isHighlighted>
              Notes
            </PrimaryButton>,
          ]}
        />
      </TopNavigation>
      <Content>
        <LeftSidebar
          isFixed={false}
          width={120}
          skipLinkTitle="SideBar"
          testId="left-sidebar"
          resizeGrabAreaLabel="Resize Current project sidebar"
          resizeButtonLabel="Current project sidebar"
          valueTextLabel="Width"
        >
          <SideNavigation label="Tags">
            <NavigationHeader>
              <Heading level="h600">Tags</Heading>
            </NavigationHeader>
          </SideNavigation>
        </LeftSidebar>
        <Main>
          <Outlet />
        </Main>
      </Content>
    </Layout>
  );
};
