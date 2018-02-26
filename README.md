# MCollection
MCollection is a JavaScript Collection API like Java Collection.
Created by Murad Imanbayli(www.imanbayli.net)

## Usage

Below is a quick example how to use ArrayList type:

```js
var names=new ArrayList();
names.add("Murad Imanbayli");

console.log(names.size());
names.add(0,"Ilkin Abudllayev");

console.log(names.isEmpty());

var names2=new ArrayList();
names2.add("Ehtiram Abdullayev");

names.addAll(names2);
console.log(names.toString());

console.log(names.get(0));

names.set(0,"Farid Mammadov");

console.log(names.toArray());

console.log(names.contains("Ehtiram Abdullayev"));

names.removeAll(names2)

console.log(names.subList(0,2).toString());
names.clear();
```
Below is a quick example how to use Map type:

```js
var tempMap = new Map();
tempMap.put("A",10);
console.log(tempMap.size());
console.log(tempMap.get("A"));

tempMap.clear();
console.log(tempMap.isEmpty());

tempMap.put("B",20);
console.log(tempMap.containsKey("B"));
console.log(tempMap.containsValue(20));

var tempMap2 = new Map();
tempMap2.put("B",20);
console.log(tempMap.equals(tempMap2));
tempMap2.put("A",10);
console.log(tempMap.equals(tempMap2));

console.log(tempMap.getOrDefault("B",9999));
console.log(tempMap.getOrDefault("unknown",9999))

tempMap.remove("C");
console.log(tempMap.keySet());

tempMap2.putAll(tempMap2);
console.log(tempMap.values());
```

