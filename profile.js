var i, j, k,
    n = 42,
    objects = [],
    events = [],
    functions = [],
    random = []

for (i=0; i<n; i++) {
    functions.push(function(args) {
        
    });
    objects.push(cEventDecorateObj({}));
    random.push(i);
}

console.profile();
    for (i=0; i<n; i++) {
        for (j=0; j<n; j++) {
            objects[i].addEvent(new cEvent('event_' + i + '_' + j));
            for (k=0; k<n; k++) {
                objects[i].subscribe(functions[k], 'event_' + i + '_' + j);
            }
        }
    }
console.profileEnd();

console.profile();
    for (i=0; i<n; i++) {
        objects[i].fire();
    }
console.profileEnd();

random.sort(function() {return 0.5 - Math.random()});
console.profile();
    for (i=0; i<n; i++) {
        for (j=0; j<n; j++) {
            for (k=0; k<n; k++) {
                objects[random[i]].unsubscribe(functions[random[k]], 'event_' + random[i] + '_' + random[j]);
            }
        }
    }
console.profileEnd();