import { Navbar,  Tabbar, TabbarLink } from "konsta/react";
import { FaHome } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import DailyReviewList from "@/components/medicine/DailyReviewList";
import Report from "@/components/report/Report";
import { useState } from "react";
import ProfileListView from "@/components/profile/ProfileListView";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MongoClient } from "mongodb";
import { mongo_uri } from "@/lib/constants";
import { getSession } from "@auth0/nextjs-auth0";

export default function Home({reports}) { 

  const [activeTab, setActiveTab] = useState('home');
  const { user, error, isLoading } = useUser();
  
  return (
	<main>
	  <Navbar title="MediVault" large centerTitle />

	  { activeTab === "home" && <DailyReviewList />}
	  { activeTab === "reports" && <Report reports={reports} />}
	  { activeTab === "profile" && <ProfileListView user={user} setActiveTab={setActiveTab} /> }

	  <Tabbar className="left-0 bottom-0 fixed">
		<TabbarLink active={activeTab === "home"} onClick={()=>setActiveTab("home")} label="Home" icon={ <FaHome /> } />
		<TabbarLink active={activeTab === "reports"} onClick={()=>setActiveTab("reports")} label="Report" icon={ <TbReportMedical /> } />
		<TabbarLink active={activeTab === "profile"} onClick={()=>setActiveTab("profile")} label="Profile" icon={ <FaUser /> } />
	  </Tabbar>
	</main>
  );
}


export async function getServerSideProps(context){
	const client = new MongoClient(mongo_uri)
	const session = await getSession(context.req, context.res)
	
	try{
		await client.connect()

		await client.db("medivault").collection("reports");

		const reportsCollection = await client.db("medivault").collection("reports")
		const reports = await reportsCollection.find({
			patient_id:  session.user.email
		})

		return { props: {
			reports: JSON.parse(JSON.stringify(await reports.toArray()))
		}}
	}catch(e){
		console.log("Error", e)
	}finally{
		await client.close()
	}
	return { props: { reports: [] }}
}