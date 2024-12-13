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
    { id: 1, name: "Ajay Singh" ,shopName:"Ajay Electronics",contact:9950449968, latitude: 28.613500, longitude: 77.249000 },
    { id: 2, name: "Vijay devakar" ,shopName:"V-Mart",contact:9990449968, latitude: 28.615000, longitude: 77.208500 },
    { id: 3, name: "Rahul Mehta",shopName:"Rahul Medicos",contact:8950889968,latitude: 28.612800, longitude: 77.237200 },
    { id: 4, name: "Mohan",shopName:"Mohan Provisional store",contact:7929449968, latitude: 28.618000, longitude:  77.228800 },
    { id: 5, name: "Shriyam",shopName:"Maha clothing store",contact:9850443468, latitude: 28.613500, longitude: 77.229800 },
  ];
  
  export const users = [
    { id:1,
      name: "Rahul Sharma",
      contact: "+91-9876543210",
      latitude: 28.618700,
      longitude: 77.229900,
    },
    { id:2,
      name: "Priya Verma",
      contact: "+91-8765432109",
      latitude: 28.610100,
      longitude: 77.230500,
    },
    { id:3,
      name: "Aman Khurana",
      contact: "+91-9988776655",
      latitude: 28.617600,
      longitude: 77.220800,
    },
    { id:4,
      name: "Neha Gupta",
      contact: "+91-8899776655",
      latitude: 28.610900,
      longitude: 77.220000,
    },
    { id:5,
      name: "Rajesh Mehta",
      contact: "+91-7788995544",
      latitude: 28.617200,
      longitude: 77.230700,
    },
  ];
  // Sample data for products to be delivered
  export const orders = [
    { id: 1, pickup: "Fresh Mart", drop: "Customer A", items: ["Apples", "Milk"] },
    { id: 2, pickup: "Grocery Hub", drop: "Customer B", items: ["Rice", "Eggs"] },
    { id: 3, pickup: "Veggie World", drop: "Customer C", items: ["Tomatoes", "Onions"] },
    { id: 4, pickup: "Bakery Bliss", drop: "Customer D", items: ["Cakes", "Cookies"] },
    { id: 5, pickup: "Dairy Delight", drop: "Customer E", items: ["Cheese", "Butter"] },
  ];
  