import { Navbar, BlockTitle, List, ListItem, Tabbar, TabbarLink, Card } from "konsta/react";
import { TbReportMedical } from "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";

export default function Report(){
    const reports = [
        {
            "doc_id": 12,
            "name": "MRI",
            "hospital_name": "Unity Medical Center",
            "date": "10/04/2023 10:00AM"
        },
        {
            "doc_id": 13,
            "name": "CT Scan",
            "hospital_name": "Serene Health Clinic",
            "date": "10/04/2023 10:30AM"
        },
        {
            "doc_id": 14,
            "name": "Blood Test",
            "hospital_name": "Wellness Hospital",
            "date": "10/04/2023 11:00AM"
        },
        {
            "doc_id": 15,
            "name": "Ultrasound",
            "hospital_name": "Care Haven Medical Center",
            "date": "10/04/2023 11:30AM"
        }
      ]
      

    return(
        <>
            <BlockTitle medium >Latest Report</BlockTitle>
            
            <List strong inset outline>
                {
                reports.map((report, index)=>{

                    return(
                    <ListItem
                        key={index}
                        chevronMaterial={false}
                        title={report.name}
                        footer={
                        <div className="w-full flex gap-x-2">
                            <div>{report.hospital_name}</div>
                            <div>{report.date}</div>
                        </div>
                        } 
                        media={<TbReportMedical /> }
                        after={<MdNavigateNext className="h-full" />}
                    />
                    )
                })
                }
            </List>
        </>
    )
}