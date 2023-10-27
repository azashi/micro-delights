const MumbaiPOI = [
  {
    id: "1",
    name: "Gateway of India",
    type: "Landmark",
    description: "Historic arch monument overlooking the Arabian Sea.",
    location: "Apollo Bunder, Colaba",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Marine Drive",
    type: "Promenade",
    description: "A picturesque seafront boulevard along the Arabian Sea.",
    location: "Marine Drive, South Mumbai",
    rating: 4.6,
  },
  {
    id: "3",
    name: "Chhatrapati Shivaji Terminus",
    type: "Architectural Landmark",
    description:
      "Historic railway station known for its stunning architecture.",
    location: "CST Area, Fort",
    rating: 4.7,
  },
  {
    id: "6",
    name: "Elephanta Caves",
    type: "Historical Site",
    description:
      "Ancient rock-cut caves on Elephanta Island dedicated to Shiva.",
    location: "Elephanta Island",
    rating: 4.3,
  },
  {
    id: "7",
    name: "Juhu Beach",
    type: "Beach",
    description:
      "A popular beach known for its vibrant atmosphere and street food.",
    location: "Juhu, Western Suburbs",
    rating: 4.2,
  },
  {
    id: "8",
    name: "Sanjay Gandhi National Park",
    type: "National Park",
    description: "A wildlife reserve within Mumbai's city limits.",
    location: "Borivali",
    rating: 4.4,
  },
  {
    id: "9",
    name: "Chor Bazaar",
    type: "Market",
    description: "A bustling market known for antiques and vintage items.",
    location: "Bhendi Bazaar, South Mumbai",
    rating: 4.1,
  },
  {
    id: "10",
    name: "Powai Lake",
    type: "Scenic Lake",
    description: "A serene lake surrounded by gardens and walkways.",
    location: "Powai, Eastern Suburbs",
    rating: 4.0,
  },
];

export type POI = (typeof MumbaiPOI)[0];

export const generatePOI = (repeation?: number) => {
  return Array.from({ length: repeation || 1 }, (_, i) =>
    MumbaiPOI.map((p) => ({ ...p, id: p.id + i }))
  ).flat();
};
