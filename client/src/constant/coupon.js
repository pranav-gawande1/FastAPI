const coupons = [
  {
    id: "WELCOME50",
    code: "WELCOME50",
    description: "Get ₹50 off on your first order",
    discountType: "flat", // flat or percentage
    discountValue: 50,
    minOrderAmount: 199,
    maxDiscount: null,
    expiryDate: "2026-12-31",
    isActive: true
  },
  {
    id: "PIZZA20",
    code: "PIZZA20",
    description: "20% off on all pizzas",
    discountType: "percentage",
    discountValue: 20,
    minOrderAmount: 299,
    maxDiscount: 150,
    expiryDate: "2026-06-30",
    isActive: true
  },
  {
    id: "FESTIVE100",
    code: "FESTIVE100",
    description: "Flat ₹100 off on orders above ₹599",
    discountType: "flat",
    discountValue: 100,
    minOrderAmount: 599,
    maxDiscount: null,
    expiryDate: "2026-03-31",
    isActive: false
  },
//   {
//     id: "EXPIRED10",
//     code: "EXPIRED10",
//     description: "10% off (Expired Coupon)",
//     discountType: "percentage",
//     discountValue: 10,
//     minOrderAmount: 200,
//     maxDiscount: 100,
//     expiryDate: "2024-01-01",
//     isActive: false
//   }
];

export default coupons;