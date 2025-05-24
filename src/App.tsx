import ReactPlayer from "react-player";
import { Fragment } from "react/jsx-runtime";
import "./App.css";
import logo from "./assets/logo-tralgo-weiss.png"; // oder .png
import { learningPhases, type Lection } from "./data/data";

function App() {
  function getNextAllowedLectionIndex(content: Lection[]): number {
    return content.findIndex((l) => !l.done);
  }

  return (
    <div className="main-container ">
      <header className=" flex items-center mb-6 p-4">
        <img src={logo} alt="Logo" className="h-8 w-auto   " />
      </header>
      <div className=" h-160  react-player flex">
        <div className="flex-2">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            url="https://www.youtube.com/watch?v=snh0S7jx9fI&list=PL0-wFncoJOmwvoFR70ut9ub2vqjpHptBI&index=4"
          />
        </div>
        {/* course content */}
        <div className="flex-1 overflow-y-scroll rounded-r-lg ">
          <div className="h-13 border-gray-400 border-b-1 flex items-center justify-center font-semibold  bg-base-100">
            Dein aktueller Kurs: Intraday
          </div>
          {learningPhases.map((phase) => {
            return (
              <Fragment key={phase.phaseNr}>
                <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                  {phase.content && <input type="checkbox" />}
                  <div className="collapse-title font-semibold flex items-center">
                    <span>{`Phase ${phase.phaseNr}:`}</span>
                    <span className="ml-3">{phase.title}</span>
                  </div>

                  <div className="collapse-content text-sm">
                    {phase.content?.map((item, index) => {
                      const nextAllowedIndex = getNextAllowedLectionIndex(
                        phase.content!
                      );
                      const isClickable =
                        item.done || index === nextAllowedIndex;
                      return (
                        <div
                          className={`h-14 border-gray-500 ${
                            isClickable
                              ? `text-gray-200 hover:bg-base-300`
                              : `text-gray-500`
                          } shadow-md shadow-gray-500/20 border-b-1  p-4 pl-6 flex ${
                            isClickable && `cursor-pointer`
                          }`}
                          key={item.lectionNr}
                        >
                          <span>{`${phase.phaseNr}.${item.lectionNr} ${item.title}`}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
