/* eslint-disable prettier/prettier */
// ** MUI Imports
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';

// ** Demo Components Imports
import { DataTable, Product } from 'src/views/tables/TableDense';
import { useState } from 'react';
import {
  Box,
  Button,
  ButtonProps,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  styled,
} from '@mui/material';
import { purple } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const SaveButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const MUITable = () => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  const [selectedRow, setSelectedRow] = useState<Product | null>(null);
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
            title="Products Table"
            titleTypographyProps={{ variant: 'h6' }}
            avatar={<DevicesOtherIcon />}
            action={
              <>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip describeChild title="Add new product">
                  <Button>Add</Button>
                </Tooltip>
              </>
            }
          />
          <DataTable
            setSelectedRows={setSelectedRows}
            setSelectedRow={setSelectedRow}
            onRowSelectionChange={handleRowSelectionChange}
            openModal={handleOpen}
          />
        </Card>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Edit Row:
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField label={selectedRow?.id} fullWidth margin="normal" />
            <TextField label={selectedRow?.category} fullWidth margin="normal" />
            <TextField label={selectedRow?.name} fullWidth margin="normal" />
            <TextField label={selectedRow?.fullPrice} fullWidth margin="normal" />
            <TextField label={selectedRow?.price} fullWidth margin="normal" />
            <TextField label={selectedRow?.year} fullWidth margin="normal" />
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="button" onClick={handleClose} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <SaveButton type="submit" startIcon={<SaveIcon />}>
                Save
              </SaveButton>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default MUITable;
