import React from "react";
import Charts from "./Charts";
import ContentTopBar from "./Content-TopBar";
import GoodMorning from "./GoodMorning";
import HotNewReleases from "./HotNewReleases";
import More from "./More";
import RecentlyPlayed from "./RecentlyPlayed";

const Content = () => {
  return (
    <div className="content">
      <ContentTopBar />
      <GoodMorning />
      <RecentlyPlayed />
      <More />
      <HotNewReleases />
      <Charts />
    </div>
  );
};

export default Content;
