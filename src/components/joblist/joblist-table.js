import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ListCard from './list-card';

const JobTable = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Бүх файл" value="1" />
      <Tab label="Дууссан файл" value="2" />
      <Tab label="Ажиллагаанд байгаа файл" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1">
    <ListCard/>
  </TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
</TabContext>
  )
}

export default JobTable;
