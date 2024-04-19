'use client'
import { sortingAlgorithmsData } from "@/lib/utils";
//Hooks
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import { useContext, useEffect } from "react";
//types & utilities
import { algorithmOptions, generateAnimationArray } from "@/lib/utils";
import { SortingAlgorithmType } from "@/lib/types";
//components
import { Select } from "@/components/Input/Select";
import { Slider } from "@/components/Input/Slider";
//icons
import { RxReset } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";

export default function Home() {
  const {arrayToSort, isSorting, setAnimationSpeed, animationSpeed , selectedAlgorithm, setSelectedAlgorithm, requiresReset, resetArrayAndAnimation, runAnimation} = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType)
  }

  const handlePlay = () => {
    if(requiresReset){
      resetArrayAndAnimation();
      return;
    }

    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation
    )
  } 
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex h-full justify-center max-w-[1540px] mx-auto">
        <div id="content-container" className="flex  w-full flex-col lg:px-0 px-4">

          <div className="h-[66px] relative flex items-center justify-center py-4 w-full">
            <div className="flex items-center justify-center gap-4">
              <Slider 
                  isDisapled={isSorting}
                  value={animationSpeed}
                  handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <Select 
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
              <button className="flex items-center justify-center " onClick={handlePlay}>
                {requiresReset ? <div className="flex flex-col "><RxReset className="h-8 w-8 text-gray-400"/> <p className="text-xs">Reset</p></div> : <FaPlayCircle className="h-8 w-8 text-white"/>}
              </button>
            </div>
          </div>

          <div className="hidden sm:flex  top-[120%] left-0 w-full border-system-purble20 bg-system-purble80 bg-opacity-10">
            <div className="flex w-full text-gray-400 p-4 rounded   gap-6">
              <div className="flex flex-col items-start justify-start ">
                <h3 className={`text-lg ${isSorting && "text-purple-500 animate-pulse"}`}>
                  {sortingAlgorithmsData[selectedAlgorithm].title}
                </h3>
                <p className="text-sm text-gray-500 pt-2">{sortingAlgorithmsData[selectedAlgorithm].description}</p>
              </div>
            </div>
            <div className="flex w-full text-gray-400 p-4 rounded bg-opacity-10 gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <h3 className={`text-lg ${isSorting && "text-purple-500 animate-pulse"}`}>
                  Time Complexity {sortingAlgorithmsData[selectedAlgorithm].worstCase}
                </h3>
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-col w-full text-sm text-gray-500">
                      <span className="flex">
                        <span className="w-28 ">Worst Case : </span>
                        <span className="w-28 ">{sortingAlgorithmsData[selectedAlgorithm].worstCase}</span>
                      </span>
                      <span className="flex">
                        <span className="w-28 ">Average Case : </span>
                        <span className="w-28 ">{sortingAlgorithmsData[selectedAlgorithm].averageCase}</span>
                      </span>
                      <span className="flex">
                        <span className="w-28 ">Best Case : </span>
                        <span className="w-28 ">{sortingAlgorithmsData[selectedAlgorithm].bestCase}</span>
                      </span>
                    </p>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full  mx-auto">
            <div className="absolute bottom-[20px] w-full mx-auto left-0 right-0 flex justify-center items-end  ">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className={`array-line realtive w-4 mx-0.5 shadow-lg opacity-70  default-line-color ${isSorting && "animate-pulse"}`}
                  style={{height: `${value}px`}}
                >

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
