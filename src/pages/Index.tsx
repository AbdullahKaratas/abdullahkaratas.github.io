import { useState } from "react";
import Dashboard from "./Dashboard";
import LearningSession from "./LearningSession";

const Index = () => {
  const [currentView, setCurrentView] = useState<"dashboard" | "learning">("dashboard");
  const [selectedCertification, setSelectedCertification] = useState<string>("");

  const handleSelectCertification = (cert: string) => {
    setSelectedCertification(cert);
    setCurrentView("learning");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedCertification("");
  };

  if (currentView === "learning") {
    return (
      <LearningSession
        certification={selectedCertification}
        onBack={handleBackToDashboard}
      />
    );
  }

  return <Dashboard onSelectCertification={handleSelectCertification} />;
};

export default Index;
