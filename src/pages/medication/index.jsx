import { Navbar, BlockTitle, List, ListItem, Tabbar, TabbarLink, Fab, NavbarBackLink } from "konsta/react";
import MedicineTypeIcon from "@/components/shared/MedicineTypeIcon";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { getSession } from "@auth0/nextjs-auth0";
import { getListOfMedicine } from "../api/medication";

export default function Medication({medicines}){
    console.log(medicines)
    // const medicines = [
    //     {
    //       "name": "Oxycodon",
    //       "amount": "2",
    //       "type": "pills",
    //       "enddate": "April 10, 2024",
    //     },
    //     {
    //       "name": "Nalaxon",
    //       "amount": "1",
    //       "type": "syrup",
    //       "enddate": "April 10, 2024",
    //     }
    // ]

    return(
        <>
            <Navbar title="Current Medication" centerTitle left={<NavbarBackLink component={Link} href={"../"} />} />
            
            <List strong inset dividers>
                {
                medicines.map((medicine, index)=>{

                    return(
                    <ListItem
                        key={index}
                        chevronMaterial={false}
                        title={medicine.name}
                        footer={
                        <span className="w-full flex gap-x-1">
                            <span>{medicine.amount} {medicine.type == "syrup" && "teaspoon of"} {medicine.type}</span>
                            {!!medicine.enddate && <span> till {medicine.enddate}</span>}
                        </span>
                        } 
                        media={<MedicineTypeIcon type={medicine.type} /> }
                        after={<MdNavigateNext className="h-full" />}
                    />
                    )
                })
                }
            </List>
            
                <Fab component={Link} href={"medication/add"} icon={<FaPlus />} className="fixed right-5-safe bottom-5-safe z-20" />
        </>
    )
}

export async function getServerSideProps(context){
    
    const session = await getSession(context.req, context.res)
    
    return { props: {
        medicines: JSON.parse(JSON.stringify(await getListOfMedicine(session)))
    } }
}