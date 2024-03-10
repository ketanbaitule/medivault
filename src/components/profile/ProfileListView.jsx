import { Block, BlockHeader, BlockTitle, List, ListItem } from "konsta/react";
import { MdNavigateNext } from "react-icons/md";

export default function ProfileListView({setActiveTab}){
    const emergency_contact = {
        "name": "Dummy Name",
        "contact": "+911223456789"
    }
    return(
        <>
            <Block inset>
                <div className="flex flex-col items-center gap-y-5 mt-5">
                    <img className="rounded-full h-32" src="https://files.catbox.moe/tt6od5.webp" alt="user image" />
                    <div className="text-xl font-semibold">
                        Person Name
                    </div>
                </div>
            </Block>

            <Block inset strong>
                <div className="flex flex-row divide-x-2">
                    <div className="flex flex-col items-center gap-2 w-1/3 p-3">
                        <div className="text-3xl">170 cm</div>
                        <div className="font-semibold">Height</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-1/3 p-3">
                        <div className="text-3xl">50 kg</div>
                        <div className="font-semibold">Weight</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-1/3 p-3">
                        <div className="text-3xl">A-</div>
                        <div className="font-semibold">Blood Group</div>
                    </div>
                </div>
            </Block>

            <BlockTitle medium>Emergency Contacts</BlockTitle>

            <List strong inset>
                <ListItem
                    title={<div>Name: {emergency_contact.name}</div>}
                />
                <ListItem
                    title={<div>Phone No: {emergency_contact.contact}</div>}
                />
            </List>

            <BlockTitle medium>Settings</BlockTitle>

            <List inset strong>
                <ListItem 
                    title={"Current Medication"}
                    onClick={()=>{setActiveTab("reports")}}
                    after={<MdNavigateNext className="h-full" />}
                />
                <ListItem 
                    title={"My Reports"}
                    onClick={()=>{setActiveTab("reports")}}
                    after={<MdNavigateNext className="h-full" />}
                />
                <ListItem 
                    title={"Update Emergency Contacts"}
                    onClick={()=>{setActiveTab("reports")}}
                    after={<MdNavigateNext className="h-full" />}
                />
                <ListItem 
                    title={"Logout"}
                    onClick={()=>{setActiveTab("reports")}}
                />
            </List>
        </>
    )
}