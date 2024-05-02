import Head from 'next/head';
import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid, Stack, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => (
  <>
    <Head>
      <title>
        Data Process | NetBench
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Data Process
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
            >
              <img src="assets/netbench_data_process.png" alt="Data Process" style={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
