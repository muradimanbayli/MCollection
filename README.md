# MCollection
MCollection is a JavaScript Collection API like Java Collection.
Created by Murad Imanbayli(www.imanbayli.net)

## Usage

Below is a quick example how to use ArrayList type:

```js
var names=new ArrayList();
names.add("Murad Imanbayli");

console.log(names.size());
names.add(0,"Ilkin Abdullayev");

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
Below is a quick example how to use Set type:
```js
var countries=new Set();
countries.add("Azerbaijan");
countries.add("Turkey");

var countries2=new Set();
countries2.add("Hungary");
countries2.add("Hungary");

countries.addAll(countries2);
countries2.add("Hungary2");

//countries.clear();
console.log(countries.toArray().toString());
console.log(countries.contains("Turkey"));

console.log(countries.containsAll(countries2));

console.log(countries.size());
console.log(countries.isEmpty());

//console.log(countries.remove("Hungary2"));

//console.log(countries.removeAll(countries2));
console.log(countries.toArray().toString());
```

You can use for loop and Iterator

```js
var names=new ArrayList();
names.add("Murad Imanbayli");
names.add("Ilkin Abdullayev");
names.add("Ehtiram Abdullayev");

var iter=names.iterator();
while(iter.hasNext()){
  console.log(iter.next());
}

for(var i=0;i<names.size();i++){
  console.log(names.get(i));
}

var countries=new Set();
countries.add("Azerbaijan");
countries.add("Turkey");
countries.add("Hungary");
countries.add("Hungary");

var iter=countries.iterator();
while(iter.hasNext()){
  console.log(iter.next());
}
```



