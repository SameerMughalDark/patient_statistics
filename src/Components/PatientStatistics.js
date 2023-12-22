import { Box, Grid, Typography, Divider } from '@mui/material'
import ReactApexCharts from 'react-apexcharts'

import React, { useState } from 'react'
import Chart from 'react-apexcharts';

    // Pie Chart diagram
    const options = {
        chart: {
          type: 'pie',
          height: 600, // Set the height of the pie chart
          width: 600,  // Set the width of the pie chart
          options3d: {
            enabled: true,
            alpha: 45,
          },
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            offsetY: 0,
          
          },
          
        },
        
        labels: ['CCM Patient', 'RPM Patient', 'RTM Patient'],
        colors: ['#365CA0', '#4473C5', '#A7B5DA'], // Change the colors here
        series: [20, 50, 30],
        dataLabels: {
            enabled: false, // Set to false to hide data labels globally
          },
      };
      


function PatientStatistics() {
    // Top left and Right Styling
    const topBoxStyles = {
        width: "100%",
        height: "100px",
        borderRadius: "10px 10px 10px 10px",
        bgcolor: "#FFFFF",
        boxShadow: 5,
    }
    // topLeftBoxInner Styling
    const topLeftBoxInner = { display: 'flex', justifyContent: "space-between", width: '400px', }
    // item aligining center horizontally and vertically
    const alignItemCenterVH = {
        width: "100%",
        height: "100%",
        display: "flex",
        // flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

    }
    // bar diagram section
    const barDiagramSectionDiv = {
        width: "100%",
        borderRadius: "10px 10px 10px 10px",
        bgcolor: "#FFFFF",
        boxShadow: 5,
    }


    // intialdata  of column bar diagram 
    const inState = {

        series: [
            {
                name: 'Blood Pressure Devices',
                data: [700, 900, 1000, 980],
                color: "#325899",
            },
            {
                name: 'Weight Devices',
                data: [900, 600, 800, 500,],
                color: "#3F6AB8"
            },
            {
                name: 'Glocumeter Devices',
                data: [1000, 500, 800, 400,],
                color: "#7991CF"
            },
            {
                name: 'Pulse Oximeter',
                data: [900, 300, 400, 300,],
                color: "#B4BFDF"
            }

        ],

        options: {
            chart: {
                type: 'bar',
                height: 350,
                fontFamily: 'Sans-serif',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '38%',
                    endingShape: 'rounded',


                },

            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Available Devices', 'Allocated Devices', 'Malfunctioned Devices', 'Retrive Device',],
            },
            yaxis: {
                // for setting title of the graph on y-axis
                // title: {
                //     text: '$ (thousands)'
                // }
            },
            fill: {
                opacity: 1,
                colors: ['#325899', '#3F6AB8', '#7991CF', "#B4BFDF"],

            },

            // for changning the style of the series portion(Blood Pressure Devices, and other etc) 
            legend: {
                // horizontalAlign: 'left',
                fontSize: '12px', // Font size of the series name
                // fontFamily:"monospace",
                fontWeight: 'bold',
                labels: {
                    colors: ['#5A5A5A', "#5A5A5A", "#5A5A5A", "#5A5A5A"], // Color of the legend text
                },
            },

            tooltip: {

                y: {
                    formatter: function (val) {
                        return val + " Number"
                    }
                }
            }
        },






    
        

    }






    const [columnBarData, setColumnBarData] = useState(inState)

    return (
        <>
            <Box width={"100%"}>

                {/* section1 top boxes */}
                <Grid container justifyContent="space-around">
                    <Grid item lg={9}   >
                        <Box sx={topBoxStyles} >
                            <Typography mx={2} fontSize={"30px"} color={"#046AA9"} fontWeight={600}>Practices</Typography>
                            <Box width={"100%"} display={"flex"}>
                                <Box sx={topLeftBoxInner}>
                                    <Typography mx={2} variant="h3" fontSize={"25px"} fontWeight={600} width={"70%"} >Total Practices </Typography>
                                    <Typography variant="h5" width={"20%"} fontWeight={600} color={"#046AA9"}  >30</Typography>
                                </Box>
                                <Divider orientation="vertical" sx={{ height: "60px", my: -3, backgroundColor: "#BCBCBC", width: '0.8px' }} flexItem />

                                <Box sx={topLeftBoxInner}>
                                    <Typography mx={2} variant="h3" fontSize={"25px"} fontWeight={600} width={"70%"} >Active  Practices </Typography>
                                    <Typography variant="h5" width={"20%"} fontWeight={600} color={"#046AA9"}  >25</Typography>
                                </Box>
                                <Divider orientation="vertical" sx={{ height: "60px", my: -3, backgroundColor: "#BCBCBC", width: '0.8px' }} flexItem />

                                <Box sx={topLeftBoxInner}>
                                    <Typography mx={2} variant="h3" fontSize={"25px"} fontWeight={600} width={"70%"} >Inactive Practices </Typography>
                                    <Typography variant="h5" width={"20%"} fontWeight={600} color={"#046AA9"}  >5</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={topBoxStyles} lg={2}>
                        <Box sx={alignItemCenterVH} gap={2}  >
                            <Typography fontSize={"20px"} fontWeight={600}>Total Vendors</Typography>
                            <Typography fontSize={"30px"} color={"#0569A8"} fontWeight={600}>4</Typography>

                        </Box>
                    </Grid>
                </Grid>

                {/* section2 middle  boxes Vertical Bar chart area and Pie Chart Area */}

                <Box>
                    <Grid container justifyContent="space-around" mt={2}>
                        <Grid item lg={9} >
                            <Box sx={barDiagramSectionDiv} >
                                <Typography mx={2} fontSize={"30px"} color={"#046AA9"} fontWeight={600}>Devices Inventory</Typography>

                                <div id="chart">
                                    <ReactApexCharts options={columnBarData.options} series={columnBarData.series} type="bar" height={350} />
                                </div>
                            </Box>
                        </Grid>
                        <Grid item lg={2} sx={barDiagramSectionDiv} >
                            <Typography fontSize={"22px"} textAlign={"center"} mt={2} color={"#046AA9"} fontWeight={600}>Patient's Statistics</Typography>
                            <Chart options={options} series={options.series} type="pie" height={650} />

                        </Grid>
                    </Grid>
                </Box>

            </Box>

        </>
    )
}

export default PatientStatistics
