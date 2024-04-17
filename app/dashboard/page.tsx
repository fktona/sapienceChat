import AiTable from "@/components/table";
import Button from "@/components/button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Home() {

  return (
    <div className="bg-background-white flex flex-col items-center">
      <h4 className="text-md w-full text-start font-bold text-secondary-800 pl-2 mb-4">Dashboard</h4>
      <AiTable/>
      <div className="mt-10 mx-auto ">
        <Button icons={<AddCircleOutlineIcon/>}>
         New 
        </Button>
      </div>
    </div>
          
  );
}
