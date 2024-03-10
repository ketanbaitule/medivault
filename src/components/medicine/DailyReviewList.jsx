import { Navbar, BlockTitle, List, ListItem, Tabbar, TabbarLink, Fab } from "konsta/react";
import MedicineTypeIcon from "@/components/shared/MedicineTypeIcon";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function DailyReviewList({journalList}){
    console.log(typeof(journalList))
    const daily_review_medicines =  journalList;
    // const daily_review_medicines = [
    //     {
    //       "name": "Oxycodon",
    //       "time": "10:00 AM",
    //       "type": "pills",
    //       "status": "Completed",
    //     },
    //     {
    //       "name": "Nalaxon",
    //       "time": "4:00 PM",
    //       "type": "syrup",
    //       "status": "Skipped",
    //     },
    //     {
    //       "name": "Oxycodon",
    //       "time": "10:00 AM",
    //       "type": "pills",
    //       "status": "Completed"
    //     },
    //     {
    //         "name": "Nalaxon",
    //         "time": "4:00 PM",
    //         "type": "syrup",
    //         "status": "Skipped",
    //     },
    //     {
    //         "name": "Nalaxon",
    //         "time": "4:00 PM",
    //         "type": "syrup",
    //         "status": "Skipped",
    //     },
    //   ]

    return(
        <>
            <BlockTitle medium >Daily Review</BlockTitle>
            <List strong inset outline>
                {
                daily_review_medicines.map((medicine, index)=>{

                    return(
                    <ListItem
                        key={index}
                        chevronMaterial={false}
                        title={medicine.name}
                        footer={
                        <div className="w-full flex gap-x-2">
                            <div>{medicine.time}</div>
                            <div>{medicine.status}</div>
                        </div>
                        } 
                        media={<MedicineTypeIcon type={medicine.type} /> }
                        after={<MdNavigateNext className="h-full" />}
                    />
                    )
                })
                }
            </List>
                
            <Fab component={Link} href={"journal/add"} icon={<FaPlus />} className="fixed right-5-safe bottom-20-safe z-20" />
        </>
    )
}