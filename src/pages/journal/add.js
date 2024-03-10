import { formDataToJson } from "@/lib/helper";
import { getSession } from "@auth0/nextjs-auth0";
import { Button, List, ListButton, ListInput, ListItem, Navbar, NavbarBackLink } from "konsta/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getListOfMedicineForUser } from "../api/journal";

export default function AddReviewMedication({medicinesList}){
		const [isLoading, setIsLoading] = useState(false)
		const router = useRouter()

		var currentDate = new Date();
		var currentHours = currentDate.getHours().toString().padStart(2, '0');
		var currentMinutes = currentDate.getMinutes().toString().padStart(2, '0');

		// Format the current time as "HH:mm"
		var currentTimeString = currentHours + ":" + currentMinutes;

		async function onSubmit(event) {
				event.preventDefault()
				setIsLoading(true) // Set loading to true when the request starts
		 
				try {
					const formData = new FormData(event.currentTarget)
					const jsonFormData = formDataToJson(formData)
					const response = await fetch('/api/journal', {
						method: 'POST',
						body: JSON.stringify(jsonFormData),
					})
		 
					// Handle response if necessary
					const data = await response.json()
					router.push("/home")


				} catch (error) {
					// Handle error if necessary
					console.error(error)
				} finally {
					setIsLoading(false) // Set loading to false when the request completes
				}
			}
		return(
				<>
						<Navbar title="Add Medicine Journal" centerTitle left={<NavbarBackLink component={Link} href={"/home/"} />} />
						<form onSubmit={onSubmit}>

								<List>
								{
									medicinesList.length === 0 && <ListItem link linkComponent={Link} linkProps={{href: "/medication/add"}} title={"No Medicine Added. Click to add your medication"} />
								}
										<ListInput
										label="Select Medicine"
										type="select"
										name="name"
										dropdown
										>
											{medicinesList.map((medicines, index)=>{
												return(
													<>
														<option key={index} value={medicines.name}>{medicines.name}</option>
													</>
												)
											})}

										</ListInput>

										<ListInput
										label="Time"
										type="time"
										name="time"
										defaultValue={currentTimeString}
										></ListInput>

										<ListInput
										label="Status"
										type="select"
										name="status"
										dropdown
										>
											<option value={"Completed"}>Completed</option>
											<option value={"Skipped"}>Skipped</option>
										</ListInput>
										
										<Button type="submit" disabled={isLoading}>Submit</Button>
								</List>

						</form>
				</>
		)
}

export async function getServerSideProps(context){
	const session = await getSession(context.req, context.res)

	const medicinesList = await getListOfMedicineForUser(session)

	return {props:{
		medicinesList: medicinesList
	}}
}