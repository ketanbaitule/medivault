import { GiMedicines } from "react-icons/gi";
import { TbMedicineSyrup } from "react-icons/tb";

export default function MedicineTypeIcon({type}){
    if(type == "syrup")
      return <TbMedicineSyrup />
    return <GiMedicines />
}