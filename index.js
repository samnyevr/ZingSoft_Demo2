let dietCategory = {
    "veggie": 0,
    "carbs": 0,
    "proteins": 0,
    "fruits": 0,
};

let dietGoal = {
    "veggie": 10,
    "carbs": 20,
    "proteins": 20,
    "fruits": 20
}

let dietGoalInterval = {
    "veggie": dietGoal.veggie * 2 / 5,
    "carbs" : dietGoal.carbs * 2/ 5,
    "proteins": dietGoal.proteins * 2 / 5,
    "frutis": dietGoal.fruits * 2 / 5
}

console.log(dietGoal)
console.log(dietGoalInterval)
const foodIntake = [{
    "Food Title" : "",
    "Food Type" : "",
    "calorie Intake" : 0
}]

const calorieCount = [0]



let myTheme = {
    graph: {
        backgroundColor: "white"
    }
}

let myConfig = {
    type: 'pie',
    refresh: {
        interval: 500, //values assumed ass milliseconds unless the value is less than 50
        type: "feed",
        adjustScale: false,
    },
    title: {
      text: 'Diet Category',
      fontSize: 24,
    },
    plot: {
        valueBox: {
            "text": '%t\n%npv%',
            "fontFamily": "Open Sans"
        },
    },
    series:[
        {
            values:[dietCategory.veggie],
            text:Object.keys(dietCategory)[0]
            },
        {
            "text":Object.keys(dietCategory)[1],
            "values":[dietCategory.carbs]
            },
        {
            "text":Object.keys(dietCategory)[2],
            "values":[dietCategory.proteins]
            },
        {
            "text":Object.keys(dietCategory)[3],
            "values":[dietCategory.fruits]
            }
        ]
  };


  let myconfig2 = {
      layout: "2x2",
      graphset: [
          {
            "type": 'gauge',
            "title":{ 
                text: Object.keys(dietCategory)[0]
            },
            "scale-r": {
                "aperture": 200,
                "values": `0:${dietGoal.veggie * 2}:${dietGoalInterval.veggie}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
                  },bold: "true",
                  labels: ["0", "", "", `Goal`, "Over", "Danger"],
                  item: {    //Scale Label Styling
                    'font-color': "black",
                    'font-family': "Georgia, serif",
                    'font-size':15,
                    'font-weight': "bold",
                    'offset-r': -50,
                    'offset-x': -15,
                    angle: "5"    //To adjust the angle of your scale labels.
                  },
                  ring: {
                    size: 30,
                    rules: [{
                        rule: `%v <= ${dietGoal.veggie}`,
                        backgroundColor: 'green'
                      },
                      {
                        rule: `%v > ${dietGoal.veggie} && %v < ${dietGoal.veggie * 2 - dietGoalInterval.veggie}`,
                        backgroundColor: 'Yellow'
                      },
                      {
                        rule: `%v >= ${dietGoal.veggie * 2 - dietGoalInterval.veggie}`,
                        backgroundColor: 'red'
                      }
                    ]
                  }
            },
            plot: {
                'value-box': { //Value Boxes
                  placement: "center",  //Specify placement at "center", "tip", or "edge".
                  text: "%v",
                  'font-color': "black",
                  'font-size': 24,
                  offsetY: 15
                },
                
              },
            series: [
                {
                indicator: [10,0,0,10,0.1],
                values: [dietCategory.veggie],
                "csize":"4%",
                "background-color": "#000000"
              }
            ]
          },
          {
            type: 'gauge',
            "title":{ 
                text: Object.keys(dietCategory)[1]
            },
            "scale-r": {
                "aperture": 200,
                "values": `0:${dietGoal.carbs * 2}:${dietGoalInterval.carbs}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
                  },
                  labels: ["0", "", "", `Goal`, "Over", "Danger"],
                  item: {    //Scale Label Styling
                    'font-color': "black",
                    'font-family': "Georgia, serif",
                    'font-size':15,
                    'font-weight': "bold",
                    'offset-r': -50,
                    'offset-x': -15,
                    angle: "5"    //To adjust the angle of your scale labels.
                  },
                  ring: {
                    size: 30,
                    rules: [{
                        rule: `%v <= ${dietGoal.carbs}`,
                        backgroundColor: 'green'
                      },
                      {
                        rule: `%v > ${dietGoal.carbs} && %v < ${dietGoal.carbs * 2 - dietGoalInterval.carbs}`,
                        backgroundColor: 'Yellow'
                      },
                      {
                        rule: `%v >= ${dietGoal.carbs * 2 - dietGoalInterval.carbs}`,
                        backgroundColor: 'red'
                      }
                    ]
                  }
            },
            plot: {
                'value-box': { //Value Boxes
                  placement: "center",  //Specify placement at "center", "tip", or "edge".
                  text: "%v",
                  'font-color': "black",
                  'font-size': 24,
                  offsetY: 15
                }
              },
            series: [
                {
                indicator: [10,0,0,10,0.1],
                "values": [dietCategory.carbs],
                "csize":"4%",
                "background-color": "#000000"
              }
            ]
          },
          {
            type: 'gauge',
            "title":{ 
                text: Object.keys(dietCategory)[2]
            },
            "scale-r": {
                "aperture": 200,
                "values": `0:${dietGoal.proteins * 2}:${dietGoalInterval.proteins}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
                  },
                  labels: ["0", "", "", `Goal`, "Over", "Danger"],
                  item: {    //Scale Label Styling
                    'font-color': "black",
                    'font-family': "Georgia, serif",
                    'font-size':15,
                    'font-weight': "bold",
                    'offset-r': -50,
                    'offset-x': -15,
                    angle: "5"    //To adjust the angle of your scale labels.
                  },
                  ring: {
                    size: 30,
                    rules: [{
                        rule: `%v <= ${dietGoal.proteins}`,
                        backgroundColor: 'green'
                      },
                      {
                        rule: `%v > ${dietGoal.proteins} && %v < ${dietGoal.proteins * 2 - dietGoalInterval.proteins}`,
                        backgroundColor: 'Yellow'
                      },
                      {
                        rule: `%v >= ${dietGoal.proteins * 2 - dietGoalInterval.proteins}`,
                        backgroundColor: 'red'
                      }
                    ]
                  }
            },
            plot: {
                'value-box': { //Value Boxes
                  placement: "center",  //Specify placement at "center", "tip", or "edge".
                  text: "%v",
                  'font-color': "black",
                  'font-size': 24,
                  offsetY: 15
                }
              },
            series: [
                {
                    indicator: [10,0,0,10,0.1],
                    "values": [dietCategory.proteins],
                    "csize":"4%",
                    "background-color": "#000000"
              }
            ]
          },
          {
            type: 'gauge',
            "title":{ 
                text: Object.keys(dietCategory)[3]
            },
            "scale-r": {
                "aperture": 200,
                "values": `0:${dietGoal.fruits*2}:${dietGoalInterval.frutis}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
                  },
                  labels: ["0", "", "", `Goal`, "Over", "Danger"],
                  item: {    //Scale Label Styling
                    'font-color': "black",
                    'font-family': "Georgia, serif",
                    'font-size':15,
                    'font-weight': "bold",
                    'offset-r': -50,
                    'offset-x': -15,
                    angle: "5"    //To adjust the angle of your scale labels.
                  },
                  ring: {
                    size: 30,
                    rules: [{
                        rule: `%v <= ${dietGoal.fruits}`,
                        backgroundColor: 'green'
                      },
                      {
                        rule: `%v > ${dietGoal.fruits} && %v < ${dietGoal.fruits * 2 - dietGoalInterval.frutis}`,
                        backgroundColor: 'Yellow'
                      },
                      {
                        rule: `%v >= ${dietGoal.fruits * 2 - dietGoalInterval.frutis}`,
                        backgroundColor: 'red'
                      }
                    ]
                  }
            },
            plot: {
                'value-box': { //Value Boxes
                  placement: "center",  //Specify placement at "center", "tip", or "edge".
                  text: "%v",
                  'font-color': "black",
                  'font-size': 24,
                  offsetY: 15
                }
              },
            series: [
                {
                    indicator: [10,0,0,10,0.1],
                    "values": [dietCategory.fruits],
                    "csize":"4%",
                    "background-color": "#000000"
              }
            ]
          }
      ]
  };

