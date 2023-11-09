<template>
    <div>
        <v-col cols="12" md="12">
            <v-row dense>
                <v-col cols="12" md="4">
                    <v-card variant="tonal">
                            <v-card-title>First Data</v-card-title>
                        <zingchart :data="myPie" :series="mySeries"></zingchart>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card variant="tonal">
                        <v-card-title>Second Data</v-card-title>
                        <zingchart :data="my3dPie" :series="mySeries"></zingchart>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card variant="outlined">
                        <v-card-title>Six Data</v-card-title>
                        <zingchart :data="my3dPie" :series="mySeries"></zingchart>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                    <v-card>
                        <!-- <v-card-title class="justify-center">Top 10 Australian beaches</v-card-title> -->
                        <v-card-title>Third Data</v-card-title>
                        <!-- <v-divider /> -->
                        <zingchart :data="myData1" :series="mySeries"></zingchart>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                    <v-card>
                        <v-card-title>Fourth Data</v-card-title>
                        <zingchart :data="myData" :series="mySeries"></zingchart>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                    <v-card>
                        <v-card-title>Five Data</v-card-title>
                        <zingchart :data="myDataa" :series="mySeriesa"></zingchart>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    
    </div>
</template>
    
    <script>
    import 'zingchart/es6';
    import zingchartVue from 'zingchart-vue';
    export default {
        name: 'App',
        
    components:{
        zingchart: zingchartVue,
    },
        data() {
            return {
                myDataa: {
                type: 'line3d',
                title: {
                    text: 'Hello World',
                },
            },
            mySeriesa: [
                { values: [1,2,4,5,6] }
            ],
                //start bar chart
                myData: {
                    type: "bar3d",
                    plot: {
                        "bar-width": "15px",
                        animation: {
                            effect: "ANIMATION_SLIDE_BOTTOM",
                        },
                        "hover-state": {
                            alpha: 1,
                            visible: true,
                        },
                    },
                    legend: {
                        adjustLayout: true,
                        align: "center",
                        verticalAlign: "top",
                        item: {
                            fontSize: "13px",
                        },
                    },
                    scaleX: {
                        values: [
                            "Lan Ma Taw",
                            "La Thar",
                            "Pan Be Tan",
                            "Kyauk Ta Da",
                            "Bo Ta Htaung",
                            "Pa Zun Taung",
                            "Lan Ma Taw",
                            "La Thar",
                            "Pan Be Tan",
                        ],
                        guide: {
                            visible: false,
                        },
                        item: {
                            paddingTop: "2px",
                            fontColor: "#000",
                            fontFamily: "Arial",
                            fontSize: "11px",
                            "font-angle": -45,
                        },
                        itemsOverlap: true,
                        lineColor: "#000",
                        maxItems: 9999,
                        offsetY: "1px",
                        tick: {
                            lineColor: "#000",
                            visible: false,
                        },
                    },
                    series: [{
                            values: [11, 16, 7, 14, 11, 24, 11, 16, 7],
                            backgroundColor: "#000",
                            legendText: "1 Hour",
                        },
                        {
                            values: [28, 35, 22, 35, 30, 46, 28, 35, 22],
                            backgroundColor: "#ff3300",
                            legendText: "1-2 Hours",
                        },
                        {
                            values: [14, 21, 29, 19, 31, 26, 14, 21, 29],
                            backgroundColor: "#ff9900",
                            legendText: "2-5 Hours",
                        },
                        {
                            values: [16, 11, 19, 12, 11, 16, 16, 11, 19],
                            backgroundColor: "#00b33c",
                            legendText: ">5 Hours",
                        },
                    ],
                },
                //end bar chart
    
                //start bar chart1
                myData1: {
                    type: "bar3d",
                    plot: {
                        marginTop: "20px",
                        stacked: true,
                        "bar-width": "15px",
                        animation: {
                            effect: "ANIMATION_SLIDE_BOTTOM",
                        },
                        "hover-state": {
                            alpha: 1,
                            visible: true,
                        },
                    },
                    legend: {
                        adjustLayout: true,
                        align: "center",
                        verticalAlign: "top",
                        item: {
                            fontSize: "13px",
                        },
                    },
                    plotarea: {
                        adjustLayout: true,
                    },
                    scaleX: {
                        labels: [
                            "ဗဟိုအဖွဲ့အစည်းများ",
                            "ဝန်ကြီးဌာနများ",
                            "တိုင်းနှင့်ပြည်နယ်များ",
                            "အထွေထွေအုပ်ချုပ်ရေးဦးစီးဌာန",
                            "တိုင်းစာများ",
                            "ကော်မရှင်/ကော်မရှင်အဖွဲ့များ",
                            "ပုဂ္ဂလိကဆိုင်ရာစာများ",
                            "ကွန်ယက်အသင်းအဖွဲ့များ",
                            "နိုင်ငံခြားသံရုံးများ",
                            "ကုမ္ပဏီအသင်းအဖွဲ့များ",
                            "အစည်းအဝေးမှတ်တမ်း/ဖိတ်စာများ",
                            "ဤရုံး၏အမိန့်ကြော်ငြာစာ/ရုံးတွင်းအမိန့်",
                            "ထိပ်တန်းလျှို့ဝှက်",
                            "ဌာနတွင်းစားများ",
                            "နေပြည်တော်စည်ပင်",
                        ],
                        guide: {
                            visible: false,
                        },
                        item: {
                            paddingTop: "2px",
                            fontColor: "#000",
                            fontFamily: "Arial",
                            fontSize: "13px",
                            "font-angle": -45,
                        },
                        itemsOverlap: true,
                        lineColor: "#d2dae2",
                        maxItems: 9999,
                        offsetY: "1px",
                        tick: {
                            lineColor: "#d2dae2",
                            visible: false,
                        },
                    },
                    series: [{
                            values: [
                                20,
                                40,
                                25,
                                50,
                                15,
                                45,
                                33,
                                34,
                                40,
                                25,
                                50,
                                15,
                                45,
                                33,
                                34,
                            ],
                            stack: 1,
                            backgroundColor: "#0066ff",
                            legendText: "ဝင်စာလိပ်မူ",
                        },
                        {
                            values: [5, 30, 21, 18, 59, 50, 28, 33, 40, 25, 50, 15, 45, 33, 34],
                            stack: 2,
                            backgroundColor: "#ff9900",
                            legendText: "ဝင်စာမိတ္တူ",
                        },
    
                        {
                            values: [30, 5, 18, 21, 33, 41, 29, 15, 5, 18, 21, 33, 41, 29, 15],
                            //stack: 2,
                            stack: 3,
                            backgroundColor: "#ff3300",
                            legendText: "ထွက်စာ",
                        },
                    ],
                },
                //end bar chart1
    
                //start pie cahrt
                myPie: {
                    "type": "pie3d",
                    // "title": {
                    //   "text": "Pie Chart Styling"
                    // },
                    "legend": {
                        "x": "75%",
                        "y": "25%",
                        "border-width": 1,
                        "border-color": "black",
                        "border-radius": "5px",
                        // "header": {
                        //   "text": "Legend",
                        //   "font-family": "Georgia",
                        //   "font-size": 12,
                        //   "font-color": "#3333cc",
                        //   "font-weight": "normal"
                        // },
                        "marker": {
                            "type": "circle"
                        },
                        //"toggle-action": "remove",
                        //"minimize": true,
                        "icon": {
                            "line-color": "#9999ff"
                        },
                        "max-items": 8,
                        "overflow": "scroll"
                    },
                    "plotarea": {
                        "margin-right": "30%",
                        "margin-top": "0%"
                    },
                    "plot": {
                        "value-box": {
                            "text": "%v",
                            "font-size": 12,
                            "font-family": "Georgia",
                            "font-weight": "normal",
                            "placement": "out",
                            "font-color": "black",
                        },
                        "tooltip": {
                            "text": "%t: %v (%npv%)",
                            "font-color": "black",
                            "font-family": "Georgia",
                            "text-alpha": 1,
                            "background-color": "white",
                            "alpha": 0.7,
                            "border-width": 1,
                            "border-color": "#cccccc",
                            "line-style": "dotted",
                            "border-radius": "10px",
                            "padding": "10%",
                            "placement": "node:center"
                        },
                        "border-width": 1,
                        "border-color": "#cccccc",
                        "line-style": "dotted"
                    },
    
                    "series": [{
                            "values": [234],
                            "background-color": "#4d79ff",
                            "text": "Alpha"
                        },
                        {
                            "values": [121],
                            "background-color": "#002699",
                            "text": "Beta"
                        },
                        {
                            "values": [77],
                            "background-color": "#ffcc00",
                            "text": "Gamma"
                        },
                        {
                            "values": [31],
                            "background-color": "#00cc66",
                            "text": "Theta"
                        },
                        {
                            "values": [65],
                            "background-color": "#cc3300",
                            "text": "Delta"
                        },
                        {
                            "values": [59],
                            "background-color": "#802b00",
                            "text": "Epsilon"
                        },
    
                    ]
    
                },
                //end pie chart
    
                //start 3dpie cahrt
                my3dPie: {
                    "type": "pie3d",
                    // "title": {
                    //   "text": "3D Pie Chart"
                    // },
                    "legend": {
                        "x": "75%",
                        "y": "25%",
                        "border-width": 1,
                        "border-color": "gray",
                        "border-radius": "5px",
                        "header": {
                            "text": "Legend",
                            "font-family": "Georgia",
                            "font-size": 12,
                            "font-color": "#3333cc",
                            "font-weight": "normal"
                        },
                        "marker": {
                            "type": "circle"
                        },
                        "toggle-action": "remove",
                        "minimize": true,
                        "icon": {
                            "line-color": "#9999ff"
                        },
                        "max-items": 8,
                        "overflow": "scroll"
                    },
                    "plotarea": {
                        "margin-right": "30%",
                        "margin-top": "0%"
                    },
                    "plot": {
                        "value-box": {
                            "text": "%v",
                            "font-size": 12,
                            "font-family": "Georgia",
                            "font-weight": "normal",
                            "placement": "out",
                            "font-color": "black",
                        },
                        "tooltip": {
                            "text": "%t: %v (%npv%)",
                        },
                        "border-width": 1,
                        "border-color": "#cccccc",
                        "line-style": "dotted"
                    },
    
                    "series": [{
                            "values": [234],
                            "background-color": "#4d79ff",
                            "text": "Alpha"
                        },
                        {
                            "values": [121],
                            "background-color": "#002699",
                            "text": "Beta"
                        },
                        {
                            "values": [77],
                            "background-color": "#ffcc00",
                            "text": "Gamma"
                        },
                        {
                            "values": [31],
                            "background-color": "#00cc66",
                            "text": "Theta"
                        },
                        {
                            "values": [65],
                            "background-color": "#cc3300",
                            "text": "Delta"
                        },
                        {
                            "values": [59],
                            "background-color": "#802b00",
                            "text": "Epsilon"
                        },
    
                    ]
    
                },
                //end 3dpie chart
    
                //start bar chart
                mySingleBar: {
                    graphset: [{
                            type: "bar3D",
                            height: "100%",
                            width: "100%",
                            x: "0%",
                            y: "0%",
                            "series": [{
                                    "values": [20, 40, 25, 50, 15, 45, 33, 34, 40, 25, 50, 34, 40, 25, 50],
                                    "background-color": "#4d79ff",
                                    "text": "Alpha"
                                },
    
                            ],
                            plot: {
                                "bar-width": "25px",
                                animation: {
                                    effect: "ANIMATION_SLIDE_BOTTOM",
                                },
                                "hover-state": {
                                    alpha: 1,
                                    visible: true,
                                },
                            },
                            legend: {
                                adjustLayout: true,
                                align: "center",
                                verticalAlign: "top",
                                item: {
                                    fontSize: "13px",
                                },
                            },
                            plotarea: {
                                adjustLayout: true,
                            },
                            scaleX: {
                                labels: [
                                    "ဗဟိုအဖွဲ့အစည်းများ",
                                    "ဝန်ကြီးဌာနများ",
                                    "တိုင်းနှင့်ပြည်နယ်များ",
                                    "အထွေထွေအုပ်ချုပ်ရေးဦးစီးဌာန",
                                    "တိုင်းစာများ",
                                    "ကော်မရှင်/ကော်မရှင်အဖွဲ့များ",
                                    "ပုဂ္ဂလိကဆိုင်ရာစာများ",
                                    "ကွန်ယက်အသင်းအဖွဲ့များ",
                                    "နိုင်ငံခြားသံရုံးများ",
                                    "ကုမ္ပဏီအသင်းအဖွဲ့များ",
                                    "အစည်းအဝေးမှတ်တမ်း/ဖိတ်စာများ",
                                    "ဤရုံး၏အမိန့်ကြော်ငြာစာ/ရုံးတွင်းအမိန့်",
                                    "ထိပ်တန်းလျှို့ဝှက်",
                                    "ဌာနတွင်းစားများ",
                                    "နေပြည်တော်စည်ပင်",
                                ],
                                guide: {
                                    visible: false,
                                },
                                item: {
                                    paddingTop: "2px",
                                    fontColor: "#8391a5",
                                    fontFamily: "Arial",
                                    fontSize: "13px",
                                    "font-angle": -45,
                                },
                                itemsOverlap: true,
                                lineColor: "#d2dae2",
                                maxItems: 9999,
                                offsetY: "1px",
                                tick: {
                                    lineColor: "#d2dae2",
                                    visible: false,
                                },
                            },
                        },
                    ]
                },
                //end bar chart
    
            };
        },
        created() {
            this.$emit("eventname", true);
        },
    };
    </script>
    