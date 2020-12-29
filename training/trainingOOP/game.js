import { Character } from "./Character.js";
import { Shop } from "./Shop.js";

const player = new Character('link', 7, 5);
const tingle = new Character('Tingle', 5, 150);

player.talk(tingle);

