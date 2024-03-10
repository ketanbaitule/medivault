import { Block, BlockHeader, BlockTitle, List, ListItem } from "konsta/react";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

export default function ProfileListView({user, setActiveTab}){
    const emergency_contact = {
        "name": "Dummy Name",
        "contact": "+911223456789"
    }
    return(
        <>
            <Block inset>
                <div className="flex flex-col items-center gap-y-5 mt-5">
                    <img className="rounded-full h-32" src={user.picture} alt="user image" />
                    <div className="text-xl font-semibold">
                        {user.nickname}
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
                    link
                    linkComponent={Link}
                    linkProps={{ href: "/medication" }}
                />
                <ListItem 
                    title={"My Reports"}
                    link
                    onClick={()=>{setActiveTab("reports")}}
                />
                <ListItem 
                    title={"Update Emergency Contacts"}
                    link
                    linkComponent={Link}
                    linkProps={{ href: "/emergency" }}
                />
                <ListItem 
                    title={"Logout"}
                    link
                    linkComponent={Link}
                    linkProps={{ href: "/api/auth/logout" }}
                />
            </List>
        </>
    )
}