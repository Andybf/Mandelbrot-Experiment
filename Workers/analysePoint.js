this.onmessage = function(e) {
    let pointsList = []
    for (var x=-e.data.minusx; x<=e.data.plusx; x = x+e.data.pointRatio) {
        for (var y=-e.data.minusy; y<=e.data.plusy; y = y+e.data.pointRatio) {
            let realX = x;
            let realY = y;
            var iterations = 0;
            for (iterations; iterations<e.data.maxIt; iterations++) {            
                var tempX = Math.pow(realX,2) - Math.pow(realY,2) + x;
                var tempY = 2*realX*realY + y;
                realX = tempX;
                realY = tempY;
                if (realX * realY > 2) {
                    pointsList.push({x: x, y : y, it : iterations});
                    break;
                }
            }
        }
    }
    this.postMessage({point: pointsList, thread: true});
    return false;
}