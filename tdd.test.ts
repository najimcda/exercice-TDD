import { describe, expect, it } from "vitest";
import { Door } from "./src/app/tdd";




describe("Porte", () => {
  it("Une porte fermée ne peut pas être franchie.", () => {
    const door = new Door(false);

    door.isOpen(false);

    expect(door.status).toBe(false);
    
  });
})