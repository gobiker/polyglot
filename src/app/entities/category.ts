export class Category {
    constructor(public id: number, public parentId: number, 
        public cns: string, public cnt: string,
        public en: string, public de: string) { }

    update(cns: string, cnt: string, en: string, de: string) {
        this.cns = cns;
        this.cnt = cnt;
        this.en = en;
        this.de = de;
    }

    clone() {
        const cat = new Category(this.id, this.parentId,
            this.cns, this.cnt, this.en, this.de);
        return cat;
    }
}

