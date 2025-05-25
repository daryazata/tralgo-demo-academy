interface Props {
  setPlayNext: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNextPrompt: (value: React.SetStateAction<boolean>) => void;
  handleSetNextVideo: () => void;
}

export function ShowNextPrompt(props: Props) {
  const { handleSetNextVideo, setShowNextPrompt, setPlayNext } = props;
  return (
    <div className="fixed top-1/3 left-1/3 -translate-x-1/2 bg-white dark:bg-gray-800 p-4 rounded shadow-md text-center z-50">
      <p className="mb-4">🎬 Lektion beendet. Nächste Lektion anschauen?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            handleSetNextVideo();
            setPlayNext(true);
          }}
          className="bg-gray-500 dark:bg-gray-400 text-white px-4 py-2 rounded"
        >
          Ja
        </button>
        <button
          onClick={() => {
            setShowNextPrompt(false);
          }}
          className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-gray-300   px-4 py-2 rounded"
        >
          Nein
        </button>
      </div>
    </div>
  );
}
