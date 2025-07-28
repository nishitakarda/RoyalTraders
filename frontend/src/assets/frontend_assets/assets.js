import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

import hero_img from './hero_img.png';
import almonds from './almonds.png';     
import NutsAndDryFruits from './NutsAndDryFruits.png';
import dates from './dates.png';
import royalsExclusives from './royalsExclusives.png';
import berries from './berries.png';
import seeds from './seeds.png';
import not_found from './not_found.png';
import about_img from './about_img.png';

import a1 from './a_img1.png'
import a2 from './a_img2.png'
import a12 from './a_img1_2.png'
import k1 from './k_img1.png'
import k2 from './k_img2.png'
import p1 from './p_img1.png'
import p2 from './p_img3.png'
import p3 from './p_img2.png'
import d1 from './d_img1.png'
import dates1 from './dates1.png'
import dates2 from './dates2.png'
import dates3 from './dates3.png'
import dates4 from './dates4.png'
import dates5 from './dates5.png'
import r1 from './r_img1.png'
import r2 from './r_img2.png'
import r3 from './r_img3.png'
import r4 from './r_img4.png'
import r5 from './r_img5.png'
import b1 from './b_img1.png'
import b2 from './b_img2.png'
import b3 from './b_img3.png'
import b4 from './b_img4.png'
import s1 from './s_img1.png'
import s2 from './s_img2.png'
import s3 from './s_img3.png'
import s4 from './s_img4.png'
import ras1 from './raisins.png'
import ras2 from './raisins2.png'
import w1 from './w_img1.png'
import w2 from './w_img2.png'
import dryfruits from './DryFruits.png'
import datesHero from './datesHero.png'
import royalsHero from './royals_hero.png'
import berriesHero from './berries_hero.png'
import seedsHero from './seeds_hero.png'
import ProductHero from './ProductHero.png'

export const assets = {
    logo,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,

    hero_img,
    almonds,
    NutsAndDryFruits,
    dates,
    royalsExclusives,
    berries,
    seeds,
    not_found,
    about_img,

    a1,
    a12,
    a2,
    k1,
    k2,
    p1,
    p2,
    p3,
    d1,
    dates1,
    dates2,
    dates3,
    dates4,
    dates5,
    r1,
    r2,
    r3,
    r4,
    r5,
    b1,
    b2,
    b3,
    b4,
    s1,
    s2,
    s3,
    s4,
    ras1,
    ras2,
    w1,
    w2,
    dryfruits,
    datesHero,
    royalsHero,
    berriesHero,
    seedsHero,
    ProductHero

}

