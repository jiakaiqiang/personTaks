let  liquidFillOption = {
    backgroundColor: '',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)',
        },
    },
    series: [
        {
            type: 'liquidFill',
            radius: '45%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgb(255,0,255,0.1)',
            },
            // 修改波浪颜色
            // color:['yellow'], 所有波浪一个颜色
            // color:['yellow','red','pink'], 每个波浪不同颜色，颜色数组长度为对应的波浪个数
            label: {
                normal: {
                    formatter: (0.5 * 100).toFixed(2) + '%',
                    textStyle: {
                        fontSize: 50,
                    },
                },
            },
            outline: {
                show: false,
            },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '52%'],
            hoverAnimation: false,
            data: [
                {
                    name: '',
                    value: 500,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#5886f0',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#5886f0',
                        },
                    },
                },
                {
                    //画中间的图标
                    name: '',
                    value: 4,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#ffffff',
                        normal: {
                            color: '#5886f0',
                            borderColor: '#5886f0',
                            borderWidth: 20,
                            // borderRadius: '100%'
                        },
                    },
                    label: {
                        borderRadius: '100%',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#5886f0',
                        },
                    },
                },
                {
                    // 解决圆点过大后续部分显示明显的问题
                    name: '',
                    value: 4,
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#5886f0',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#5886f0',
                        },
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 88,
                    itemStyle: {
                        color: '#050038',
                    },
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: 'rgba(255,255,255,0)',
                        },
                    },
                },
            ],
        },
    ],
};
let weekTaskData={
    header: ['任务名称', '完成时长', '总时长'],
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
    ]
}
export {
    liquidFillOption,
    weekTaskData
}
