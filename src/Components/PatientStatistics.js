import { Box, Grid, Typography, Divider } from '@mui/material'
import ReactApexCharts from 'react-apexcharts'
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';
import Slider from '@mui/material/Slider';







function PatientStatistics() {



    const [patientStatistics, setPatientStatistics] = useState([{
        serial_No: 6,
        total_Practices: 250,
        active_Practices: 450,
        inActive_Practices: 150,
        total_Vendors: 190,
        ccM_Patient: 100,
        rtM_Patient: 200,
        rpM_Patient: 3000,
        available_Device: 500,
        allowcated_Device: 430,
        mal_Functioned_Devices: 440,
        reterive_Device: 540,
        practice_Admin: 385,
        medical_Assistant: 280,
        staff: 300,
        blood_Pressure_Dev: 1000,
        weight_Device: 800,
        glocumenter_Device: 900,
        pulse_Oximeter: 700
    }])
    const [bpDeviceCount, setBpDeviceCount] = useState([patientStatistics[0].blood_Pressure_Dev])
    const [weightDeviceCount, setWeightDeviceCount] = useState([patientStatistics[0].weight_Device])
    const [gmDeviceCount, setGMDeviceCount] = useState([patientStatistics[0].glocumenter_Device])
    const [poDeviceCount, setPODeviceCount] = useState([patientStatistics[0].pulse_Oximeter])







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
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
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
        height: "40px",
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: "center"
        // flexDirection:"column"
    }




     // intialdata  of column bar diagram 
   const inState= {

    series: [
        {
            name: 'Blood Pressure Devices',
            // data: bpDeviceCount,
            data: [900,900,900,900],
            color: "#325899",
        },
        {
            name: 'Weight Devices',
            // data: weightDeviceCount,
            data: [900,900,900,900],

            color: "#3F6AB8"
        },
        {
            name: 'Glocumeter Devices',
            // data: gmDeviceCount,
            data: [900,900,900,900],

            color: "#7991CF"
        },
        {
            name: 'Pulse Oximeter',
            // data: poDeviceCount,
            data: [900,900,900,900],

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
            fontSize: "20px"
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
            // for hiding values of horizontal grid text behind the bars
            // show:false,
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

};

    const [columnBarData, setColumnBarData] = useState(inState)

       // Pie Chart diagram
    const options = {
        chart: {
            type: 'pie',
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
        legend: {
            show: true,
            position: 'bottom', // You can change the position (top, right, bottom, left)
            offsetY: 10, // Adjust the vertical offset as needed
            // offsetX:15,// Adjust the horizontal offset as needed
            markers: {
                width: 6, // Adjust the width of the square icon
                height: 6, // Adjust the height of the square icon
                radius: 0, // Set radius to 0 to make it a square
            },
        },


        series: [patientStatistics[0].ccM_Patient, patientStatistics[0].rpM_Patient, patientStatistics[0].rtM_Patient],
        dataLabels: {
            enabled: true, // Set to false to hide data labels globally
            formatter: function (val) {
                // Customize the label format as needed
                return val.toFixed(0) + "%"; // Display values without percentages and round to 2 decimal places
            },
            style: {
                textAlign: "center",
                fontSize: '10px',
                colors: ['White'], // Font color of the labels
            },
        },
    };
    // creating function to get the stocks of device inventory from API
    const getDeviceInventoryInfo=()=>{
        console.log("bp...",bpDeviceCount)
        console.log("wd...",weightDeviceCount)
        console.log("gm...",gmDeviceCount)
        console.log("po...",poDeviceCount)
        console.log(columnBarData.series[0].data)
     
        

        // using map to puting  values of our whole devices stocks into array
        const bpDevices = patientStatistics.map((items) => {

            return items.blood_Pressure_Dev
        })
        setBpDeviceCount(bpDevices);
        
        const wDevice = patientStatistics.map((items) => {

            return items.weight_Device
        })
        setWeightDeviceCount(wDevice)
        
        const gmDevice = patientStatistics.map((items) => {

            return items.glocumenter_Device
        })
        setGMDeviceCount(gmDevice)


        const poDevice = patientStatistics.map((items) => {

            return items.pulse_Oximeter
        })
        setPODeviceCount(poDevice)
    }

    // Function For Fetching Data from API
    const fetchingData = async () => {
        let url = `http://192.168.10.129/api/PatientStat/GetPatientStats`;
        const resp = await fetch(url);
        const data = (await resp.json()).result;
        setPatientStatistics(data);

    }

    useEffect(() => {
        fetchingData();
    }, [])
    return (
        <>
            <Box width={"100%"}>
                    <button onClick={getDeviceInventoryInfo}>CLick here to get previous record</button>
                {/* section1 top boxes */}
                <Grid container justifyContent="space-around">
                    <Grid item xs={12} sm={12} md={12} lg={9} xl={9}    >
                        <Box sx={topBoxStyles}  >
                            <Typography mx={2} fontSize={"30px"} color={"#046AA9"} fontWeight={600}>Practices</Typography>
                            <Box width={"100%"} display={"flex"}>
                                <Box sx={topLeftBoxInner}>
                                    <Typography mx={2} variant="h3" fontSize={"25px"} fontWeight={600} width={"70%"} >Total Practices </Typography>
                                    <Typography variant="h5" width={"20%"} fontWeight={600} color={"#046AA9"}  >{patientStatistics[0].total_Practices}</Typography>
                                </Box>
                                <Divider orientation="vertical" sx={{ height: "60px", my: -3, backgroundColor: "#BCBCBC", width: '0.8px' }} flexItem />

                                <Box sx={topLeftBoxInner}>
                                    <Typography mx={2} variant="h3" fontSize={"25px"} fontWeight={600} width={"70%"} >Active  Practices </Typography>
                                    <Typography variant="h5" width={"20%"} fontWeight={600} color={"#046AA9"}  >{patientStatistics[0].active_Practices}</Typography>
                                </Box>
                                <Divider orientation="vertical" sx={{ height: "60px", my: -3, backgroundColor: "#BCBCBC", width: '0.8px' }} flexItem />

                                <Box sx={topLeftBoxInner}>
                                    <Typography mx={2} variant="h3" fontSize={"25px"} fontWeight={600} width={"70%"} >Inactive Practices </Typography>
                                    <Typography variant="h5" width={"20%"} fontWeight={600} color={"#046AA9"}  >{patientStatistics[0].inActive_Practices}</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={topBoxStyles} xs={12} sm={12} md={12} lg={2} xl={2} >
                        <Box sx={alignItemCenterVH} gap={2}  >
                            <Typography fontSize={"20px"} fontWeight={600}>Total Vendors</Typography>
                            <Typography fontSize={"30px"} color={"#0569A8"} fontWeight={600}>{patientStatistics[0].total_Vendors}</Typography>

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
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >{patientStatistics[0].available_Device}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Allocated Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >{patientStatistics[0].allowcated_Device}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Malfunctioned Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >{patientStatistics[0].mal_Functioned_Devices}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Box sx={devicesInventoryInfo}>
                                            <Typography mx={2} variant="h3" fontSize={"20px"} width={"100%"} >Retrieve Devices </Typography>
                                            <Typography variant="h5" textAlign={"center"} width={"100%"} fontWeight={600} color={"#496AA4"}  >{patientStatistics[0].reterive_Device}</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item lg={2} sx={pieDiagramSection} >
                            <Box sx={pieDiagarmSectionInnerDiv1}>
                                <Typography fontSize={"22px"} textAlign={"center"} mt={2} color={"#046AA9"} fontWeight={600}>Patient's Statistics</Typography>

                                <Chart options={options} series={options.series} type="pie" width={260} height={260} />
                            </Box>

                            <Typography fontSize={"22px"} p={1} mt={2} color={"#046AA9"} fontWeight={600}>User Details</Typography>
                            <Box sx={pieDiagarmSectionInnerDiv2}>
                                <Box sx={pieDiagarmSectionInnerDiv2Childs} >
                                    <Box width={"45%"}>
                                        <Typography fontSize={"12px"} color={"#5E5E5E"} fontWeight={"bold"}>Practice Admin</Typography>
                                    </Box>

                                    <Box width={"45%"}
                                    >

                                        <Slider
                                            value={patientStatistics[0].practice_Admin}
                                            // min={5}
                                            // step={1}
                                            max={500}
                                            valueLabelFormat={patientStatistics[0].practice_Admin}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="non-linear-slider"
                                            sx={{
                                                color: '#375B9F', height: '4px', '& .MuiSlider-thumb': {
                                                    color: "#FFFFFF",
                                                    height: "13px",
                                                    width: "13px",
                                                },
                                            }}


                                        />

                                    </Box>

                                </Box>


                                <Box sx={pieDiagarmSectionInnerDiv2Childs} >
                                    <Box width={"45%"}>
                                        <Typography fontSize={"12px"} color={"#5E5E5E"} fontWeight={"bold"}>Medical Assistant</Typography>
                                    </Box>

                                    <Box width={"45%"}
                                    >
                                        <Slider
                                            value={patientStatistics[0].medical_Assistant}
                                            // min={5}
                                            // step={1}
                                            max={500}
                                            valueLabelFormat={patientStatistics[0].medical_Assistant}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="non-linear-slider"
                                            sx={{
                                                color: '#375B9F', height: '4px', '& .MuiSlider-thumb': {
                                                    color: "#FFFFFF",
                                                    height: "13px",
                                                    width: "13px",
                                                },
                                            }}

                                        />

                                    </Box>

                                </Box>


                                <Box sx={pieDiagarmSectionInnerDiv2Childs} >
                                    <Box width={"45%"}>
                                        <Typography fontSize={"12px"} color={"#5E5E5E"} fontWeight={"bold"}>Staff</Typography>
                                    </Box>

                                    <Box width={"45%"}
                                    >
                                        <Slider
                                            value={patientStatistics[0].staff}
                                            step={1}
                                            max={500}
                                            valueLabelFormat={patientStatistics[0].staff}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="non-linear-slider"
                                            sx={{
                                                color: '#375B9F', height: '4px', '& .MuiSlider-thumb': {
                                                    color: "#FFFFFF",
                                                    height: "13px",
                                                    width: "13px",
                                                },
                                            }}

                                        />


                                    </Box>

                                </Box>




                            </Box>

                        </Grid>
                    </Grid>
                </Box>


            </Box>

        </>
    )
}

export default PatientStatistics
