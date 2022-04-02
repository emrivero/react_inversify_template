import { Counter } from "../../../../domain/counter/models/counter";
import { CounterRepository } from "../../../../domain/counter/repositories/counter.repository";

export class HttoCounterRepository extends CounterRepository {
  get(): Counter[] {
    throw new Error("Method not implemented.");
  }

  save(counters: Counter[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
