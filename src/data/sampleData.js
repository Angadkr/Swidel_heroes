// Sample data for delivery boy profile
export const deliveryBoy = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    rating: 4.8,
    reviews: 200,
    rank: 1,
    rewards: ["Star Performer", "Monthly Top Deliverer", "Fastest Delivery"],
  };
  
  // Sample data for other delivery boys (Leaderboard competitors)
  export const deliveryBoys = [
    { name: "Jane Smith", photo: "https://via.placeholder.com/150", rating: 4.7, rank: 2, reviews: 180 },
    { name: "Robert Brown", photo: "https://via.placeholder.com/150", rating: 4.6, rank: 3, reviews: 170 },
    { name: "Alice Johnson", photo: "https://via.placeholder.com/150", rating: 4.5, rank: 4, reviews: 160 },
    { name: "Michael Davis", photo: "https://via.placeholder.com/150", rating: 4.4, rank: 5, reviews: 150 },
  ];
  
  // Sample data for shops
  export const shops = [
    { id: 1, name: "Fresh Mart", latitude: 37.7749, longitude: -122.4194 },
    { id: 2, name: "Grocery Hub", latitude: 37.7849, longitude: -122.4094 },
    { id: 3, name: "Veggie World", latitude: 37.7949, longitude: -122.3994 },
    { id: 4, name: "Bakery Bliss", latitude: 37.8049, longitude: -122.3894 },
    { id: 5, name: "Dairy Delight", latitude: 37.8149, longitude: -122.3794 },
  ];
  
  // Sample data for products to be delivered
  export const orders = [
    { id: 1, pickup: "Fresh Mart", drop: "Customer A", items: ["Apples", "Milk"] },
    { id: 2, pickup: "Grocery Hub", drop: "Customer B", items: ["Rice", "Eggs"] },
    { id: 3, pickup: "Veggie World", drop: "Customer C", items: ["Tomatoes", "Onions"] },
    { id: 4, pickup: "Bakery Bliss", drop: "Customer D", items: ["Cakes", "Cookies"] },
    { id: 5, pickup: "Dairy Delight", drop: "Customer E", items: ["Cheese", "Butter"] },
  ];
  