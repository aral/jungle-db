Set.prototype.union = function(setB) {
    const union = new Set(this);
    for (const elem of setB) {
        union.add(elem);
    }
    return union;
};

Set.prototype.intersection = function(setB) {
    const intersection = new Set();
    for (const elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
};

Set.prototype.difference = function(setB) {
    const difference = new Set(this);
    for (const elem of setB) {
        difference.delete(elem);
    }
    return difference;
};

Set.from = function(arg) {
    // Check if iterable.
    if (arg && typeof obj[Symbol.iterator] === 'function') {
        return new Set(arg);
    }
    return new Set([arg]);
};
