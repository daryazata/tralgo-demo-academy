import { useEffect, useState } from "react";
import "./App.css";

import { CourseHeader } from "./components/CourseHeader";
import { Header } from "./components/Header";
import { PhaseItem } from "./components/PhaseItem";
import { VideoPlayerContainer } from "./components/VideoPlayerContainer";
import { learningPhases, type Lection } from "./data/data";
import { getNextLectionToPlayFromAll } from "./utils";

function App() {
  const [allPhases, setAllPhases] = useState(learningPhases);
  const [selectedLection, setSelectedLection] = useState<Lection>();

  useEffect(() => {
    const firstUndone = getNextLectionToPlayFromAll(allPhases);
    if (firstUndone) {
      setSelectedLection(firstUndone);
    }
  }, [allPhases]);

  return (
    <div className="main-container ">
      <Header />
      <div className="h-[75vh] react-player flex">
        {selectedLection && (
          <VideoPlayerContainer
            selectedLection={selectedLection}
            setSelectedLection={setSelectedLection}
            allPhases={allPhases}
            setAllPhases={setAllPhases}
          />
        )}

        <div className="flex-1 overflow-y-scroll rounded-r-lg pl-2">
          <CourseHeader />
          {allPhases.map((phase) => {
            return (
              selectedLection && (
                <PhaseItem
                  selectedLection={selectedLection}
                  setSelectedLection={setSelectedLection}
                  phase={phase}
                  key={phase.phaseNr}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
