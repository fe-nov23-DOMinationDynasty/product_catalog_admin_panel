import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Accordion, AccordionDetails, AccordionSummary, Modal } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';

const productData = {
  id: 'apple-iphone-11-pro-max-64gb-silver',
  namespaceId: 'apple-iphone-11-pro-max',
  name: 'Apple iPhone 11 Pro Max 64GB Silver',
  capacityAvailable: ['64GB', '256GB', '512GB'],
  capacity: '64GB',
  priceRegular: 1480,
  priceDiscount: 1400,
  colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
  color: 'silver',
  images: [
    'img/phones/apple-iphone-11-pro-max/silver/00.webp',
    'img/phones/apple-iphone-11-pro-max/silver/01.webp',
    'img/phones/apple-iphone-11-pro-max/silver/02.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.5' OLED",
  resolution: '2688х1242',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 10x / Optical, 2x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

interface Item {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DescriptionItem[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

interface DescriptionItem {
  title: string;
  text: string[];
}

interface NewProductFormProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '90vh',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export const NewProductForm: React.FC<NewProductFormProps> = ({ open, onClose }) => {
  const [formData, setFormData] = React.useState(productData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Grid container spacing={2} sx={style}>
        {/* Text Fields */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Namespace ID"
            name="namespaceId"
            value={formData.namespaceId}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="priceRegular"
            name="priceRegular"
            value={formData.priceRegular}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="priceDiscount"
            name="priceDiscount"
            value={formData.priceDiscount}
            onChange={handleChange}
          />
        </Grid>
        {/* ... Other Text Fields */}

        {/* Selects */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="capacity-select-label">Capacity</InputLabel>
            <Select
              labelId="capacity-select-label"
              name="capacity"
              value={formData.capacity}
              label="Capacity"
              onChange={handleChange}>
              {formData.capacityAvailable.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="colors-select-label">Colors</InputLabel>
            <Select
              labelId="colors-select-label"
              name="colors"
              value={formData.colorsAvailable}
              label="Colors"
              onChange={handleChange}>
              {formData.colorsAvailable.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* ... (Image Upload - See Advanced Features) */}

        {/* Description (Handling Complex Content - See Advanced Features) */}
        <Grid item xs={12} sm={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-header"
            >
              Description
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Add Product
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};
