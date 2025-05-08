// Problem 1


function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}











// Problem 2



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}












// Problem 3


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, current) => acc.concat(current), []);
}















// Problem 4





class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}












// Problem 5



function processValue(value: string | number): number {
    return typeof value === 'string' ? value.length : value * 2;
}













// Problem 6

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, product) => product.price > max.price ? product : max);
}

// Problem 7


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// Problem 8


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}