let myConfig3 = {
    "title": {
        "text": "Calorie by Meals"
    },
    "type": "line",
    'scale-y': {
        'min-value':0,
        'max-value':100
      },
    "series": [{
        "values": calorieCount
    }]
  };

function setcalorie() {
    calorieCount.push(calorieCount[calorieCount.length-1] + parseInt(foodIntake[foodIntake.length-1]["calorie Intake"]))
}

function resetMyConfig() {
    myConfig = {
        type: 'pie',
        title: {
          text: 'Diet Category',
          fontSize: 24,
        },
        plot: {
            valueBox: {
                "text": '%t\n%npv%',
                "fontFamily": "Open Sans"
            },
        },
        series:[
            {
                values:[dietCategory.veggie],
                text:Object.keys(dietCategory)[0]
                },
            {
                "text":Object.keys(dietCategory)[1],
                "values":[dietCategory.carbs]
                },
            {
                "text":Object.keys(dietCategory)[2],
                "values":[dietCategory.proteins]
                },
            {
                "text":Object.keys(dietCategory)[3],
                "values":[dietCategory.fruits]
                }
            ]
      };
}

function resetMyConfig2() {
  myconfig2 = {
    layout: "2x2",
    graphset: [
        {
          "type": 'gauge',
          "title":{ 
              text: Object.keys(dietCategory)[0]
          },
          "scale-r": {
              "aperture": 200,
              "values": `0:${dietGoal.veggie * 2}:${dietGoalInterval.veggie}`,
              center: {  //Pivot Point
                  offset: 5,
                  size:5,
                  'background-color': "white",
                  'border-color': "none"
                },bold: "true",
                labels: ["0", "", "", `Goal`, "Over", "Danger"],
                item: {    //Scale Label Styling
                  'font-color': "black",
                  'font-family': "Georgia, serif",
                  'font-size':15,
                  'font-weight': "bold",
                  'offset-r': -50,
                  'offset-x': -15,
                  angle: "5"    //To adjust the angle of your scale labels.
                },
                ring: {
                  size: 30,
                  rules: [{
                      rule: `%v <= ${dietGoal.veggie}`,
                      backgroundColor: 'green'
                    },
                    {
                      rule: `%v > ${dietGoal.veggie} && %v < ${dietGoal.veggie * 2 - dietGoalInterval.veggie}`,
                      backgroundColor: 'Yellow'
                    },
                    {
                      rule: `%v >= ${dietGoal.veggie * 2 - dietGoalInterval.veggie}`,
                      backgroundColor: 'red'
                    }
                  ]
                }
          },
          plot: {
              'value-box': { //Value Boxes
                placement: "center",  //Specify placement at "center", "tip", or "edge".
                text: "%v",
                'font-color': "black",
                'font-size': 24,
                offsetY: 15
              },
              
            },
          series: [
              {
              indicator: [10,0,0,10,0.1],
              values: [dietCategory.veggie],
              "csize":"4%",
              "background-color": "#000000"
            }
          ]
        },
        {
          type: 'gauge',
          "title":{ 
              text: Object.keys(dietCategory)[1]
          },
          "scale-r": {
              "aperture": 200,
              "values": `0:${dietGoal.carbs * 2}:${dietGoalInterval.carbs}`,
              center: {  //Pivot Point
                  offset: 5,
                  size:5,
                  'background-color': "white",
                  'border-color': "none"
                },
                labels: ["0", "", "", `Goal`, "Over", "Danger"],
                item: {    //Scale Label Styling
                  'font-color': "black",
                  'font-family': "Georgia, serif",
                  'font-size':15,
                  'font-weight': "bold",
                  'offset-r': -50,
                  'offset-x': -15,
                  angle: "5"    //To adjust the angle of your scale labels.
                },
                ring: {
                  size: 30,
                  rules: [{
                      rule: `%v <= ${dietGoal.carbs}`,
                      backgroundColor: 'green'
                    },
                    {
                      rule: `%v > ${dietGoal.carbs} && %v < ${dietGoal.carbs * 2 - dietGoalInterval.carbs}`,
                      backgroundColor: 'Yellow'
                    },
                    {
                      rule: `%v >= ${dietGoal.carbs * 2 - dietGoalInterval.carbs}`,
                      backgroundColor: 'red'
                    }
                  ]
                }
          },
          plot: {
              'value-box': { //Value Boxes
                placement: "center",  //Specify placement at "center", "tip", or "edge".
                text: "%v",
                'font-color': "black",
                'font-size': 24,
                offsetY: 15
              }
            },
          series: [
              {
              indicator: [10,0,0,10,0.1],
              "values": [dietCategory.carbs],
              "csize":"4%",
              "background-color": "#000000"
            }
          ]
        },
        {
          type: 'gauge',
          "title":{ 
              text: Object.keys(dietCategory)[2]
          },
          "scale-r": {
              "aperture": 200,
              "values": `0:${dietGoal.proteins * 2}:${dietGoalInterval.proteins}`,
              center: {  //Pivot Point
                  offset: 5,
                  size:5,
                  'background-color': "white",
                  'border-color': "none"
                },
                labels: ["0", "", "", `Goal`, "Over", "Danger"],
                item: {    //Scale Label Styling
                  'font-color': "black",
                  'font-family': "Georgia, serif",
                  'font-size':15,
                  'font-weight': "bold",
                  'offset-r': -50,
                  'offset-x': -15,
                  angle: "5"    //To adjust the angle of your scale labels.
                },
                ring: {
                  size: 30,
                  rules: [{
                      rule: `%v <= ${dietGoal.proteins}`,
                      backgroundColor: 'green'
                    },
                    {
                      rule: `%v > ${dietGoal.proteins} && %v < ${dietGoal.proteins * 2 - dietGoalInterval.proteins}`,
                      backgroundColor: 'Yellow'
                    },
                    {
                      rule: `%v >= ${dietGoal.proteins * 2 - dietGoalInterval.proteins}`,
                      backgroundColor: 'red'
                    }
                  ]
                }
          },
          plot: {
              'value-box': { //Value Boxes
                placement: "center",  //Specify placement at "center", "tip", or "edge".
                text: "%v",
                'font-color': "black",
                'font-size': 24,
                offsetY: 15
              }
            },
          series: [
              {
                  indicator: [10,0,0,10,0.1],
                  "values": [dietCategory.proteins],
                  "csize":"4%",
                  "background-color": "#000000"
            }
          ]
        },
        {
          type: 'gauge',
          "title":{ 
              text: Object.keys(dietCategory)[3]
          },
          "scale-r": {
              "aperture": 200,
              "values": `0:${dietGoal.fruits*2}:${dietGoalInterval.frutis}`,
              center: {  //Pivot Point
                  offset: 5,
                  size:5,
                  'background-color': "white",
                  'border-color': "none"
                },
                labels: ["0", "", "", `Goal`, "Over", "Danger"],
                item: {    //Scale Label Styling
                  'font-color': "black",
                  'font-family': "Georgia, serif",
                  'font-size':15,
                  'font-weight': "bold",
                  'offset-r': -50,
                  'offset-x': -15,
                  angle: "5"    //To adjust the angle of your scale labels.
                },
                ring: {
                  size: 30,
                  rules: [{
                      rule: `%v <= ${dietGoal.fruits}`,
                      backgroundColor: 'green'
                    },
                    {
                      rule: `%v > ${dietGoal.fruits} && %v < ${dietGoal.fruits * 2 - dietGoalInterval.frutis}`,
                      backgroundColor: 'Yellow'
                    },
                    {
                      rule: `%v >= ${dietGoal.fruits * 2 - dietGoalInterval.frutis}`,
                      backgroundColor: 'red'
                    }
                  ]
                }
          },
          plot: {
              'value-box': { //Value Boxes
                placement: "center",  //Specify placement at "center", "tip", or "edge".
                text: "%v",
                'font-color': "black",
                'font-size': 24,
                offsetY: 15
              }
            },
          series: [
              {
                  indicator: [10,0,0,10,0.1],
                  "values": [dietCategory.fruits],
                  "csize":"4%",
                  "background-color": "#000000"
            }
          ]
        }
    ]
};
}

