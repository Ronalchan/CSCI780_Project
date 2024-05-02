import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowsRightLeftIcon from '@heroicons/react/24/solid/ArrowsRightLeftIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { useState } from 'react'; // Import useState for state management
import { Chart } from 'src/components/chart';

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        columnWidth: '40px'
      }
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        'ISCXVPN',
        'ISCXTor',
        'USTC-TFC',
        'Cross Platform (Android)',
        'Cross Platform (iOS)',
        'CIRA-CIC-DoHBrw',
        'CIC IoT Dataset',
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };
};

export const OverviewSales = (props) => {
  const { sx } = props;
  const chartOptions = useChartOptions();

  // Introduce a state variable to toggle between Flow Level and Packet Level
  const [view, setView] = useState("Flow Level");

  const toggleView = () => {
    setView((prevView) => (prevView === "Flow Level" ? "Packet Level" : "Flow Level"));
  };

  // Chart data based on the current view
  const chartSeries = view === "Flow Level" ? [{
      name: 'Flow Level',
      data: [311390, 55523, 489139, 66346, 34912, 831497, 1163495]
  }] : [{
      name: 'Packet Level',
      data: [1040354, 1163495, 4564519, 1358292, 971762, 32962034, 27738736]
  }];

  return (
    <Card sx={sx}>
      <CardHeader
        action={(
          <Button
            color="inherit"
            size="small"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowsRightLeftIcon />
              </SvgIcon>
            )}
            onClick={toggleView} // Set the button to toggle view
          >
            Switch
          </Button>
        )}
        title={`Dataset Distribution (${view})`} // Change the title to reflect current view
      />
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="100%"
        />
      </CardContent>
      <Divider />
      {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
        >
          Overview
        </Button>
      </CardActions> */}
    </Card>
  );
};

OverviewSales.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
