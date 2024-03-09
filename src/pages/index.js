import { Navbar,  Tabbar, TabbarLink } from "konsta/react";
import { FaHome } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import DailyReviewList from "@/components/medicine/DailyReviewList";
import Report from "@/components/report/Report";
import { useState } from "react";

export default function Home() { 

  const [activeTab, setActiveTab] = useState('home');

  return (
    <main>
      <Navbar title="MediVault" large centerTitle />

      { activeTab === "home" && <DailyReviewList />}
      { activeTab === "report" && <Report />}

      <Tabbar className="left-0 bottom-0 fixed">
        <TabbarLink active={activeTab === "home"} onClick={()=>setActiveTab("home")} label="Home" icon={ <FaHome /> } />
        <TabbarLink active={activeTab === "report"} onClick={()=>setActiveTab("report")} label="Report" icon={ <TbReportMedical /> } />
        <TabbarLink active={activeTab === "profile"} onClick={()=>setActiveTab("profile")} label="Profile" icon={ <FaUser /> } />
      </Tabbar>
      {/* <h1 className="text-xl">Hello Ketan</h1> */}
    </main>
  );
}
