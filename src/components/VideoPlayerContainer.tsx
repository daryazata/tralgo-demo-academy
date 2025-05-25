import { useState } from "react";
import ReactPlayer from "react-player";
import type { Lection, Phase } from "../data/data";
import { getNextLectionStatus } from "../utils";
import { ShowNextPrompt } from "./ShowNextPrompt";

interface Props {
  selectedLection: Lection;
  setSelectedLection: (
    value: React.SetStateAction<Lection | undefined>
  ) => void;
  setAllPhases: (value: React.SetStateAction<Phase[]>) => void;
  allPhases: Phase[];
}

export function VideoPlayerContainer(props: Props) {
  const [autoPlay, setAutoplay] = useState(false);
  const [showNextPrompt, setShowNextPrompt] = useState(false);
  const { selectedLection, setSelectedLection, setAllPhases, allPhases } =
    props;

  const handleSetNextVideo = () => {
    const nextLectStatus = getNextLectionStatus(allPhases, selectedLection);

    if (!nextLectStatus.next) {
      return;
    }

    if (nextLectStatus.done) {
      setSelectedLection(nextLectStatus.next);
    } else {
      setAllPhases((prev) =>
        prev.map((phase) => ({
          ...phase,
          content: phase.content?.map((lection) =>
            lection.id === selectedLection.id
              ? { ...lection, done: true }
              : lection
          ),
        }))
      );
    }

    setShowNextPrompt(false);
  };
  return (
    <div className="flex-2">
      <ReactPlayer
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
        playing={autoPlay ? true : false}
        width={"100%"}
        height={"100%"}
        controls
        loop={false}
        url={selectedLection.videoLink}
        onStart={() => setAutoplay(true)}
        onEnded={() => {
          setShowNextPrompt(true);
        }}
      />

      {showNextPrompt && (
        <ShowNextPrompt
          handleSetNextVideo={handleSetNextVideo}
          setShowNextPrompt={setShowNextPrompt}
        />
      )}
    </div>
  );
}
