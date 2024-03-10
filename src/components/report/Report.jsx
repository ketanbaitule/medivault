import { Navbar, BlockTitle, List, ListItem, Tabbar, TabbarLink, Card } from "konsta/react";
import { TbReportMedical } from "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";

export default function Report({reports}){      

    return(
        <>
            <BlockTitle medium >Report</BlockTitle>
            
            <List strong inset outline>
                {
                    reports.length === 0 && <ListItem title={"No Reports Added"} />
                }
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