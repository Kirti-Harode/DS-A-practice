// input = [
//     ["1", "2", "3", "4", "5", "6", "7", "8"],
//     ["1", "2", "3", "4", "5", "6", "7", "9"],
//     ["cat", "accessories", "clothes"],
//     ["cat", "food", "dry"],
//     ["cat", "food", "wet"],
//     ["dog", "drinks"],
//     ["dog", "food"]];


output = [{
        "1": [{
            "2": [{
                "3": [{
                    "4": [{
                        "5": [{
                            "6": [{
                                "7": [{
                                    "8": []
                                }, {
                                    "9": []
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }]
    },
    {
        "cat": [{
            "accessories": [{
                "clothes": []
            }]
        }, {
            "food": [{
                "dry": []
            }, {
                "wet": []
            }]
        }]
    },
    {
        "dog": [{
            "food": []
        }, {
            "drinks": []
        }]
    }
]

input = [
    ["1", "2", "3", "4", "5", "6", "7", "8"],
    ["1", "2", "3", "4", "5", "6", "7", "9"],
    ["cat", "accessories", "clothes"],
    ["cat", "food", "dry"],
    ["cat", "food", "wet"],
    ["dog", "drinks"],
    ["dog", "food"]];

function parseData(input){
    const structure = input.reduce((obj, arr) => {  // {}, ["1", "2", "3", "4", "5", "6", "7", "8"]
        const last = arr.pop()
        const chain = arr.reduce((o, key) => {
          o[key] = o[key] || {}
          return o[key]
        }, obj)
        chain[last] = []
        return obj
      }, {})
      
      console.log(structure)
      var finalArray = Object.entries(structure).map(
        ([k,v]) => ({[k]:v})
      )
      return finalArray;


}

console.log(parseData(input));