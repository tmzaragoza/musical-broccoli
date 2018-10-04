var countTo = prompt( 'how high should we count even numbers?');

var sure = confirm('are you sure you want to count to' + countTo);

if(sure) {
    for(var i = 0; i < countTo; i++) {
        var remainder = i % 2
        if(remainder === 0) {
            console.log(i, 'is even');
    }
}
}    
