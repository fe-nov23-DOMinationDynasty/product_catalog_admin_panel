import { useState, useEffect } from 'react';

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
} from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
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
  { field: 'id', headerName: 'ID', type: 'string', flex: 1 },
  { field: 'category', headerName: 'Category', type: 'string', flex: 2 },
  { field: 'name', headerName: 'Product', type: 'string', flex: 3 },
  { field: 'fullPrice', headerName: 'Price', type: 'string', flex: 2 },
  { field: 'price', headerName: 'Sell price', type: 'string', flex: 2 },
  { field: 'year', headerName: 'Year', type: 'string', flex: 2 },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    flex: 1,
    getActions: () => [
      <GridActionsCellItem key="edit" icon={<EditIcon />} label="Edit" />,
      <GridActionsCellItem key="delete" icon={<DeleteIcon />} label="Delete" />,
    ],
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
    <div style={{ height: '65vh', width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        checkboxSelection
        rowSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </div>
  );
};