function resetMyConfig3() {
    myConfig3 = {
        "title": {
            "text": "calorie by Meals"
        },
        "type": "line",
        'scale-y': {
            'min-value':0,
            'max-value':100
          },
        "series": [{
            "values": calorieCount
        }]
      };
}


const dietElement1 = document.querySelector("button.diet1");
const dietElement2 = document.querySelector("button.diet2");
const dietModify = document.querySelector(".dietModify");
const diet = document.querySelector("#diet");
const diet2 = document.querySelector("#diet2");
const dietIntake = document.querySelector("#dietIntake");
const zgRef = document.querySelector('zing-grid');
const modifyFood = document.querySelector("#modifyFood");
const modifyGoal = document.querySelector("#modifyGoal");

dietElement1.addEventListener("click", () => {
    if(diet.classList.contains("hidden")){
        diet.classList.remove("hidden");
        diet2.classList.add("hidden");
        dietIntake.classList.add("hidden");
    }
})

dietElement2.addEventListener("click", () => {
    if(diet2.classList.contains("hidden")){
        diet2.classList.remove("hidden");
        diet.classList.add("hidden");
        dietIntake.classList.add("hidden");
    }
})

dietModify.addEventListener("click", () => {
    if(dietIntake.classList.contains("hidden")){
        dietIntake.classList.remove("hidden");
        diet.classList.add("hidden");
        diet2.classList.add("hidden");
    }
})


