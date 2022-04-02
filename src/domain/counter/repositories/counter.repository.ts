import { Counter } from "../models/counter";

export abstract class CounterRepository {
  abstract get(): Counter[];
  abstract save(counters: Counter[]): Promise<void>;
}
