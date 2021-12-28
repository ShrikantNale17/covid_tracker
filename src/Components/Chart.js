import { React } from 'react'
import ReactApexChart from 'react-apexcharts'

function ApexChart(props) {

    const { categories, TotalConfirmed, TotalDeaths, TotalRecovered } = props.chartData
    /* const dataElements = props.covidData.map(data => {
        return [data.Country, data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered]
      }) */

    return (
        <div id="chart">
            <ReactApexChart
                options={{
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    theme: {
                        palette: 'palette5' // upto palette10
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '65%',
                            endingShape: 'rounded'
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    xaxis: {
                        title: {
                            text: 'Countries'
                        },
                        categories: categories,
                    },
                    yaxis: {
                        title: {
                            text: '(No. of Persons)'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val
                            }
                        }
                    },
                    legend: {
                        position: 'right',
                        horizontalAlign: 'right'
                    }
                }}
                series={[{
                    name: 'Total Confirmed',
                    data: TotalConfirmed
                }, {
                    name: 'Total Deaths',
                    data: TotalDeaths
                }, {
                    name: 'Total Recovered',
                    data: TotalRecovered
                }]} type="bar" height={600} width={1000} />
        </div>
    )
}

export default ApexChart







/* class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                yaxis: {
                    title: {
                        text: '$ (thousands)'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart
                    options={{
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                                endingShape: 'rounded'
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ['transparent']
                        },
                        xaxis: {
                            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        },
                        yaxis: {
                            title: {
                                text: '$ (thousands)'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return "$ " + val + " thousands"
                                }
                            }
                        }
                    }}
                    series={[{
                        name: 'Net Profit',
                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                    }, {
                        name: 'Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }, {
                        name: 'Free Cash Flow',
                        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                    }]} type="bar" height={350} />
            </div>)
    }
} */