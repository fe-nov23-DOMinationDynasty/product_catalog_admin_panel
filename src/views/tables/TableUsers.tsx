import { useState, useEffect } from 'react';

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowId,
} from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';
import { Avatar, IconButton } from '@mui/material';

export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  role: string;
}

export function request(user: string) {
  return fetch(`../api/${user}.json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export const getProducts = () => {
  return request('users');
};

export interface DataTableProps {
  setSelectedRows: (selectionModel: User[]) => void;
  setSelectedRow: (selectionModel: User) => void;
  onRowSelectionChange: (selected: User[]) => void;
  openModal: () => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  setSelectedRows,
  setSelectedRow,
  openModal,
}) => {
  const handleSelectionModelChange = (selectionModel: GridRowId[]) => {
    const selectedUsers = selectionModel.map((id: GridRowId) =>
      users.find((user) => user.id === parseInt(id as string, 10))
    );
    setSelectedRows(selectedUsers as User[]);
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getProducts()
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'string', flex: 1 },
    {
      field: 'photoURL',
      headerName: 'Photo',
      type: 'string',
      renderCell: (params) => <Avatar src={params.row.photoURL} />,
      sortable: false,
      filterable: false,
      flex: 1,
    },
    { field: 'name', headerName: 'Name', type: 'string', flex: 3 },
    { field: 'email', headerName: 'Email', type: 'string', flex: 2 },
    {
      field: 'role',
      headerName: 'Role',
      type: 'singleSelect',
      valueOptions: ['basic user', 'moderator', 'admin'],
      editable: true,
      flex: 2,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            setSelectedRow(params.row);
            openModal();
          }}>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div style={{ height: '65vh', width: '100%' }}>
      <DataGrid
        rows={users}
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
