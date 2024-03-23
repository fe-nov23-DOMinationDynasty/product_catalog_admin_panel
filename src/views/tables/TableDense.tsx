import { useState, useEffect } from 'react';

import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';

// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import Collapse from '@mui/material/Collapse';
// import TableRow from '@mui/material/TableRow';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// ** Icons Imports
// import ChevronUp from 'mdi-material-ui/ChevronUp';
// import ChevronDown from 'mdi-material-ui/ChevronDown';

export interface Product {
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
  ];
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

export interface DataTableProps {
  setSelectedRows: (selectionModel: Product[]) => void;
  onRowSelectionChange: (selected: Product[]) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ setSelectedRows }) => {
  const handleSelectionModelChange = (selectionModel: GridRowId[]) => {
    const selectedProducts = selectionModel.map((id: GridRowId) =>
      products.find((product) => product.id === parseInt(id as string, 10))
    );
    setSelectedRows(selectedProducts as Product[]);
  };

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
        rowSelection
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </div>
  );
};
