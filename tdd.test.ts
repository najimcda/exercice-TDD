import { describe, expect, it } from "vitest";
import { Door, Gamer } from "./src/app/tdd";




describe("Porte", () => {
  it("Une porte fermée ne peut pas être franchie.", () => {
    const door = new Door(false, "blueKey");

    door.isOpen(false);

    expect(door.status).toBe(false);
    
  });

   it("Une porte ouverte peut être franchie.", () => {
    const door = new Door(true, "blueKey");
    

    door.isOpen(true);
    

    expect(door.status).toBe(true);
    
  });

   it("chaque porte peut nécessiter une clé particulière.", () => {
    const door = new Door(false, "blueKey");
    const gamer = new Gamer("John");
    gamer.addKey("blueKey");
    gamer.useKey(door, gamer);
    

    expect(door.status).toBe(true);

    
    
  });

})