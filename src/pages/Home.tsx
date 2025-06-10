import React from "react";
import Hero from "@/components/home/Hero.tsx";
import Skills from "@/components/home/Skills.tsx";
import Notification from "@/components/ui/notification/Notfication.tsx";


const Home: React.FC = () => {
  return (
    <>
      <Hero/>
      <Skills/>
      <Notification variant="success" title="Success" description="This is a success notification"/>
      <Notification variant="info" title="Info" description="This is an info notification"/>
      <Notification variant="warning" title="Warning" description="This is a warning notification"/>
      <Notification variant="error" title="Error" description="This is an error notification"/>
    </>
  );
};

export default Home;
