"use client";
import { BioContext } from "@/app/contextApi/context";
import Cards from "@/components/Cards";
import React, { useContext, useEffect, useState } from "react";

function dashboard() {
  const {toggle, setToggle} = useContext(BioContext)
  const [storedData, setStoredData] = useState([]);
  const [InProgress, setInProgress] = useState([]);
  const [Pending, setPending] = useState([]);
  const [Completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        const result = await res.json();
        setStoredData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  // Filter data after storedData is updated
  useEffect(() => {
    if (storedData.length > 0) {
      setInProgress(storedData.filter((item) => item.status === 'In Progress'));
      setPending(storedData.filter((item) => item.status === 'Pending'));
      setCompleted(storedData.filter((item) => item.status === 'Completed'));
    }
  }, [storedData]);
  
  return (
    <div className="lg:px-2 min-[1300px]:py-1 md:py-0 h-full overflow-hidden min-[320px]:px-0 ">
      <h3 className="font-semibold md:text-base min-[320px]:text-xs min-[320px]:pl-3 md:pl-0">
        Content manager improvement
        <span className="text-[#647297] font-bold">({storedData.length} tasks)</span>
      </h3>

      <div
        id="taskList"
        className={`listCards relative mt-2 ml-3 xl:h-[82vh] overflow-hidden lg:h-full md:h-[92%] lg:overflow-x-scroll md:overflow-y-scroll rounded-xl min-[320px]:grid min-[320px]:grid-cols-3 lg:flex lg:flex-col `}
      >
        <div className="xl:h-[31%] lg:h-[28%]  lg:w-full md:w-[97%] min-[320px]:w-[60%]">
          <div className="uppercase md:fixed xl:px-6 min-[1300px]:h-[25.5%] xl:h-[25%] lg:h-[24%] lg:w-6 md:h-[10%] md:w-[28.5%] tracking-widest bg-white font-bold flex lg:flex-col min-[320px]:flex-row items-center justify-center border border-[#c0baba] rounded-xl">
            <span className="lg:block">To</span>
            <span className="lg:block">Do</span>
          </div>
          <div className="toDoCards lg:ml-20 xl:ml-16 md:mt-16  lg:mt-0 md:pt-0 w-full gap-4 lg:flex h-full lg:flex-nowrap ">
           {loading?(<p>Loading...</p>):
           (Pending.map((item)=>{
              return (
                <Cards key={item.id} id={item.title} disc={item.description} status="In Progress"/>
              )
            }))}
          </div>
        </div>

        <div className="min-[1300px]:my-4  lg:my-3 xl:h-[31%] lg:h-[28%] md:w-[97%] min-[320px]:w-[80%]">

          <div className="uppercase md:fixed xl:px-6  min-[1300px]:h-[25.5%] xl:h-[25%] lg:h-[24%] md:h-[10%] lg:w-0 md:w-[28.5%] bg-white tracking-widest font-bold flex lg:flex-col md:flex-row items-center justify-center border border-[#c0baba]  rounded-xl">
            <span className="lg:block ">in</span>
            <span className="lg:block">
              {["pr", "og", "re", "ss"].map((item, index) => {
                return (
                  <span className="lg:block lg:-my-[8px]" key={index}>
                    {item}
                  </span>
                );
              })}
            </span>
          </div>
          <div className="inProgressCards lg:ml-20 xl:ml-16 md:mt-16 lg:mt-0 w-full gap-4  lg:flex h-full lg:flex-nowrap ">
          {loading?(<p>Loading...</p>):
           (InProgress.map((item)=>{
              return (
                <Cards key={item.id} id={item.title} disc={item.description} status="Completed"/>
              )
            }))}
          </div>
        </div>

        <div className="xl:h-[31%]   lg:h-[28%] md:w-[97%] min-[320px]:w-[80%]">
          <div className="uppercase md:fixed xl:px-6 min-[1300px]:h-[25.5%] xl:h-[25%] lg:h-[24%] md:h-[10%] lg:w-0 md:w-[29%] tracking-widest bg-white font-bold flex lg:flex-col md:flex-row rounded-xl items-center justify-center border border-[#c0baba]">
            <span className="block">DO</span>
            <span className="block">ne</span>
          </div>
          <div className="doneCards lg:ml-20 xl:ml-16 md:mt-16 lg:mt-0 w-full gap-4  lg:flex h-full lg:flex-nowrap ">
          {loading?(<p>Loading...</p>):
           (Completed.map((item)=>{
              return (
                <Cards key={item.id} id={item.title} disc={item.description} status="delete"/>
              )
            }))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
