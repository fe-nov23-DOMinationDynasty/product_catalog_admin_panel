// ** MUI Imports
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

// ** Demo Components Imports
import { DataTable, Product } from 'src/views/tables/TableDense';
import { useState } from 'react';
import { Box, IconButton, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MUITable = () => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRowSelectionChange = (selected: Product[]) => {
    setSelectedRows(selected);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">
          <Link href="https://mui.com/components/tables/" target="_blank">
            Products
          </Link>
        </Typography>
        <Typography variant="body2">
          Use the table below to view and manage your products
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Dense Table"
            titleTypographyProps={{ variant: 'h6' }}
            avatar={<DevicesOtherIcon />}
            action={
              <IconButton onClick={handleOpen}>
                {' '}
                <EditNoteIcon />
              </IconButton>
            }
          />
          <DataTable
            setSelectedRows={setSelectedRows}
            onRowSelectionChange={handleRowSelectionChange}
          />
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Selected Rows
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedRows.map((row) => (
              <div key={row.id}>
                ID: {row.id}, Name: {row.name}, Full Price: {row.fullPrice},
                Price: {row.price}
              </div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default MUITable;