export const products = [
  {
    _id: 'dry001',
    name: 'Premium Jumbo Almond',
    description: 'Large-size premium almonds, crunchy, natural flavor.',
    price: 125,
    image: [a1, a12,a1,a12,a1],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Almonds',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: true
  },
  {
    _id: 'dry002',
    name: 'Mamra Almond (Organic Almond)',
    description: 'Organic Mamra almonds with highest nutritional value.',
    price: 340,
    image: [a2,a12,a2,a12,a2],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Almonds',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: true
  },
  {
    _id: 'dry003',
    name: 'Cashew Nuts (Kaju) Jumbo Sized',
    description: 'Jumbo-sized cashews, rich and buttery taste.',
    price: 164,
    image: [k1, k2, k1, k2, k1],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Cashews',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: true
  },
  {
    _id: 'dry004',
    name: 'Cashew Nuts (Kaju) Medium Sized',
    description: 'Medium-sized cashews, crisp and smooth texture.',
    price: 138,
    image: [k1, k2, k1, k2, k1],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Cashews',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
  {
    _id: 'dry005',
    name: 'Top‑Quality Pista Akbari',
    description: 'Premium pista, rich taste and subtle aroma.',
    price: 178,
    image: [p1, p3, p1, p3, p1],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Pistachios',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: true
  },
  {
    _id: 'dry006',
    name: 'Premium Pista Plain (Kernel)',
    description: 'Kernel-only premium pistachio, no shell.',
    price: 260,
    image: [p2, p3, p2, p3, p2],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Pistachios',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
  {
    _id: 'dry007',
    name: 'Premium Walnut Kernels',
    description: 'High-quality walnut kernels, great source of omega‑3.',
    price: 210,
    image: [w1, w2, w1, w2, w1],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Walnuts',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
  {
    _id: 'dry008',
    name: 'Premium Black Raisins',
    description: 'Naturally sweet black raisins, rich in iron.',
    price: 75,
    image: [ras1, r5,ras1, r5, ras1],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Raisins',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
  {
    _id: 'dry009',
    name: 'Raisins Round',
    description: 'Healthy lotus seeds snack—light & nutritious.',
    price: 180,
    image: [ras2, ras2, ras2],
    category: 'Nuts & Dry Fruits',
    subCategory: 'Raisins',
    sizes: ['100g','250g','500g','1kg'],
    bestseller: true
  },
    {
    _id: 'dry010',
    name: 'Premium Ajwa Dates',
    description: 'Handpicked Premium Ajwa Dates, rich in flavor and loaded with health benefits.',
    price: 749,
    image: [dates1],
    category: 'Dates',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: true
  },
  {
    _id: 'dry011',
    name: 'Finest Mabroom Dates',
    description: 'Delicately sweet and chewy Mabroom dates, perfect for mindful snacking.',
    price: 599,
    image: [dates2],
    category: 'Dates',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
  {
    _id: 'dry012',
    name: 'Safawi Sweet Delight Dates',
    description: 'Soft, moist Safawi dates with a delightful caramel-like flavor.',
    price: 499,
    image: [dates3],
    category: 'Dates',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
  {
    _id: 'dry013',
    name: 'Premium Medjool Dates',
    description: 'Large, juicy Medjool dates offering a rich and luxurious taste.',
    price: 899,
    image: [dates4],
    category: 'Dates',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: true
  },
  {
    _id: 'dry014',
    name: 'Arabian Seedless Dates',
    description: 'Naturally sweet and seedless dates sourced from the finest Arabian farms.',
    price: 399,
    image: [dates5],
    category: 'Dates',
    sizes: ['100g','250g','500g','1kg','2kg','5kg'],
    bestseller: false
  },
    {
    _id: 'dry015',
    name: 'Pancharattan Mix',
    description: 'A royal mix of five dry fruits — rich, tasty, and wholesome.',
    price: 699,
    image: [r1],
    category: 'Exclusives',
    bestseller: true,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry016',
    name: 'Wholesome Muesli',
    description: 'A healthy, crunchy mix of grains and fruits for a power breakfast.',
    price: 299,
    image: [r2],
    category: 'Exclusives',
    bestseller: false,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry017',
    name: 'Nutritious Breakfast Mix',
    description: 'A balanced mix loaded with fiber, protein, and antioxidants.',
    price: 349,
    image: [r3],
    category: 'Exclusives',
    bestseller: true,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry018',
    name: 'Protein Beans',
    description: 'Protein-packed beans to keep you energized all day long.',
    price: 449,
    image: [r4],
    category: 'Exclusives',
    bestseller: false,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry019',
    name: 'Strawberries – Berry Bliss',
    description: 'Sweet and tangy strawberries dried to perfection.',
    price: 399,
    image: [b1],
    category: 'Berries',
    bestseller: true,
    sizes: ['100g','250g','500g']
  },
  {
    _id: 'dry020',
    name: 'Premium Cranberries',
    description: 'Juicy cranberries — a tart snack rich in antioxidants.',
    price: 349,
    image: [b2],
    category: 'Berries',
    bestseller: false,
    sizes: ['100g','250g','500g']
  },
  {
    _id: 'dry021',
    name: 'Blueberries – Health Boost',
    description: 'High in antioxidants and flavor — a true health booster.',
    price: 479,
    image: [b3],
    category: 'Berries',
    bestseller: true,
    sizes: ['100g','250g','500g']
  },
  {
    _id: 'dry022',
    name: 'Blackberry Plum',
    description: 'A delightful blend of dried blackberries and plums.',
    price: 425,
    image: [b4],
    category: 'Berries',
    bestseller: false,
    sizes: ['100g','250g','500g']
  },
  {
    _id: 'dry023',
    name: 'Flax Seeds (Plain)',
    description: 'Rich in omega-3 and fiber — perfect for everyday nutrition.',
    price: 199,
    image: [s1],
    category: 'Seeds',
    bestseller: true,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry024',
    name: 'Sunflower Seeds',
    description: 'Crisp and nutritious seeds great for heart health.',
    price: 179,
    image: [s2],
    category: 'Seeds',
    bestseller: false,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry025',
    name: 'Pumpkin Seeds',
    description: 'A protein-rich snack packed with essential minerals.',
    price: 249,
    image: [s3],
    category: 'Seeds',
    bestseller: true,
    sizes: ['250g','500g','1kg']
  },
  {
    _id: 'dry026',
    name: 'Watermelon Seeds',
    description: 'Light and crunchy — a delicious and healthy snack option.',
    price: 199,
    image: [s4],
    category: 'Seeds',
    bestseller: false,
    sizes: ['250g','500g','1kg']
  }


];
