import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car1 Description",
            daily_rate: 140.0,
            license_plate: "DEF-2233",
            fine_amount: 100,
            brand: "Car_Brand",
            category_id: "Category_ID"
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car2 Description",
            daily_rate: 140.0,
            license_plate: "DEF-4455",
            fine_amount: 100,
            brand: "Car_Brand_Test",
            category_id: "Category_ID"
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_Brand_Test"
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car3 Description",
            daily_rate: 140.0,
            license_plate: "DEF-8855",
            fine_amount: 100,
            brand: "Car_Brand_Test",
            category_id: "123456"
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "123456"
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car4",
            description: "Car4 Description",
            daily_rate: 140.0,
            license_plate: "DEF-4499",
            fine_amount: 100,
            brand: "Car_Brand_Test",
            category_id: "Category_ID"
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car4"
        });

        expect(cars).toEqual([car]);
    });
});