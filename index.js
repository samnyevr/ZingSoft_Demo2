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

let myConfig = {
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
                "values": `0:${dietGoal.veggie}:2`,
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
                "values": [dietCategory.veggie],
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
                "values": `0:${dietGoal.carbs}:2`,
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
                "values": `0:${dietGoal.proteins}:2`,
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
                "values": `0:${dietGoal.fruits}:2`,
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
        dietIntake.classList.add("hidden")
    }
})

dietElement2.addEventListener("click", () => {
    if(diet2.classList.contains("hidden")){
        diet2.classList.remove("hidden");
        diet.classList.add("hidden");
        dietIntake.classList.add("hidden")
    }
})

dietModify.addEventListener("click", () => {
    if(dietIntake.classList.contains("hidden")){
        dietIntake.classList.remove("hidden");
        diet.classList.add("hidden");
        diet2.classList.add("hidden")
    }
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

