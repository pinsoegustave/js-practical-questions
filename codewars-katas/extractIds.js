function extractIds(obj){
    // complete this method  
    return [
        obj.id,
        ...(obj.items ? obj.items.flatMap(extractIds) : [])
    ];
          
}
var data = {
    id: 1,
    items: [
      {id: 2},
      {id: 3, items: [
        {id: 4},
        {id: 5}
      ]}
    ]
  }
console.log(extractIds(data));