modifyFood.addEventListener("submit", e => {
    e.preventDefault();
    let temp = {};
    if(dietCategory.hasOwnProperty(`${e.target[1].value}`)){
        dietCategory[`${e.target[1].value}`] += parseInt(e.target[2].value, 10);
    }
    for(let i = 0; i < e.target.length-1; i++){
        temp[e.target[i].name] = e.target[i].value;
        if(i !== 1)
            e.target[i].value = "";
    }
    foodIntake.push(temp)

    setcalorie();


    resetMyConfig();
    zingchart.render({
        id: 'diet',
        data: myConfig,
        defaults: myTheme
    });

    resetMyConfig2();
    zingchart.render({
        id: "diet2",
        data: myconfig2,
        defaults: myTheme
    })

    resetMyConfig3();
    zingchart.render({
        id: "calorie",
        data: myConfig3,
    width: "100%",
    height: "100%"
    })

    diet.classList.remove("hidden");
    diet2.classList.add("hidden");
    dietIntake.classList.add("hidden");

    

    
    zgRef.setData(foodIntake);
})


modifyGoal.addEventListener("submit", e => {
    e.preventDefault();
    for(let i = 0; i < e.target.length-1; i++){
        dietGoal[`${e.target[i].id}`] = e.target[i].value
        dietGoalInterval[`${e.target[i].id}`] = dietGoal[`${e.target[i].id}`] * 2 / 5
    }
    resetMyConfig2();
    zingchart.render({
        id: "diet2",
        data: myconfig2,
        defaults: myTheme
    })

    diet.classList.add("hidden");
    diet2.classList.remove("hidden");
    dietIntake.classList.add("hidden");
})



zingchart.render({
    id: 'diet',
    data: myConfig,
    defaults: myTheme
});

zingchart.render({
    id: "diet2",
    data: myconfig2,
    defaults: myTheme
})

zingchart.render({
    id: "calorie",   
    data: myConfig3,
    width: "100%",
    height: "100%"
})

window.onload = () =>{
    zgRef.setData(foodIntake);
}