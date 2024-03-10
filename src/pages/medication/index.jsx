import { Navbar, BlockTitle, List, ListItem, Tabbar, TabbarLink, Fab, NavbarBackLink } from "konsta/react";
import MedicineTypeIcon from "@/components/shared/MedicineTypeIcon";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Medication(){
    const medicines = [
        {
          "name": "Oxycodon",
          "amount": "2",
          "type": "pills",
          "last_date": "April 10, 2024",
        },
        {
          "name": "Nalaxon",
          "amount": "1",
          "type": "syrup",
          "last_date": "April 10, 2024",
        }
    ]

    return(
        <>
            <Navbar title="Current Medication" centerTitle left={<Link href={"../"}><NavbarBackLink /></Link>} />
            
            <List strong inset dividers>
                {
                medicines.map((medicine, index)=>{

                    return(
                    <ListItem
                        key={index}
                        chevronMaterial={false}
                        title={medicine.name}
                        footer={
                        <div className="w-full flex gap-x-1">
                            <div>{medicine.amount} {medicine.type == "syrup" && "teaspoon of"} {medicine.type}</div>
                            <div> till {medicine.last_date}</div>
                        </div>
                        } 
                        media={<MedicineTypeIcon type={medicine.type} /> }
                        after={<MdNavigateNext className="h-full" />}
                    />
                    )
                })
                }
            </List>
            <Link href={"medication/add"}>
                <Fab icon={<FaPlus />} className="fixed right-5-safe bottom-5-safe z-20" />
            </Link>
        </>
    )
}