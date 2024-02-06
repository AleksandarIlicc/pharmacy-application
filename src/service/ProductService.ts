interface ProductService {
  products: IProduct[];
  getAllProducts(): IProduct[];
  getProductById(productId: string): IProduct | undefined;
  deleteProduct(productId: string): void;
  addProduct(product: IProduct): void;
  updateProduct(productId: string, updatedProduct: IProduct): void;
}

export interface IProduct {
  id: string;
  name: string;
  manufacturer: IManufacturer;
  price: number;
  expiryDate: Date;
}

export interface IManufacturer {
  id: string;
  name: string;
}

class ProductService implements ProductService {
  products: IProduct[] = [
    {
      id: "103",
      name: "AllergyRelief Tablets",
      manufacturer: { id: "745", name: "HealthMasters Pharma" },
      price: 25,
      expiryDate: new Date("2026-11-30"),
    },
    {
      id: "104",
      name: "HeadacheAway Capsules",
      manufacturer: { id: "746", name: "NutriHealth Labs" },
      price: 18,
      expiryDate: new Date("2025-10-20"),
    },
    {
      id: "105",
      name: "DigestEase Probiotics",
      manufacturer: { id: "747", name: "HealthMasters Pharma" },
      price: 22,
      expiryDate: new Date("2025-12-15"),
    },
    {
      id: "106",
      name: "JointFlex Cream",
      manufacturer: { id: "748", name: "PharmaCare Innovations" },
      price: 28,
      expiryDate: new Date("2027-11-01"),
    },
    {
      id: "107",
      name: "SleepWell Elixir",
      manufacturer: { id: "749", name: "NutriHealth Labs" },
      price: 35,
      expiryDate: new Date("2025-01-10"),
    },
    {
      id: "108",
      name: "VitaminBoost Chewables",
      manufacturer: { id: "750", name: "NutriHealth Labs" },
      price: 50,
      expiryDate: new Date("2025-10-05"),
    },
    {
      id: "109",
      name: "EnergyBlast Drink",
      manufacturer: { id: "751", name: "NutriHealth Labs" },
      price: 32,
      expiryDate: new Date("2025-09-30"),
    },
    {
      id: "110",
      name: "SkinGlow Serum",
      manufacturer: { id: "752", name: "PharmaCare Innovations" },
      price: 40,
      expiryDate: new Date("2024-12-20"),
    },
    {
      id: "111",
      name: "ImmuneGuard Capsules",
      manufacturer: { id: "753", name: "HealthMasters Pharma" },
      price: 27,
      expiryDate: new Date("2025-11-15"),
    },
    {
      id: "112",
      name: "StressRelief Tea",
      manufacturer: { id: "754", name: "HealthMasters Pharma" },
      price: 12,
      expiryDate: new Date("2024-10-25"),
    },
    {
      id: "113",
      name: "EyeCare Drops",
      manufacturer: { id: "755", name: "NutriHealth Labs" },
      price: 18,
      expiryDate: new Date("2024-12-10"),
    },
    {
      id: "114",
      name: "Detoxify Cleanse Kit",
      manufacturer: { id: "756", name: "NutriHealth Labs" },
      price: 45,
      expiryDate: new Date("2025-02-01"),
    },
    {
      id: "115",
      name: "HairNourish Tablets",
      manufacturer: { id: "756", name: "NutriHealth Labs" },
      price: 30,
      expiryDate: new Date("2024-10-15"),
    },
    {
      id: "116",
      name: "VisionGuard Capsules",
      manufacturer: { id: "757", name: "NutriHealth Labs" },
      price: 25,
      expiryDate: new Date("2024-11-30"),
    },
    {
      id: "117",
      name: "PainRelief Cream",
      manufacturer: { id: "758", name: "NutriHealth Labs" },
      price: 22,
      expiryDate: new Date("2024-12-20"),
    },
  ];

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(productId: string): IProduct | undefined {
    return this.products.find((product) => product.id === productId);
  }

  addProduct(newProduct: IProduct): void {
    this.products.push(newProduct);
  }

  updateProduct(productId: string, updatedProduct: IProduct): void {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );

    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
    }
  }

  deleteProduct(productId: string): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}

export default new ProductService();
