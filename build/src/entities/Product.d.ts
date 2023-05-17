import Model from "./model.entity";
import { User } from "./User";
declare enum categoryType {
    TOWEL = "Toalha",
    PURSE = "Bolsa",
    COVER = "Capa",
    AMERICAN_GAME = "Jogo Americano",
    MASK = "M\u00E1scara"
}
export declare class Product extends Model {
    name: string;
    price: number;
    available: boolean;
    category: categoryType;
    image: string;
    weight: number;
    height: number;
    width: number;
    material: string;
    description: string;
    users: User[];
}
export {};
//# sourceMappingURL=Product.d.ts.map