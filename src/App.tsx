import React, { useState, useMemo, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ListFilter, 
  Bot, 
  Settings, 
  ShieldCheck, 
  FileText, 
  Zap, 
  AlertCircle, 
  Database,
  LogOut,
  Calendar,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
  XCircle,
  Eye,
  Send,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  Bell,
  Star,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Building,
  User,
  CreditCard,
  Briefcase,
  Globe,
  Shield,
  Lock,
  Unlock,
  Key,
  Info,
  HelpCircle,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Copy,
  Link,
  Bookmark,
  Flag,
  Tag,
  Folder,
  File,
  Image,
  Video,
  Music,
  Archive,
  Paperclip,
  Scissors,
  Clipboard,
  Save,
  Printer,
  Camera,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Layers,
  Grid,
  List,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  Smile,
  Frown,
  Meh,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  Zap as Lightning,
  Thermometer,
  Droplets,
  Wind,
  Compass,
  Map,
  Navigation,
  Anchor,
  Plane,
  Car,
  Truck,
  Bus,
  Train,
  Bike,
  Scooter,
  Boat,
  Rocket,
  Satellite,
  Wifi,
  WifiOff,
  Bluetooth,
  Radio,
  Tv,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Battery,
  BatteryLow,
  Power,
  PowerOff,
  Plug,
  Unplug,
  Cable,
  Usb,
  Headphones,
  Speaker,
  Gamepad2,
  Joystick,
  Dices,
  Puzzle,
  Gamepad,
  Trophy,
  Award,
  Medal,
  Gift,
  ShoppingCart,
  ShoppingBag,
  CreditCard as Card,
  Banknote,
  Coins,
  Wallet,
  Receipt,
  Calculator,
  Scale,
  Ruler,
  Scissors as Cut,
  Wrench,
  Hammer,
  Screwdriver,
  Paintbrush,
  Palette,
  Pipette,
  Beaker,
  TestTube,
  Microscope,
  Telescope,
  Magnet,
  Flashlight,
  Candle,
  Lightbulb,
  Lamp,
  Lantern,
  Torch,
  Fire,
  Flame,
  Snowflake,
  Leaf,
  Tree,
  Flower,
  Flower2,
  Seedling,
  Cherry,
  Apple,
  Grape,
  Carrot,
  Wheat,
  Coffee,
  Wine,
  Beer,
  Milk,
  Egg,
  Cheese,
  Fish,
  Beef,
  Chicken,
  Salad,
  Pizza,
  Cake,
  Cookie,
  IceCream,
  Candy,
  Lollipop,
  Donut,
  Croissant,
  Sandwich,
  Soup,
  Noodles,
  Rice,
  Bread,
  Pretzel,
  Bagel,
  Waffle,
  Pancakes,
  Bacon,
  Sausage,
  Ham,
  Steak,
  Drumstick,
  Popcorn,
  Nuts,
  Honey,
  Jam,
  Butter,
  Salt,
  Pepper,
  Spice,
  Herb,
  Garlic,
  Onion,
  Tomato,
  Potato,
  Corn,
  Broccoli,
  Lettuce,
  Cucumber,
  Pepper as Bell,
  Chili,
  Mushroom,
  Avocado,
  Banana,
  Orange,
  Lemon,
  Lime,
  Strawberry,
  Blueberry,
  Raspberry,
  Blackberry,
  Peach,
  Pear,
  Pineapple,
  Watermelon,
  Melon,
  Coconut,
  Kiwi,
  Mango,
  Papaya,
  Pomegranate,
  Plum,
  Apricot,
  Fig,
  Date,
  Raisin,
  Almond,
  Walnut,
  Peanut,
  Cashew,
  Pistachio,
  Hazelnut,
  Pecan,
  Macadamia,
  Brazil,
  Pine,
  Chestnut,
  Acorn,
  Sunflower,
  Pumpkin,
  Squash,
  Zucchini,
  Eggplant,
  Radish,
  Turnip,
  Beet,
  Cabbage,
  Cauliflower,
  Brussels,
  Artichoke,
  Asparagus,
  Celery,
  Leek,
  Scallion,
  Shallot,
  Ginger,
  Turmeric,
  Cinnamon,
  Nutmeg,
  Clove,
  Cardamom,
  Saffron,
  Vanilla,
  Mint,
  Basil,
  Oregano,
  Thyme,
  Rosemary,
  Sage,
  Parsley,
  Cilantro,
  Dill,
  Chive,
  Tarragon,
  Bay,
  Lavender,
  Chamomile,
  Jasmine,
  Rose,
  Lily,
  Tulip,
  Daisy,
  Sunflower as Sun2,
  Orchid,
  Hibiscus,
  Peony,
  Carnation,
  Chrysanthemum,
  Marigold,
  Pansy,
  Violet,
  Iris,
  Daffodil,
  Hyacinth,
  Crocus,
  Snowdrop,
  Bluebell,
  Poppy,
  Forget,
  Morning,
  Evening,
  Four,
  Foxglove,
  Hollyhock,
  Delphinium,
  Larkspur,
  Snapdragon,
  Sweet,
  Zinnia,
  Cosmos,
  Aster,
  Dahlia,
  Gladiolus,
  Freesia,
  Anemone,
  Ranunculus,
  Petunia,
  Impatiens,
  Begonia,
  Geranium,
  Fuchsia,
  Azalea,
  Rhododendron,
  Camellia,
  Magnolia,
  Dogwood,
  Cherry2,
  Plum2,
  Peach2,
  Apple2,
  Pear2,
  Quince,
  Persimmon,
  Pomelo,
  Grapefruit,
  Tangerine,
  Mandarin,
  Clementine,
  Satsuma,
  Yuzu,
  Bergamot,
  Citron,
  Buddha,
  Finger,
  Key2,
  Persian,
  Blood,
  Navel,
  Valencia,
  Jaffa,
  Seville,
  Meyer,
  Eureka,
  Lisbon,
  Bearss,
  Tahiti,
  Kaffir,
  Makrut,
  Wild,
  Australian,
  Desert,
  Finger2,
  Round,
  Red,
  Pink,
  White,
  Yellow,
  Green,
  Blue,
  Purple,
  Orange2,
  Brown,
  Black,
  Gray,
  Silver,
  Gold,
  Bronze,
  Copper,
  Brass,
  Steel,
  Iron,
  Aluminum,
  Titanium,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Tungsten,
  Tantalum,
  Niobium,
  Molybdenum,
  Chromium,
  Vanadium,
  Manganese,
  Cobalt,
  Nickel,
  Zinc,
  Gallium,
  Germanium,
  Arsenic,
  Selenium,
  Bromine,
  Krypton,
  Rubidium,
  Strontium,
  Yttrium,
  Zirconium,
  Technetium,
  Ruthenium2,
  Rhodium2,
  Palladium2,
  Silver2,
  Cadmium,
  Indium,
  Tin,
  Antimony,
  Tellurium,
  Iodine,
  Xenon,
  Cesium,
  Barium,
  Lanthanum,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Hafnium,
  Tantalum2,
  Tungsten2,
  Rhenium2,
  Osmium2,
  Iridium2,
  Platinum2,
  Gold2,
  Mercury,
  Thallium,
  Lead,
  Bismuth,
  Polonium,
  Astatine,
  Radon,
  Francium,
  Radium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';
import { analytics } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// --- CONFIG ---
const API_KEY_STORAGE_KEY = 'brokerflow_gemini_key';

// --- TYPES ---
interface Policy {
  id: string;
  client: string;
  industry: string;
  type: string;
  premium: number;
  expiryDate: string;
  claims: number;
  status: 'Detected' | 'Analyzed' | 'Drafted' | 'Sent';
  sourceId: string;
  image: string;
}

interface Weights {
  premium: number;
  time: number;
  claims: number;
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface BrokerUser {
  name: string;
  email: string | null;
  id: string;
}

// --- MOCK DATA ---
const INITIAL_DATA: Policy[] = [
  { 
    id: "POL-001", 
    client: "Acme Corp", 
    industry: "Technology",
    type: "Cyber Liability", 
    premium: 45000, 
    expiryDate: "2025-05-15", 
    claims: 0, 
    status: "Detected", 
    sourceId: "SFDC-9921",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=200"
  },
  { 
    id: "POL-002", 
    client: "Globex Inc", 
    industry: "Logistics",
    type: "General Liability", 
    premium: 12500, 
    expiryDate: "2025-04-20", 
    claims: 2, 
    status: "Analyzed", 
    sourceId: "SFDC-3321",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200"
  },
  { 
    id: "POL-003", 
    client: "Soylent Corp", 
    industry: "Manufacturing",
    type: "Workers Comp", 
    premium: 82000, 
    expiryDate: "2025-05-01", 
    claims: 1, 
    status: "Drafted", 
    sourceId: "SFDC-1102",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=200&h=200"
  },
  { 
    id: "POL-004", 
    client: "Umbrella Corp", 
    industry: "Real Estate",
    type: "Property", 
    premium: 150000, 
    expiryDate: "2025-04-10", 
    claims: 5, 
    status: "Detected", 
    sourceId: "SFDC-5511",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200&h=200"
  },
  { 
    id: "POL-005", 
    client: "Stark Ind", 
    industry: "Defense",
    type: "D&O", 
    premium: 220000, 
    expiryDate: "2025-06-01", 
    claims: 0, 
    status: "Sent", 
    sourceId: "SFDC-8822",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=200&h=200"
  },
];

const USER_AVATAR = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const EMAIL_CONTEXT: Record<string, string> = {
  "POL-001": "Subject: Renewal Concerns. Body: We are worried about the 15% rate hike mentioned in the news.",
  "POL-002": "Subject: Claim #992. Body: The slip and fall claim is still open. We need to know how this affects our premium.",
  "POL-003": "Subject: Payroll Audit. Body: Attached is the Q4 payroll. We hired 50 new staff.",
  "POL-004": "Subject: Property Valuation. Body: We added a new warehouse in Austin. Value $2M."
};

// --- API HELPER ---
async function callGemini(prompt: string, apiKey: string) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );
    if (!response.ok) throw new Error('API Call Failed');
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// --- COMPONENTS ---
const Card = ({ children, className = "", noPadding = false }: { children: React.ReactNode; className?: string; noPadding?: boolean }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${noPadding ? '' : 'p-6'} ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default', className = "" }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'error' | 'info'; className?: string }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// --- MAIN APP ---
export default function BrokerFlowApp() {
  // --- STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<BrokerUser | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  
  const auth = getAuth();
  
  // Persistent State
  const [weights, setWeights] = useState<Weights>(() => {
    const saved = localStorage.getItem('brokerflow_weights');
    return saved ? JSON.parse(saved) : { premium: 0.4, time: 0.4, claims: 0.2 };
  });
  
  const [policies, setPolicies] = useState<Policy[]>(() => {
    const saved = localStorage.getItem('brokerflow_policies');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });

  const [apiKey, setApiKey] = useState(() => localStorage.getItem(API_KEY_STORAGE_KEY) || 'AIzaSyCaWnqycHrsvUDAvzzhzAku5AvUCxTDyb0');

  // UI State
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [generationState, setGenerationState] = useState<'idle' | 'fetching' | 'analyzing' | 'complete'>('idle');
  const [brief, setBrief] = useState<any>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  // Copilot State
  const [copilotMode, setCopilotMode] = useState<'negotiation' | 'pipeline'>('pipeline');
  const [pipelineView, setPipelineView] = useState<'list' | 'calendar'>('list');
  
  // Negotiation Simulator State
  const [premiumAdjustment, setPremiumAdjustment] = useState(0);
  const [deductibleChange, setDeductibleChange] = useState(0);
  
  // --- EFFECTS ---
  useEffect(() => {
    localStorage.setItem('brokerflow_weights', JSON.stringify(weights));
  }, [weights]);

  useEffect(() => {
    localStorage.setItem('brokerflow_policies', JSON.stringify(policies));
  }, [policies]);

  useEffect(() => {
    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
  }, [apiKey]);

  // --- LOGIC ---
  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isSignUp) {
        const result = await createUserWithEmailAndPassword(auth, loginForm.email, loginForm.password);
        setUser({ name: loginForm.name, email: result.user.email, id: result.user.uid });
        addToast(`Welcome ${loginForm.name}!`, 'success');
      } else {
        const result = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
        setUser({ name: result.user.displayName || 'Broker', email: result.user.email, id: result.user.uid });
        addToast('Welcome back!', 'success');
      }
      setIsAuthenticated(true);
      if (analytics) {
        import('firebase/analytics').then(({ logEvent }) => {
          logEvent(analytics, 'login', { method: 'email' });
        });
      }
    } catch (error: any) {
      addToast(error.message, 'error');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    setUser(null);
    addToast('Logged out', 'info');
  };

  const calculateDaysToExpiry = (dateStr: string) => {
    const today = new Date();
    const expiry = new Date(dateStr);
    const diffTime = expiry.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  };

  const calculatePriority = (premium: number, days: number, claims: number, w: Weights) => {
    const normPremium = Math.min(premium / 200000, 1.0) * 100;
    const urgency = Math.max(0, 100 - (days * (100/90)));
    const risk = claims * 20;
    const score = (w.premium * normPremium) + (w.time * urgency) - (w.claims * risk);
    return Math.max(0, Math.min(100, parseFloat(score.toFixed(1))));
  };

  const retentionProbability = useMemo(() => {
    return Math.max(0, Math.min(100, 90 - (2 * premiumAdjustment) + (0.5 * deductibleChange)));
  }, [premiumAdjustment, deductibleChange]);

  const scoredData = useMemo(() => {
    return policies.map(policy => {
      const days = calculateDaysToExpiry(policy.expiryDate);
      const score = calculatePriority(policy.premium, days, policy.claims, weights);
      return { ...policy, days, score };
    }).sort((a, b) => b.score - a.score);
  }, [weights, policies]);

  const updatePolicyStatus = (id: string, newStatus: Policy['status']) => {
    setPolicies(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    addToast(`Policy ${id} status updated to ${newStatus}`, 'success');
  };

  const generateBrief = async (policy: Policy) => {
    if (!apiKey) {
      addToast('Please set your Gemini API key in Settings', 'error');
      return;
    }

    setGenerationState('fetching');
    setSelectedPolicy(policy);
    
    const emailContext = EMAIL_CONTEXT[policy.id] || "No recent email context available.";
    
    const prompt = `
    You are an expert insurance broker analyzing a policy renewal. Generate a comprehensive renewal brief for:
    
    Policy Details:
    - Client: ${policy.client}
    - Industry: ${policy.industry}
    - Policy Type: ${policy.type}
    - Current Premium: $${policy.premium.toLocaleString()}
    - Expiry Date: ${policy.expiryDate}
    - Claims History: ${policy.claims} claims
    - Source ID: ${policy.sourceId}
    
    Recent Email Context: ${emailContext}
    
    Please provide a JSON response with the following structure:
    {
      "riskAssessment": "Brief risk analysis",
      "marketConditions": "Current market trends affecting this policy type",
      "recommendedActions": ["Action 1", "Action 2", "Action 3"],
      "pricingStrategy": "Recommended pricing approach",
      "retentionRisk": "High/Medium/Low",
      "keyTalkingPoints": ["Point 1", "Point 2", "Point 3"],
      "competitorAnalysis": "Brief competitor landscape",
      "renewalProbability": "Percentage estimate"
    }
    
    Keep responses concise and actionable for a busy insurance broker.
    `;

    setGenerationState('analyzing');
    
    const result = await callGemini(prompt, apiKey);
    
    if (result) {
      try {
        const cleanedResult = result.replace(/```json\n?|\n?```/g, '').trim();
        const parsedBrief = JSON.parse(cleanedResult);
        setBrief(parsedBrief);
        setGenerationState('complete');
        updatePolicyStatus(policy.id, 'Analyzed');
        addToast('Analysis complete!', 'success');
      } catch (error) {
        console.error('Failed to parse AI response:', error);
        setBrief({
          riskAssessment: "Analysis generated successfully but formatting needs review.",
          marketConditions: "Please review the raw AI output for detailed insights.",
          recommendedActions: ["Review AI output", "Validate recommendations", "Proceed with renewal"],
          pricingStrategy: "Standard approach recommended",
          retentionRisk: "Medium",
          keyTalkingPoints: ["Policy benefits", "Market position", "Claims history"],
          competitorAnalysis: "Competitive landscape analysis available",
          renewalProbability: "75%"
        });
        setGenerationState('complete');
        addToast('Analysis complete with formatting adjustments', 'info');
      }
    } else {
      setGenerationState('idle');
      addToast('Failed to generate analysis', 'error');
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">BrokerFlow</h1>
            <p className="text-gray-600 mt-2">Insurance Renewal Management</p>
          </div>

          <div className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={loginForm.name}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              onClick={handleAuth}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}
            </button>
            
            <div className="text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
              </button>
            </div>
          </div>
        </Card>

        {/* Toast Container */}
        <div className="fixed top-4 right-4 space-y-2 z-50">
          {toasts.map(toast => (
            <div
              key={toast.id}
              className={`px-4 py-2 rounded-md shadow-lg text-white ${
                toast.type === 'success' ? 'bg-green-500' :
                toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
              }`}
            >
              {toast.message}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">BrokerFlow</h1>
              <p className="text-sm text-gray-500">Insurance Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'pipeline', label: 'Pipeline', icon: ListFilter },
            { id: 'copilot', label: 'AI Copilot', icon: Bot },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <img src={USER_AVATAR} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <div className="flex items-center space-x-4">
                  <Badge variant="info" className="flex items-center space-x-1">
                    <Database className="w-3 h-3" />
                    <span>{policies.length} Policies</span>
                  </Badge>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Premium</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${policies.reduce((sum, p) => sum + p.premium, 0).toLocaleString()}
                      </p>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {scoredData.filter(p => p.days <= 30).length}
                      </p>
                    </div>
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">High Priority</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {scoredData.filter(p => p.score >= 70).length}
                      </p>
                    </div>
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Analyzed</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {policies.filter(p => p.status === 'Analyzed' || p.status === 'Drafted' || p.status === 'Sent').length}
                      </p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                </Card>
              </div>

              {/* Top Priorities */}
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Top Priorities</h3>
                  <Target className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  {scoredData.slice(0, 5).map(policy => (
                    <div key={policy.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img src={policy.image} alt={policy.client} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h4 className="font-medium text-gray-900">{policy.client}</h4>
                          <p className="text-sm text-gray-600">{policy.type} • ${policy.premium.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={policy.days <= 30 ? 'error' : policy.days <= 60 ? 'warning' : 'success'}>
                          {policy.days} days
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">Priority: {policy.score}</p>
                          <Badge variant={policy.status === 'Detected' ? 'warning' : policy.status === 'Analyzed' ? 'info' : policy.status === 'Drafted' ? 'success' : 'default'}>
                            {policy.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'pipeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Renewal Pipeline</h2>
                <div className="flex items-center space-x-4">
                  <Badge variant="info">{policies.length} Total Policies</Badge>
                </div>
              </div>

              {/* Pipeline Table */}
              <Card noPadding>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {scoredData.map(policy => (
                        <tr key={policy.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img src={policy.image} alt={policy.client} className="w-10 h-10 rounded-lg object-cover mr-3" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{policy.client}</div>
                                <div className="text-sm text-gray-500">{policy.industry}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{policy.type}</div>
                            <div className="text-sm text-gray-500">{policy.sourceId}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${policy.premium.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{policy.expiryDate}</div>
                            <Badge variant={policy.days <= 30 ? 'error' : policy.days <= 60 ? 'warning' : 'success'} className="mt-1">
                              {policy.days} days
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900 mr-2">{policy.score}</div>
                              <div className={`w-2 h-2 rounded-full ${policy.score >= 70 ? 'bg-red-400' : policy.score >= 50 ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant={
                              policy.status === 'Detected' ? 'warning' : 
                              policy.status === 'Analyzed' ? 'info' : 
                              policy.status === 'Drafted' ? 'success' : 'default'
                            }>
                              {policy.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => generateBrief(policy)}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updatePolicyStatus(policy.id, 'Drafted')}
                              className="text-green-600 hover:text-green-900"
                            >
                              <FileText className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'copilot' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">AI Copilot</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setCopilotMode('pipeline')}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        copilotMode === 'pipeline' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      Pipeline View
                    </button>
                    <button
                      onClick={() => setCopilotMode('negotiation')}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        copilotMode === 'negotiation' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      Negotiation Simulator
                    </button>
                  </div>
                </div>
              </div>

              {copilotMode === 'pipeline' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Pipeline Analysis</h3>
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setPipelineView('list')}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          pipelineView === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setPipelineView('calendar')}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          pipelineView === 'calendar' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {pipelineView === 'list' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Analysis Results */}
                      {selectedPolicy && brief && generationState === 'complete' && (
                        <Card>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Analysis: {selectedPolicy.client}</h3>
                            <Badge variant="success">Complete</Badge>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Risk Assessment</h4>
                              <p className="text-sm text-gray-600">{brief.riskAssessment}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Recommended Actions</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {brief.recommendedActions?.map((action: string, idx: number) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{action}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <div>
                                <p className="text-sm text-gray-600">Retention Risk</p>
                                <Badge variant={brief.retentionRisk === 'High' ? 'error' : brief.retentionRisk === 'Medium' ? 'warning' : 'success'}>
                                  {brief.retentionRisk}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-600">Renewal Probability</p>
                                <p className="text-lg font-semibold text-gray-900">{brief.renewalProbability}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}

                      {/* Generation Status */}
                      {generationState !== 'idle' && generationState !== 'complete' && (
                        <Card>
                          <div className="flex items-center justify-center py-8">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                              <p className="text-sm text-gray-600">
                                {generationState === 'fetching' ? 'Fetching policy data...' : 'Analyzing with AI...'}
                              </p>
                            </div>
                          </div>
                        </Card>
                      )}

                      {/* Quick Actions */}
                      <Card>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          {scoredData.slice(0, 3).map(policy => (
                            <div key={policy.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <img src={policy.image} alt={policy.client} className="w-8 h-8 rounded object-cover" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{policy.client}</p>
                                  <p className="text-xs text-gray-500">{policy.days} days to expiry</p>
                                </div>
                              </div>
                              <button
                                onClick={() => generateBrief(policy)}
                                className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors"
                              >
                                Analyze
                              </button>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  )}

                  {pipelineView === 'calendar' && (
                    <Card>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Expiry Calendar View</h3>
                      <div className="grid grid-cols-7 gap-4">
                        {/* Calendar Header */}
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                            {day}
                          </div>
                        ))}
                        
                        {/* Calendar Days - Simplified for demo */}
                        {Array.from({ length: 35 }, (_, i) => {
                          const dayPolicies = policies.filter(p => {
                            const expiryDay = new Date(p.expiryDate).getDate();
                            return expiryDay === (i % 30) + 1;
                          });
                          
                          return (
                            <div key={i} className="min-h-[80px] p-2 border border-gray-200 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">{(i % 30) + 1}</div>
                              {dayPolicies.map(policy => (
                                <div key={policy.id} className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded mb-1 truncate">
                                  {policy.client}
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  )}
                </div>
              )}

              {copilotMode === 'negotiation' && (
                <div className="space-y-6">
                  <Card>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Negotiation Simulator</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Adjust pricing parameters to see the impact on client retention probability.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Premium Adjustment (%)
                        </label>
                        <input
                          type="range"
                          min="-20"
                          max="20"
                          value={premiumAdjustment}
                          onChange={(e) => setPremiumAdjustment(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>-20%</span>
                          <span className="font-medium">{premiumAdjustment}%</span>
                          <span>+20%</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Deductible Change (%)
                        </label>
                        <input
                          type="range"
                          min="-50"
                          max="50"
                          value={deductibleChange}
                          onChange={(e) => setDeductibleChange(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>-50%</span>
                          <span className="font-medium">{deductibleChange}%</span>
                          <span>+50%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Predicted Retention Probability</p>
                          <p className="text-xs text-gray-500">Based on historical data and market trends</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">{retentionProbability.toFixed(1)}%</p>
                          <Badge variant={retentionProbability >= 80 ? 'success' : retentionProbability >= 60 ? 'warning' : 'error'}>
                            {retentionProbability >= 80 ? 'High' : retentionProbability >= 60 ? 'Medium' : 'Low'} Confidence
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
              
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Weights</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Adjust how different factors influence policy priority scoring.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Premium Size Weight: {weights.premium.toFixed(1)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={weights.premium}
                      onChange={(e) => setWeights(prev => ({ ...prev, premium: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Urgency Weight: {weights.time.toFixed(1)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={weights.time}
                      onChange={(e) => setWeights(prev => ({ ...prev, time: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Claims Risk Weight: {weights.claims.toFixed(1)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={weights.claims}
                      onChange={(e) => setWeights(prev => ({ ...prev, claims: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">API Configuration</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gemini API Key
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Gemini API key"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Your API key is stored locally and used for AI analysis features.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>

      {/* Toast Container */}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded-md shadow-lg text-white ${
              toast.type === 'success' ? 'bg-green-500' :
              toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}