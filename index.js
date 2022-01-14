let dietCategory = {
    "veggie": 5,
    "carbs": 2,
    "proteins": 7,
    "fruits": 10,
};

let dietGoal = {
    "veggie": 10,
    "carbs": 20,
    "proteins": 20,
    "fruits": 20
}

let dietGoalInterval = {
    "veggie": dietGoal.veggie / 5,
    "carbs" : dietGoal.carbs / 5,
    "proteins": dietGoal.proteins / 5,
    "frutis": dietGoal.fruits / 5
}

console.log(dietGoalInterval)

const foodIntake = []




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

  let myTheme = {
      graph: {
          backgroundColor: "aqua"
      }
  }

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
                "values": `0:${dietGoal.veggie}:${dietGoalInterval.veggie}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
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
                "values": `0:${dietGoal.carbs}:${dietGoalInterval.carbs}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
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
                "values": `0:${dietGoal.proteins}:${dietGoalInterval.proteins}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
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
                "values": `0:${dietGoal.fruits}:${dietGoalInterval.frutis}`,
                center: {  //Pivot Point
                    offset: 5,
                    size:5,
                    'background-color': "white",
                    'border-color': "none"
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

      console.log(myConfig);
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
                  "values": `0:${dietGoal.veggie}:${dietGoalInterval.veggie}`,
                  center: {  //Pivot Point
                      offset: 5,
                      size:5,
                      'background-color': "white",
                      'border-color': "none"
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
                  "values": `0:${dietGoal.carbs}:${dietGoalInterval.carbs}`,
                  center: {  //Pivot Point
                      offset: 5,
                      size:5,
                      'background-color': "white",
                      'border-color': "none"
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
                  "values": `0:${dietGoal.proteins}:${dietGoalInterval.proteins}`,
                  center: {  //Pivot Point
                      offset: 5,
                      size:5,
                      'background-color': "white",
                      'border-color': "none"
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
                  "values": `0:${dietGoal.fruits}:${dietGoalInterval.frutis}`,
                  center: {  //Pivot Point
                      offset: 5,
                      size:5,
                      'background-color': "white",
                      'border-color': "none"
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


const dietElement1 = document.querySelector("button.diet1");
const dietElement2 = document.querySelector("button.diet2");
const dietModify = document.querySelector(".dietModify");
const diet = document.querySelector("#diet");
const diet2 = document.querySelector("#diet2");
const dietIntake = document.querySelector("#dietIntake");

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

const modifyFood = document.querySelector("#modifyFood");
const modifyGoal = document.querySelector("#modifyGoal");

modifyFood.addEventListener("submit", e => {
    e.preventDefault();
    let temp = {};
    if(dietCategory.hasOwnProperty(`${e.target[1].value}`)){
        dietCategory[`${e.target[1].value}`] += parseInt(e.target[2].value, 10);
    }
    for(let i = 0; i < e.target.length-1; i++){
        temp[e.target[i].id] = e.target[i].value;
        if(i !== 1)
            e.target[i].value = "";
    }
    foodIntake.push(temp)
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

    diet.classList.remove("hidden");
    diet2.classList.add("hidden");
    dietIntake.classList.add("hidden");
})


modifyGoal.addEventListener("submit", e => {
    e.preventDefault();
    for(let i = 0; i < e.target.length-1; i++){
        dietGoal[`${e.target[i].id}`] = e.target[i].value
        dietGoalInterval[`${e.target[i].id}`] = dietGoal[`${e.target[i].id}`] / 5
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

window.onload = () => {
    const data = [{
        "Workout Name": "Bench Press",
        "Sets": "3",
        "Reps": "8"
      },
      {
        "Workout Name": "Dead Lift",
        "Sets": "5",
        "Reps": "4"
      },
      {
        "Workout Name": "Squat",
        "Sets": "5",
        "Reps": "3"
      },
      {
        "Workout Name": "Bicep Curl",
        "Sets": "2",
        "Reps": "9"
      },
      {
        "Workout Name": "Leg Press",
        "Sets": "3",
        "Reps": "8"
      },
      {
        "Workout Name": "Lateral Raise",
        "Sets": "3",
        "Reps": "10"
      }
    ]
  
    const zgRef = document.querySelector('zing-grid');
  
    zgRef.setData(data);
  }