export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price?: string;
  popular?: boolean;
  features: string[];
  imageUrl: string;
}

export const coursesData: Course[] = [
  {
    id: "beginner",
    title: "Beginner Lessons",
    shortDesc: "Start from scratch and build confidence step by step with patient guidance.",
    fullDesc: "Designed for first-time drivers. Covers basic car control, clutch & gear management, steering control, parking, traffic rules, and basic road confidence.",
    duration: "15 Days / 30 Sessions",
    price: "₹4,500",
    popular: true,
    features: [
      "Steering & pedal mastery",
      "Clutch control & hill start",
      "Traffic rules & road signs",
      "Parallel & reverse parking",
      "Dual-control safety car",
      "RTO License Assistance"
    ],
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "refresher",
    title: "Refresher Course",
    shortDesc: "Get back on the road with updated skills and renewed confidence.",
    fullDesc: "Perfect for licensed drivers who haven't driven in a while or feel nervous in heavy traffic. Focused on regaining control and practical city navigation.",
    duration: "7 Days / 14 Sessions",
    price: "₹2,800",
    popular: false,
    features: [
      "Heavy traffic confidence",
      "Narrow street navigation",
      "Parking & reverse practice",
      "Night driving practice",
      "Custom lesson pace"
    ],
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "test-prep",
    title: "Test Preparation",
    shortDesc: "Be fully prepared to pass your practical driving test on the first attempt.",
    fullDesc: "Intensive training matching official RTO test track requirements (H-track, 8-track, parallel park, ramp test) with mock evaluation by senior instructors.",
    duration: "5 Days Intensive",
    price: "₹2,200",
    popular: false,
    features: [
      "RTO Track simulation (H & 8 Track)",
      "Gradient Ramp stop & start",
      "Mock driving test evaluation",
      "Common mistake prevention",
      "Same car provided for test"
    ],
    imageUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "advanced-highway",
    title: "Advanced / Highway Driving",
    shortDesc: "Gain confidence in complex highway, expressway, and night driving conditions.",
    fullDesc: "Takes your driving to the next level. Master high-speed overtaking, lane discipline, expressway merging, night driving visibility, and emergency maneuvering.",
    duration: "3 Days Special",
    price: "₹2,500",
    popular: false,
    features: [
      "Expressway & Highway driving",
      "High speed lane changing & merging",
      "Night driving & headlight usage",
      "Wet weather & safety braking",
      "Long route endurance driving"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
  }
];
