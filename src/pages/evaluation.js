import Head from 'next/head';
import React, { useState } from 'react';
import { Box, Container, Stack, Typography, Tabs, Tab } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Head>
        <title>Evaluation | NetBench</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
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
                <Typography variant="h4">Evaluation</Typography>
              </Stack>
            </Stack>

            <Tabs value={selectedTab} onChange={handleTabChange}>
              <Tab label="Classification Results" value={0} />
              <Tab label="Generation Results" value={1} />
            </Tabs>

            {selectedTab == 0 && (
              <Stack spacing={3}>
                <Typography
                  variant="h5"
                  align="center"
                >
                  Comparison results of traffic classification tasks (flow: Flow-level, pkt: Packet-level, AC: Accuracy, F1: F1-score). Foundation models like ET-BERT and YaTC outperform other traditional deep learning methods.
                </Typography>
                <img src="assets/classification_result_1.png" alt="Classification Result 1" style={{ width: '100%' }} />
                <img src="assets/classification_result_2.png" alt="Classification Result 2" style={{ width: '100%' }} />
              </Stack>
            )}

            {selectedTab == 1 && (
              <Stack spacing={3}>
                <Typography
                  variant="h5"
                  align="center"
                >
                  Evaluation results of generation tasks using STAN and NetShare. Netshare exhibits good performance in generating IP addresses and port numbers on most datasets while STAN performs better in generating Packet Length.
                </Typography>
                <img src="assets/generation_result.png" alt="Generation Results" style={{ width: '100%' }} />
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
