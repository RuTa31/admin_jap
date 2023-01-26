import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/system';

export default function ListCard() {
  return (
    <Card >
      <CardActionArea >
        <Box>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <Typography>dfdgd</Typography>
        </Box>
        <Box>
          <Button>
            More button
          </Button>
        </Box>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}