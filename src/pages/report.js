import Head from 'next/head';
import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid, Stack, Typography, Link } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => (
  <>
    <Head>
      <title>Data Process | NetBench</title>
    </Head>
    <Box
      component="main"
      sx={{ flexGrow: 1, py: 8 }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          {/* Announcement Section */}
          <Stack spacing={1}>
            <Typography variant="h4">Report</Typography>
            <Typography variant="body1">
              NetBench has been accepted by the 
              {' '}
              <Link href="https://fmsys24.github.io/#:~:text=sampling%20rates%2C%20etc.-,International%20Workshop%20on%20Foundation%20Models%20for%20Cyber-Physical%20Systems%20%26%20Internet,in%20the%20CPS%2FIoT%20community" 
                    target="_blank" 
                    rel="noopener noreferrer">
                International Workshop on Foundation Models for Cyber-Physical Systems & Internet of Things (FMSys) 2024
              </Link>
              .
            </Typography>
          </Stack>
        
          <Stack spacing={1}>
            {/* <Typography variant="h5">Documentation</Typography> */}
            <iframe src="assets/FMsys_Netbench.pdf" style={{ width: '100%', height: '750px' }} title="NetBench Documentation"></iframe>
          </Stack>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
