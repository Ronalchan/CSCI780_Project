import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
  Select,
  MenuItem
} from '@mui/material';
import { useState } from 'react';
import { Chart } from 'src/components/chart';

const datasets = {
  'ISCXVPN': {
    labels: ['VPN Detection', 'VPN Service Detection', 'VPN Application Classification'],
    values: [2, 6, 17],
  },
  'ISCXTor': {
    labels: ['Tor Detection', 'Tor Service Detection'],
    values: [2, 7],
  },
  'USTC-TFC': {
    labels: ['Malware Detection', 'Application Classification'],
    values: [2, 20],
  },
  'Cross Platform (Android)': {
    labels: ['Application Classification', 'Country Detection'],
    values: [212, 3],
  },
  'Cross Platform (iOS)': {
    labels: ['Application Classification', 'Country Detection'],
    values: [196, 3],
  },
  'CIRA-CIC-DoHBrw': {
    labels: ['DoH Attack Detection', 'DoH Query Method Classification'],
    values: [2, 5],
  },
  'CIC IoT Dataset': {
    labels: ['IoT Attack Detection', 'IoT Attack Method Detection'],
    values: [2, 7],
  },
};

const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent'
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.success.main,
      theme.palette.warning.main
    ],
    dataLabels: {
      enabled: false
    },
    labels,
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      fillSeriesColor: false
    }
  };
};

const iconMap = {
  Desktop: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  Tablet: (
    <SvgIcon>
      <DeviceTabletIcon />
    </SvgIcon>
  ),
  Phone: (
    <SvgIcon>
      <PhoneIcon />
    </SvgIcon>
  )
};

export const OverviewTraffic = (props) => {
  const { chartSeries, labels, sx, dataset, setDataset } = props;
  const chartOptions = useChartOptions(datasets[dataset].labels);

  return (
    <Card sx={sx}>
      <CardHeader 
        title="Number of Labels"
        action={
          <Select
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
          >
            {Object.keys(datasets).map(key => (
              <MenuItem value={key} key={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        }
      />
      <CardContent>
        <Chart
          height={300}
          options={chartOptions}
          series={datasets[dataset].values}
          type="donut"
          width="100%"
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          {datasets[dataset].values.map((item, index) => {
            const label = datasets[dataset].labels[index];

            return (
              <Box
                key={label}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {iconMap[label]}
                <Typography
                  sx={{ my: 1 }}
                  variant="body1"
                >
                  {label}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body1"
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTraffic.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object,
  dataset: PropTypes.string.isRequired,
  setDataset: PropTypes.func.isRequired,
};
