import React from "react";

import MainSearchBox from "./MainSearchBox";
import OurServices from "./OurSevices";
// import WhyChoose from "./WhyChoose";  // Halted for the meantime.
import Forum from "../../containers/ForumContainer";
import DailyTips from "./DailyTips";
import HealthVideos from "./HealthVideos";
import AskQuestionForm from "../../containers/AskQuestionFormContainer";

const Home = () => {
  return (
    <main> 
      {/* <WhyChoose /> */}
      <MainSearchBox />
      <Forum />
      <OurServices />
      <DailyTips />
      <HealthVideos />
      <AskQuestionForm />
    </main>
  );
};

export default Home;
