import { formDataToJson } from "@/lib/helper";
import { Button, List, ListButton, ListInput, ListItem, Navbar, NavbarBackLink } from "konsta/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddMedication(){
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true) // Set loading to true when the request starts
     
        try {
          const formData = new FormData(event.currentTarget)
          const jsonFormData = formDataToJson(formData)
          const response = await fetch('/api/medication', {
            method: 'POST',
            body: JSON.stringify(jsonFormData),
          })
     
          // Handle response if necessary
          const data = await response.json()
          router.push("/medication")


        } catch (error) {
          // Handle error if necessary
          console.error(error)
        } finally {
          setIsLoading(false) // Set loading to false when the request completes
        }
      }

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
            <Navbar title="Add Medication" centerTitle left={<NavbarBackLink component={Link} href={"/medication/"} />} />
            <form onSubmit={onSubmit}>

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
                    <Button type="submit" disabled={isLoading}>Submit</Button>
                </List>

            </form>
        </>
    )
}