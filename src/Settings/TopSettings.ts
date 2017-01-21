export class TopSettings {
    top: number;
    defaultTop: number;

    constructor() {
        this.top = null;
        this.defaultTop = null;
    }

    toString(): string {
        return '$top=' + (this.top !== null ? this.top : this.defaultTop);
    };

    reset(): void {
        this.top = null;
    }

    isSet(): boolean {
        return this.top !== null || this.defaultTop !== null;
    }
}
