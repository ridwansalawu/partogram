var _ = require("lodash");


exports.setInitialGraphData = () => {
            const labourTime = _.range(0, 13);
            let dilatation = _.range(0, 11);
        //   const alertDataset =  [[...labourTime], [...dilatation]];
            const dataset = labourTime.map((item, index) => {
                return {"labourTime": item, "dilatation": dilatation[index]}
            })
            return dataset
        }

exports.setAlertLineData = () => {
      let labourTime = [0,1,2,3,4,5,6]
      let dilatation = [4,5,6,7,8,9,10]
      const dataset = labourTime.map((item, index) => {
          return {"labourTime": item, "dilatation": dilatation[index]}
          })
      return dataset
          }

exports.setActionLineData = () => {
     let labourTime = [4,5,6,7,8,9,10]
     let dilatation = [4,5,6,7,8,9,10]
     const dataset = labourTime.map((item, index) => {
     return {"labourTime": item, "dilatation": dilatation[index]}
          })
     return dataset
      }

exports.setCustomLineData = () => {
    let labourTime = [0,1,2]
    let dilatation = [4,4,4]
    // const alertDataset =  [[...labourTime], [...dilatation]];
    const dataset = labourTime.map((item, index) => {
    return {"labourTime": item, "dilatation": dilatation[index]}
         })
    return dataset
     }

    //  ====================================================

exports.setInitialGraphDataMaternalHeart = () => {
            const time = _.range(0, 141);
            const heartRate = _.range(0, 141);
        //   const alertDataset =  [[...labourTime], [...dilatation]];
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            console.log("nownownowonw", time)
            
            return dataset
        }
exports.setLowerMaternalHeart = () => {
            const time = _.range(0, 13);
            const heartRate = _.range(40, 141, 0);
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            console.log("nownownowonw", heartRate)
            
            return dataset
        }
exports.setHigherMaternalHeart = () => {
            const time = _.range(0, 13);
            const heartRate = _.range(100, 141, 0);
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            return dataset
        }
exports.setCustomMaternalHeart = () => {
            const time =[0,2,4,6,8,10];
            const heartRate = [80,85,90,70,100,110];
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            return dataset
        }


// ===================================================================



exports.setInitialGraphDataFetalHeart = () => {
            const time = _.range(0, 181);
            const heartRate = _.range(0, 181);
        //   const alertDataset =  [[...labourTime], [...dilatation]];
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            console.log("nownownowonw", time)
            
            return dataset
        }
exports.setLowerFetalHeart = () => {
            const time = _.range(0, 13);
            const heartRate = _.range(60, 181, 0);
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            console.log("nownownowonw", heartRate)
            
            return dataset
        }
exports.setHigherFetalHeart = () => {
            const time = _.range(0, 13);
            const heartRate = _.range(140, 181, 0);
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            return dataset
        }
exports.setCustomFetalHeart = () => {
            const time =[0,2,4,6,8,10];
            const heartRate = [80,85,90,70,100,110];
            const dataset = time.map((item, index) => {
                return {"time": item, "heartRate": heartRate[index]}
            })
            return dataset
        }



// exports.setAlertLineData = () => {
//       let labourTime = [0,1,2,3,4,5,6]
//       let dilatation = [4,5,6,7,8,9,10]
//       // const alertDataset =  [[...labourTime], [...dilatation]];
//       const dataset = labourTime.map((item, index) => {
//           return {"labourTime": item, "dilatation": dilatation[index]}
//           })
//       return dataset
//           }

// exports.setActionLineData = () => {
//      let labourTime = [4,5,6,7,8,9,10]
//      let dilatation = [4,5,6,7,8,9,10]
//   //    const alertDataset =  [[...labourTime], [...dilatation]];
//      const dataset = labourTime.map((item, index) => {
//      return {"labourTime": item, "dilatation": dilatation[index]}
//           })
//      return dataset
//       }

// exports.setCustomLineData = () => {
//     let labourTime = [0,1,2]
//     let dilatation = [4,4,4]
//     // const alertDataset =  [[...labourTime], [...dilatation]];
//     const dataset = labourTime.map((item, index) => {
//     return {"labourTime": item, "dilatation": dilatation[index]}
//          })
//     return dataset
//      }





// module.exports = graphData;