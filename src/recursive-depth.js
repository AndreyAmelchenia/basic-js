module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let countMax = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                let count = 1;
                count =  count + this.calculateDepth(element);
                if (count > countMax) {
                    countMax = count;
                }
            }
        });
        return countMax;
    }
};