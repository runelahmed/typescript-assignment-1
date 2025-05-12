{
  //

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  console.log(formatString('hello'));
  console.log(formatString('Runel', true));
  console.log(formatString('Ahmed', false));

  const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let newBooks = items.filter((book) => book.rating >= 4);

    return newBooks;
  }

  console.log(filterByRating(books));

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }

  concatenateArrays(['a', 'b'], ['c']); // Output: ["a", "b", "c"]
  concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]



  class Vehicle {
    private Make: string;
    private Year: number;

    constructor(Make: string, Year: number) {
      this.Make = Make;
      this.Year = Year;
    }

    getInfo() {
      return `Make: ${this.Make} Year: ${this.Year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(Make: string, Year: number, model: string) {
      super(Make, Year);
      this.model = model;
    }
    getModel() {
      return this.model;
    }
  }

  const myCar = new Car('Toyota', 2020, 'Corolla');

  console.log(myCar.getInfo());
  console.log(myCar.getModel());



  function processValue(value: string | number): number {
    if (typeof value === 'string') {
      return value.length;
    }

    if (typeof value === 'number') {
      return value * 2;
    }

    return value;
  }

  console.log(processValue('hello'));
  console.log(processValue(5));



  interface Product {
    name: string;
    price: number;
  }

  const products = [
    { name: 'Pen', price: 10 },
    { name: 'Notebook', price: 25 },
    { name: 'Bag', price: 50 },
  ];

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    return products.reduce((prev, curr) =>
      curr.price > prev.price ? curr : prev
    );
  }

  getMostExpensiveProduct(products);


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    switch (day) {
      case Day.Monday:
        return 'Weekday';
      case Day.Tuesday:
        return 'Weekday';
      case Day.Wednesday:
        return 'Weekday';
      case Day.Thursday:
        return 'Weekday';
      case Day.Friday:
        return 'Weekday';
      case Day.Saturday:
        return 'Weekend';
      case Day.Sunday:
        return 'Weekend';
    }
  }

  getDayType(Day.Monday); // Output: "Weekday"
  getDayType(Day.Sunday); // Output: "Weekend"
  

  async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (n <= 0) {
          reject(new Error('Negative number is not allowed'));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  squareAsync(4).then(console.log); // Output after 1s: 16
  squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed

  //
}
