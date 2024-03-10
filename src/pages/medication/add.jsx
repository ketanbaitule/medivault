import { Button, List, ListButton, ListInput, ListItem, Navbar, NavbarBackLink } from "konsta/react";
import Link from "next/link";
import { useState } from "react";

export default function AddMedication(){
    const [ medicineForm, setMedicineForm ] = useState({
        "name": "",
        "amount": 2,
        "type": "pills",
        "enddate": new Date()
    })

    const handleChange = (e)=>{
        setMedicineForm((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return(
        <>
            <Navbar title="Add Medication" centerTitle left={<Link href={"/medication"}><NavbarBackLink /></Link>} />

            <List>
                <ListInput
                  label="Name of Medicine"
                  type="text"
                  placeholder="Crocin"
                  name="name"
                  value={medicineForm.name}
                  onChange={handleChange}
                />
                <ListInput
                  label="Amount"
                  type="number"
                  placeholder="2"
                  name="amount"
                  onChange={handleChange}
                  value={medicineForm.amount}
                />
                <ListInput
                  label="Type of Medicine"
                  type="select"
                  dropdown
                  defaultValue={"pills"}
                  name="type"
                  onChange={handleChange}
                  value={medicineForm.type}
                >
                    <option value={"pills"}>Pills</option>
                    <option value={"syrup"}>Syrup</option>
                </ListInput>
                <ListInput
                  label="End Date"
                  type="date"
                  name="enddate"
                  onChange={handleChange}
                  value={medicineForm.enddate}
                />
                <ListItem className="px-4">
                    {medicineForm.amount} {medicineForm.type == "syrup" && " teaspoon of "} {medicineForm.type} of {medicineForm.name}.
                </ListItem>
                <ListItem>
                    <ListButton> <Button>Submit</Button></ListButton>
                </ListItem>
            </List>
        </>
    )
}