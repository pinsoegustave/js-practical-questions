function IceCream() {
    this.scoops = 0;
}

IceCream.prototype.addScoop = function() {
    setTimeout(function() {
        this.scoops++;
        console.log('scoop added!');
    }, 5000);
}

const desert = new IceCream();
desert.addScoop();