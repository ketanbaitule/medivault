import { Button, List, ListButton, ListInput, ListItem, Navbar, NavbarBackLink } from "konsta/react";
import Link from "next/link";
import { useState } from "react";

export default function AddMedication(){
    const [ emergencyContact, setEmergencyContact ] = useState({
        "name": "",
        "phone": null
    })

    const handleChange = (e)=>{
        setEmergencyContact((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return(
        <>
            <Navbar title="Emergency Contact" centerTitle left={<Link href={"/"}><NavbarBackLink /></Link>} />

            <List>
                <ListInput
                  label="Name"
                  type="text"
                  placeholder="Emergency Contact Name"
                  name="name"
                  value={emergencyContact.name}
                  onChange={handleChange}
                />
                <ListInput
                  label="Phone No"
                  type="phone"
                  placeholder="9123456789"
                  name="phone"
                  onChange={handleChange}
                  value={emergencyContact.phone}
                />
                <ListItem>
                    <ListButton> <Button>Submit</Button></ListButton>
                </ListItem>
            </List>
        </>
    )
}