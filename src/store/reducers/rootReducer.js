const initState = {
  users: [
    {
      id: 1,
      name: "son",
    },
    {
      id: 2,
      name: "son2",
    },
  ],
  products: [
    {
      id: 1,
      brand: "gucci",
      category: ["shirt", "women"],
      name: "Áo thun nữ mỏng",
      price: 37000,
      discount: 15,
      description:
        "Áo thun in tay lỡ nữ freesize phông form rộng dáng Unisex - Ulzzang mặc cặp, nhóm, lớp hình BƯỚM MISSOUT BUTTERFLY",
      avatarIndex: 0,
      images: [
        "https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg",
        "https://anhgaisexy.com/wp-content/uploads/2021/08/home-anhgaisexy-600x313.webp",
      ],
      videos: [{}, {}],
      sold: 4,
    },
    {
      id: 2,
      brand: "gucci",
      category: ["shirt", "women"],
      name: "Áo thun nữ mỏng",
      price: 37000,
      discount: 15,
      description:
        "Áo thun in tay lỡ nữ freesize phông form rộng dáng Unisex - Ulzzang mặc cặp, nhóm, lớp hình BƯỚM MISSOUT BUTTERFLY",
      avatarIndex: 0,
      images: [
        "https://product.hstatic.net/200000182297/product/1_244382f451314553b584c579e177b96b_1024x1024.jpg",
        "https://anhgaisexy.com/wp-content/uploads/2021/08/home-anhgaisexy-600x313.webp",
      ],
      videos: [{}, {}],
      sold: 4,
    },
    {
      id: 3,
      brand: "gucci",
      category: ["shirt", "women"],
      name: "Áo thun nữ mỏng",
      price: 37000,
      discount: 15,
      description:
        "https://product.hstatic.net/200000182297/product/2_f497b548bbeb44a29c81fcf47dac5840_master.jpg",
      avatarIndex: 0,
      images: [
        "https://product.hstatic.net/200000182297/product/2_f497b548bbeb44a29c81fcf47dac5840_master.jpg",
        "https://anhgaisexy.com/wp-content/uploads/2021/08/home-anhgaisexy-600x313.webp",
      ],
      videos: [{}, {}],
      sold: 4,
    },
    {
      id: 4,
      brand: "gucci",
      category: ["shirt", "women"],
      name: "Áo thun nữ mỏng",
      price: 37000,
      discount: 15,
      description:
        "Áo thun in tay lỡ nữ freesize phông form rộng dáng Unisex - Ulzzang mặc cặp, nhóm, lớp hình BƯỚM MISSOUT BUTTERFLY",
      avatarIndex: 0,
      images: [
        "https://product.hstatic.net/200000182297/product/2_64fd036bd95a48f1aee58d0f1e7e86bf_1024x1024.jpg",
        "https://anhgaisexy.com/wp-content/uploads/2021/08/home-anhgaisexy-600x313.webp",
      ],
      videos: [{}, {}],
      sold: 4,
    },
    {
      id: 5,
      brand: "gucci",
      category: ["shirt", "women"],
      name: "Áo thun nữ mỏng",
      price: 37000,
      discount: 15,
      description:
        "Áo thun in tay lỡ nữ freesize phông form rộng dáng Unisex - Ulzzang mặc cặp, nhóm, lớp hình BƯỚM MISSOUT BUTTERFLY",
      avatarIndex: 0,
      images: [
        "https://product.hstatic.net/200000182297/product/2_7c8c163fb55242a29a69c8246729d597_1024x1024.jpg",
        "https://anhgaisexy.com/wp-content/uploads/2021/08/home-anhgaisexy-600x313.webp",
      ],
      videos: [{}, {}],
      sold: 4,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS":
      console.log("sort");
      return state;

    default:
      return state;
  }
};

export default rootReducer;
