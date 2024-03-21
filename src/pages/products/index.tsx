// ** MUI Imports
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

// ** Demo Components Imports
import TableCollapsible from 'src/views/tables/TableCollapsible';

const MUITable = () => {
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
            title="Collapsible Table"
            titleTypographyProps={{ variant: 'h6' }}
          />
          <TableCollapsible />
        </Card>
      </Grid>
    </Grid>
  );
};

export default MUITable;
