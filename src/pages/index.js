import Head from 'next/head';
import React, { useState } from 'react';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { OverviewLabel } from 'src/sections/overview/overview-label';

const now = new Date();

const Page = () => {
  const [dataset, setDataset] = useState('ISCXVPN');

  return (
    <>
      <Head>
        <title>
          Overview | NetBench
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
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: '100%' }}
                value="7"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value="645 GB"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTasksProgress
                sx={{ height: '100%' }}
                value={'2,952 K'}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                value="69,799 K"
              />
            </Grid>
            <Grid
              xs={12}
              lg={8}
            >
              <OverviewSales
                chartSeries={[
                  {
                    name: 'Flow Level',
                    data: [311390, 55523, 489139, 66346, 34912, 831497, 1163495]
                  },
                  // {
                  //   name: 'Last year',
                  //   data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                  // }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewTraffic
                chartSeries={[]}
                labels={[]}
                sx={{ height: '100%' }}
                dataset={dataset}
                setDataset={setDataset}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={12}
            >
              <OverviewLabel 
                sx={{ height: '100%' }}
                dataset={dataset}
                setDataset={setDataset}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
