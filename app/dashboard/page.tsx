'use client'
import AiTable from "@/components/table";
import Button from "@/components/button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddNew from "@/components/modals/addNewDocument";
import Fuctions from "@/libs/utils";

export default function Dashboard() {
  const {handleModal , openModal} = Fuctions()

  return (
    <div className="bg-background-white flex flex-col items-center">
      <h4 className="text-md w-full text-start font-bold text-secondary-800 pl-2 mb-4">Dashboard</h4>
      <AiTable/>
      <div className="mt-10 mx-auto ">
        <Button onClick={handleModal}
        icons={<AddCircleOutlineIcon/>}>
         New 
        </Button>
        <AddNew
        open={openModal}
        handleClose={handleModal}/>
      </div>
    </div>
          
  );
}
