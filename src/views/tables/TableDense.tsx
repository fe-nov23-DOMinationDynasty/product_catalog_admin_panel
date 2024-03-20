/* eslint-disable @next/next/no-img-element */
// ** MUI Imports

import { useState, useEffect } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import Collapse from '@mui/material/Collapse';
// import TableRow from '@mui/material/TableRow';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// // ** Icons Imports
// import ChevronUp from 'mdi-material-ui/ChevronUp';
// import ChevronDown from 'mdi-material-ui/ChevronDown';

interface Product {
  id: number;
  name: string;
  fullPrice: number;
  price: number;
  image: string;
  history: [
    {
      date: string;
      customerId: string;
      amount: number;
    },
  ]
}

export function request(product: string) {
  return fetch(`../api/${product}.json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export const getProducts = () => {
  return request('products');
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', type: 'number', width: 70 },
  { field: 'name', headerName: 'Product', type: 'string', width: 180 },
  { field: 'fullPrice', headerName: 'fullPrice', type: 'number', width: 130 },
  { field: 'price', headerName: 'price', type: 'number', width: 100 },
  {
    field: 'image',
    headerName: 'Image',
    description: 'This column has a image and is not sortable.',
    sortable: false,
    width: 130,
  },
];

export default function DataTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

// export const Row = (props: { row: Product }) => {
//   // ** Props
//   const { row } = props;

//   // ** State
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}>
//             {open ? <ChevronUp /> : <ChevronDown />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.fullPrice}</TableCell>
//         <TableCell align="right">{row.price}</TableCell>
//         <TableCell align="right">
//           <img src={row.image} alt={row.name} style={{ width: '50px' }} />
//         </TableCell>
//       </TableRow>

//       <TableRow>
//         <TableCell colSpan={6} sx={{ py: '0 !important' }}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ m: 2 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Specs
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history ? ( // Check if row.history exists
//                     row.history.map((historyRow) => (
//                       <TableRow key={historyRow.date}>
//                         <TableCell component="th" scope="row">
//                           {historyRow.date}
//                         </TableCell>
//                         <TableCell>{historyRow.customerId}</TableCell>
//                         <TableCell align="right">{historyRow.amount}</TableCell>
//                         <TableCell align="right">
//                           {Math.round(historyRow.amount * row.price * 100) / 100}
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   ) : (
//                     <TableRow>
//                       <TableCell colSpan={4} align="center">
//                         No history available
//                       </TableCell>
//                     </TableRow>
//                   )}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </Fragment>
//   );
// };
