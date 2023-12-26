import { Box, Grid, Typography, Divider } from '@mui/material'
import ReactApexCharts from 'react-apexcharts'
import React, { useState } from 'react'
import Chart from 'react-apexcharts';
import Slider, { SliderThumb } from '@mui/material/Slider';


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
        // padding:"40px"

    }
    const pieDiagramSection = {
        width: "100%",
        borderRadius: "10px 10px 10px 10px",
        bgcolor: "#FFFFF",
        boxShadow: 5,

    }

    // After bar diagaram devices inventory info
    const devicesInventoryInfo = {
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "2px solid #DDDDDD",
        borderRight: "2px solid #DDDDDD"
        // boxShadow:4
    }
    const pieDiagarmSectionInnerDiv1 = {
        // borderBottom:"2px solid red",
        height: "350px",
        boxShadow: '0px 6px 4px -2px rgba(0, 0, 0, 0.2)', // Adjust the values as needed

    }
    const pieDiagarmSectionInnerDiv2 = {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',

    }
    const pieDiagarmSectionInnerDiv2Childs = {
        width: "100%",
        height:"40px",
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems:"center"
        // flexDirection:"column"
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
                    columnWidth: '58%',
                    endingShape: 'rounded',


                },

            },
            dataLabels: {
                enabled: false,
            },
            
            // background horizontal measured lines of chart
            grid: {
                show: true,
                borderColor: '#e0e0e0', // Color of the grid lines
                // strokeDashArray: 2, // Length of the dashed line
                position: 'back',
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
                fontSize: '14px', // Font size of the series name
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


    // slider data is defining here
    function valueLabelFormat(value) {
        const units = ['KB', 'MB', 'GB', 'TB'];

        let unitIndex = 0;
        let scaledValue = value;

        while (scaledValue >= 1024 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 1024;
        }

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function calculateValue(value) {
        return 2 ** value;
    }


    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };


    const [columnBarData, setColumnBarData] = useState(inState)

    return (
        <>
            <Box width={"100%"}>

                {/* section1 top boxes */}
                <Grid container justifyContent="space-around">
                    <Grid item lg={9}    >
                        <Box sx={topBoxStyles}  >
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
                    <Grid item sx={topBoxStyles} lg={2} >
                        <Box sx={alignItemCenterVH} gap={2}  >
                            <Typography fontSize={"20px"} fontWeight={600}>Total Vendors</Typography>
                            <Typography fontSize={"30px"} color={"#0569A8"} fontWeight={600}>4</Typography>

                        </Box>
                    </Grid>
                </Grid>

                {/* section2 middle  boxes Vertical Bar chart area and Pie Chart Area */}

                <Box>
                    <Grid container justifyContent="space-around" mt={2} >
                        <Grid item lg={9} >
                            <Box sx={barDiagramSectionDiv} >
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                    <div id="chart" style={{ width: "80%", padding: "40px", }}>
                                        <Typography mx={1} width={"50%"} fontSize={"30px"} color={"#046AA9"} fontWeight={600}>Devices Inventory</Typography>
                                        <ReactApexCharts options={columnBarData.options} series={columnBarData.series} type="bar" height={350} />
                                    </div>
                                </Box>
                                <Grid container textAlign={"center"}>
                                    <Grid item lg={3} >
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Available Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >1000</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Allocated Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >900</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Malfunctioned Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >1000</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Retrieve Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >975</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item lg={2} sx={pieDiagramSection} >
                            <Box sx={pieDiagarmSectionInnerDiv1}>
                                <Typography fontSize={"22px"} textAlign={"center"} mt={2} color={"#046AA9"} fontWeight={600}>Patient's Statistics</Typography>
                                <Chart options={options} series={options.series} type="pie" height={650} flexDirection={"column"} />
                            </Box>

                            <Typography fontSize={"22px"} p={1} mt={2} color={"#046AA9"} fontWeight={600}>User Details</Typography>
                            <Box sx={pieDiagarmSectionInnerDiv2}>
                                <Box sx={pieDiagarmSectionInnerDiv2Childs} >
                                    <Box width={"40%"}>
                                        <Typography fontSize={"12px"} color={"#5E5E5E"} fontWeight={"bold"}>Practice Admin</Typography>
                                    </Box>

                                    <Box width={"50%"}
                                    >

                                        <Slider
                                            value={375}
                                            min={1}
                                            step={1}
                                            max={500}
                                            
                                            scale={calculateValue}
                                            getAriaValueText={valueLabelFormat}
                                            valueLabelFormat={valueLabelFormat}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="non-linear-slider"
                                            // color="secondary"
                                            // size="small"
                                            
                                            sx={{color:'#375B9F',height:'7px',}}
                                        />
                                    </Box>

                                </Box>

                                <Slider
                                    value={value}
                                    min={5}
                                    step={1}
                                    max={30}
                                    scale={calculateValue}
                                    getAriaValueText={valueLabelFormat}
                                    valueLabelFormat={valueLabelFormat}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />

                                <Slider
                                    value={value}
                                    min={5}
                                    step={1}
                                    max={30}
                                    scale={calculateValue}
                                    getAriaValueText={valueLabelFormat}
                                    valueLabelFormat={valueLabelFormat}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />

                            </Box>

                        </Grid>
                    </Grid>
                </Box>


            </Box>

        </>
    )
}

export default PatientStatistics
