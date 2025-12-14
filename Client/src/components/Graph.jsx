import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import performance from "../assets/performance.png"

export default function SwitchSeriesType() {
    const [type, setType] = React.useState('bar');

    return (
        <Box sx={{ width: '100%' }}>
            <div className='flex justify-between items-center px-2'>
                <div className='flex gap-2 items-center'>
                    <h3 className='text-3xl font-serif font-semibold'>Progress</h3>
                    <img src={performance} alt='icon' className='h-10' />
                </div>
                <TextField
                    select
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    label="series"
                    sx={{ minWidth: 80, minHeight: 150 }}
                >
                    <MenuItem value="line"  >line</MenuItem>
                    <MenuItem value="bar">bar</MenuItem>
                </TextField>
            </div>
            <div>
                <ChartContainer
                    series={[
                        {
                            type,
                            data: [10, 20, 30, 40, 50,65,40],
                        }
                    ]}
                    xAxis={[
                        {
                            data: ['Mathematics', 'Science', 'Physics', 'EVS', 'GK','abc','def'],
                            scaleType: 'band',
                            id: 'x-axis-id',
                            height: 45,

                        },
                    ]}

                    yAxis={[{ id: 'y-axis-id' }]}
                    height={400}
                >

                    <BarPlot />
                    <LinePlot />
                    <ChartsXAxis label="X axis" axisId="x-axis-id" />
                    <ChartsYAxis label="Y axis" axisId="y-axis-id" />
                </ChartContainer>
            </div>
        </Box>
    );
}

