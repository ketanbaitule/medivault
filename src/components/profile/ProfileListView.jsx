import { Block, BlockHeader, BlockTitle, List, ListItem } from "konsta/react";
import { MdNavigateNext } from "react-icons/md";

export default function ProfileListView({setActiveTab}){
    const emergency_contact = {
        "name": "Dummy Name",
        "contact": "+911223456789"
    }
    return(
        <>
            <BlockTitle large>Profile</BlockTitle>

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