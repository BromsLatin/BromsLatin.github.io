class Word {
    constructor(getter, groupGetter, filler, activator, tableName, table, boxes, set_current) {
        this.get         = getter;
        this.getGroup    = groupGetter;
        this.fill        = filler;
        this.activate    = activator;
        this.tableName   = tableName;
        this.table       = table;
        this.boxes       = boxes;
        this.set_current = set_current;
    }
}

export { Word };
