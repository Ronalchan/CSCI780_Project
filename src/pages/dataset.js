import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'To generate a representative dataset of real-world traffic in ISCX, ISCXVPN defined a set of tasks, assuring that this dataset is rich enough in diversity and quantity.',
    logo: '/assets/logos/UNB.png',
    title: 'ISCXVPN',
    downloads: '594',
    url: 'https://www.unb.ca/cic/datasets/vpn.html'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'To be sure about the quantity and diversity of this dataset in CIC, ISCXTor defined a set of tasks to generate a representative dataset of real-world traffic.',
    logo: '/assets/logos/UNB.png',
    title: 'ISCXTor',
    downloads: '625',
    url: 'https://www.unb.ca/cic/datasets/tor.html'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'The USTC-TFC2016 dataset serves as a vital resource for research on video traffic analysis, video content recognition, traffic classification, network application performance evaluation, and related fields.',
    logo: '/assets/logos/ustc.png',
    title: 'USTC-TFC',
    downloads: '857',
    url: 'https://github.com/yungshenglu/USTC-TFC2016'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'Cross-platform data integration is a process that combines data from different sources and platforms to provide users with a unified view of the combined data.',
    logo: '/assets/logos/northeastern.png',
    title: 'Cross Platform',
    downloads: '406',
    url: 'https://recon.meddle.mobi/cross-market.html'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'The dataset includes implementing DoH protocol within an application using five different browsers and tools and four servers to capture Benign-DoH, Malicious-DoH and non-DoH traffic.',
    logo: '/assets/logos/UNB.png',
    title: 'CIRA-CIC-DoHBrw',
    downloads: '835',
    url: 'https://www.unb.ca/cic/datasets/dohbrw-2020.html'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: '33 attacks are executed in an IoT topology composed of 105 devices. These attacks are classified into seven categories, namely DDoS, DoS, Recon, Web-based, Brute Force, Spoofing, and Mirai. Finally, all attacks are executed by malicious IoT devices targeting other IoT devices.',
    logo: '/assets/logos/UNB.png',
    title: 'CIC IoT Dataset',
    downloads: '835',
    url: 'https://www.unb.ca/cic/datasets/iotdataset-2023.html'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Datasets | NetBench
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
                Datasets
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
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
