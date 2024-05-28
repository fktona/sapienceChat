import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from './button'
import Paper from '@mui/material/Paper'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import {useQuery} from '@tanstack/react-query'
import { baseUrl } from '@/constants/baseUrl'
import { useAuth } from '@/context/Auth/authinfo'
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link'
import axios from 'axios'

function createData(
  name: string,
  link: string,
  ID: number,
  visits: number,
  button: () => JSX.Element,
) {
  return { name, link, ID, visits, button }
}

const rows = [
  createData('Send spear', 'link', 6567, 24, () => (
    <Button icons={<SyncAltIcon />}>update</Button>
  )),
]

const createdBot = async (userId:string) => {
  const response = await axios.get(`${baseUrl}/api/chatbot/${userId}`)
  return response.data
}

export default function AiTable() {
  const { state } = useAuth()
  console.log(state)
  if (!state?.userId) {
    return <div>loading...</div>
  }
  const { data, status } = useQuery({
    queryKey: ['bots'],
    queryFn: () => createdBot(state.userId as string),
  })

  const Url = window.location.origin
  console.log(Url)

  console.log(data)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">LINK</TableCell>
            <TableCell align="right">VISITS</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.chatbotInfo?.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.slug}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right"><Link 
               className='flex items-center justify-center gap-1 text-blue-800 underline' 
               href={`${Url}/chatbot/`+row.slug} target='_blank'>Link<LaunchIcon sx={{width:16}}/></Link></TableCell>
              <TableCell align="right">{row.size}</TableCell>
              {/* <TableCell align="right"> {row.button()}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
