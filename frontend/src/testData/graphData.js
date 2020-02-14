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
      // const alertDataset =  [[...labourTime], [...dilatation]];
      const dataset = labourTime.map((item, index) => {
          return {"labourTime": item, "dilatation": dilatation[index]}
          })
      return dataset
          }

exports.setActionLineData = () => {
     let labourTime = [4,5,6,7,8,9,10]
     let dilatation = [4,5,6,7,8,9,10]
  //    const alertDataset =  [[...labourTime], [...dilatation]];
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





// module.exports = graphData;