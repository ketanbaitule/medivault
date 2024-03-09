import { Navbar, BlockTitle, List, ListItem, Tabbar, TabbarLink, Card } from "konsta/react";
import MedicineTypeIcon from "@/components/shared/MedicineTypeIcon";
import { MdNavigateNext } from "react-icons/md";

export default function Report(){
    const daily_review_medicines = [
        {
          "name": "Oxycodon",
          "time": "10:00 AM",
          "type": "pills",
          "status": "Completed",
        },
        {
          "name": "Nalaxon",
          "time": "4:00 PM",
          "type": "syrup",
          "status": "Skipped",
        },
        {
          "name": "Oxycodon",
          "time": "10:00 AM",
          "type": "pills",
          "status": "Completed"
        },
        {
            "name": "Nalaxon",
            "time": "4:00 PM",
            "type": "syrup",
            "status": "Skipped",
        },
        {
            "name": "Nalaxon",
            "time": "4:00 PM",
            "type": "syrup",
            "status": "Skipped",
        },
      ]

    return(
        <>
            <BlockTitle medium >Latest Report</BlockTitle>
            
            <div className="my-4">
                <Card>
                    97
                </Card>
            </div>
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
        </>
    )
}