import { describe, expect, it } from "vitest";
import { Door, Gamer, Room } from "./tdd";




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

   it("le joueur peut ouvrir la porte s'il possède la clé correspondante", () => {
    const door = new Door(false, "blueKey");
    const gamer = new Gamer("John");
    gamer.addKey("blueKey");
    gamer.useKey(door, gamer);
    

    expect(door.status).toBe(true);
    
  });

    it("le joueur ne peut pas ouvrir la porte s'il ne possède pas la clé correspondante.", () => {
    const door = new Door(false, "blueKey");
    const gamer = new Gamer("John");
    gamer.addKey("redKey");
    gamer.useKey(door, gamer);
    

    expect(door.status).toBe(false);

  });

  it("Lorsqu'une clé est utilisée pour ouvrir une porte, elle est retirée de l'inventaire du joueur.", () => {
    const door = new Door(false, "blueKey");
    const gamer = new Gamer("John");
    gamer.addKey("redKey");
    gamer.addKey("blueKey");
    gamer.useKey(door, gamer);
    expect(gamer.keys.length).toBe(1);
    expect(gamer.keys).toStrictEqual([{name: "redKey"}]);
  });

  it("Lorsqu'un joueur ramasse un objet, celui-ci est ajouté à son inventaire et retiré de la salle.", () => {
    const gamer = new Gamer("John");
    const room = new Room("Salle 1", ["épée", "or"]);
    gamer.lootItem(room, room.items[0]);
    expect(gamer.keys).toStrictEqual([{name: "épée"}]);
    expect(room.items).not.toContain("épée");
  });
})
