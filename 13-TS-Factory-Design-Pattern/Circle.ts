import {Shape} from "./Shape";

export class Circle implements Shape{
    draw(): void {
        console.log(`Circle : Drawing a circle`);
    }
}
