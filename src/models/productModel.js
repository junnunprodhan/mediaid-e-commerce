const { Schema, model, mongoose, models } = require("mongoose");

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    regularPrice: { type: Number, required: true },
    regularDiscountPercent: {
      type: Number,
      required: true,
      default: 0,
      max: 100,
      min: 0,
    },
    vipDiscountPercent: {
      type: Number,
      required: true,
      default: 0,
      max: 100,
      min: 0,
    },
    thumbnail: { type: String, required: true },
    images: { type: Array, required: true },
    brand: { type: mongoose.Schema.ObjectId, ref: "brands" },
    highlight: { type: Array },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
      required: true,
    },
    subcategory: {
      type: mongoose.Schema.ObjectId,
      ref: "subcategories",
      required: true,
    },
    description: { type: String, required: true },
    typeOfSelling: {
      type: String,
      enum: ["new", "flash_sale", "feature", "popular", "best_sale", "push"],
      default: "new",
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalSales: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "inactive"], default: "inactive" },
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    addedBy: { type: Schema.ObjectId, required: true, ref: "admins" },
    availableStock: { type: Number, required: true, default: 0 },
    tag: { type: Array, required: true },
  },
  { timestamps: true }
);

const productModel = models.products || model("products", productSchema);

export default productModel;
