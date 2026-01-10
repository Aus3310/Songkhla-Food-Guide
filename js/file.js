/*!
 * Songkhla Guide Food - file.js (single bundle)
 * Fixes:
 * - Image fallback: if images paths are missing/invalid, show SVG placeholder
 * - Map fallback: if embed missing, generate embed from address/name automatically
 * - Images/embed can be provided in either language (th/en); it will fallback
 */

(() => {
  "use strict";

  const RESTAURANTS = [
  {
    "id": "suan-cheunsuk",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารใต้ (อาหารพื้นบ้านภาคใต้)",
      "name": "สวนชื่นสุข",
      "description": "ร้านอาหารไทย-ใต้ขวัญใจชาวหาดใหญ่ เมนูพื้นบ้านปักษ์ใต้ รสจัด ใช้วัตถุดิบท้องถิ่น",
      "address": "208 หมู่ 1 ซอย 27 ถนนเพชรเกษม ต.ควนลัง อ.หาดใหญ่ สงขลา 90110",
      "phone": "092-034-8555",
      "hours": "ทุกวัน 10:30–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "อาหารใต้",
        "ครอบครัว",
        "ยอดนิยม"
      ]
    },
    "en": {
      "catagorie": "Southern Thai Restaurants (Local Southern Cuisine)",
      "name": "Suan Cheunsuk",
      "description": "Beloved Thai–Southern restaurant in Hat Yai. Traditional Southern home dishes using local ingredients.",
      "address": "208 Moo 1, Soi 27, Phetkasem Road, Khuan Lang, Hat Yai, Songkhla 90110",
      "phone": "092-034-8555",
      "hours": "Daily 10:30–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Southern Thai",
        "Family-friendly",
        "Popular"
      ]
    }
  },
  {
    "id": "pa-yang-restaurant",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารใต้ (อาหารพื้นบ้านภาคใต้)",
      "name": "ร้านอาหารป่ายาง",
      "description": "ร้านอาหารปักษ์ใต้เก่าแก่ เมนูดั้งเดิม เช่น ฉู่ฉี่กุ้ง และต้มส้มปลากระบอก",
      "address": "597/599 ถนนธรรมนูญวิถี ต.หาดใหญ่ อ.หาดใหญ่ สงขลา",
      "phone": "081-099-7888",
      "hours": "ทุกวัน 11:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ดั้งเดิม",
        "รสจัด",
        "อาหารท้องถิ่น"
      ]
    },
    "en": {
      "catagorie": "Southern Thai Restaurants (Local Southern Cuisine)",
      "name": "Pa Yang Restaurant",
      "description": "One of the earliest Southern-style restaurants in Hat Yai, known for authentic recipes like Chu Chi prawns and sour fish soup.",
      "address": "597/599 Thamnuan Withi Road, Hat Yai, Songkhla",
      "phone": "081-099-7888",
      "hours": "Daily 11:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Authentic",
        "Spicy",
        "Local ingredients"
      ]
    }
  },
  {
    "id": "je-lek-line-2",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารใต้ (อาหารพื้นบ้านภาคใต้)",
      "name": "ร้านเจ๊เล็ก (สาย 2)",
      "description": "ร้านไทย-ใต้ระดับตำนานในหาดใหญ่ มากว่า 55 ปี เมนูพื้นบ้านรสเข้มจัดจ้าน",
      "address": "190/3-4 ถนนนิพัทธ์อุทิศ 2 ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110",
      "phone": "082-656-9478",
      "hours": "ทุกวัน 10:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ตำนาน",
        "รสจัด",
        "หาดใหญ่"
      ]
    },
    "en": {
      "catagorie": "Southern Thai Restaurants (Local Southern Cuisine)",
      "name": "Je Lek (Line 2)",
      "description": "Legendary Thai–Southern restaurant in Hat Yai for over 55 years. Large air-conditioned dining and strong southern flavors.",
      "address": "190/3-4 Niphat Uthit 2 Road, Hat Yai, Songkhla 90110",
      "phone": "082-656-9478",
      "hours": "Daily 10:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Legendary",
        "Spicy",
        "Hat Yai"
      ]
    }
  },
  {
    "id": "sawa",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารใต้ (อาหารพื้นบ้านภาคใต้)",
      "name": "สะหวา (Sawa)",
      "description": "ร้านอาหารพื้นบ้านปักษ์ใต้ที่โรงแรม The Signature Airport หาดใหญ่ ใช้วัตถุดิบทะเลสดและวัตถุดิบท้องถิ่น",
      "address": "โรงแรม The Signature Airport หมู่ 6 ถนนลพบุรีราเมศวร์ ต.ควนลัง อ.หาดใหญ่ สงขลา 90110",
      "phone": "074-255-564",
      "hours": "ทุกวัน 11:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ฟิวชั่น",
        "ซีฟู้ด",
        "โรงแรม"
      ]
    },
    "en": {
      "catagorie": "Southern Thai Restaurants (Local Southern Cuisine)",
      "name": "Sawa",
      "description": "Southern home-style restaurant at The Signature Airport Hotel, using fresh seafood and local produce to create authentic flavors.",
      "address": "The Signature Airport Hotel, Moo 6, Lopburiraemeth Road, Khuan Lang, Hat Yai, Songkhla 90110",
      "phone": "074-255-564",
      "hours": "Daily 11:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Southern Thai",
        "Seafood",
        "Hotel restaurant"
      ]
    }
  },
  {
    "id": "kan-eng",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "กันเอง",
      "description": "ร้านไทย-จีนเก่าแก่กว่า 50 ปี อาหารสไตล์ไทย-จีนและเมนูพื้นบ้าน ราคามิตรภาพ เหมาะพาครอบครัว",
      "address": "50/3 ถนนกิมประดิษฐ์ ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110",
      "phone": "074-246-138",
      "hours": "ทุกวัน 10:30–14:00 และ 17:00–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ไทย-จีน",
        "ครอบครัว",
        "ดั้งเดิม"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Kan Eng",
      "description": "Long-established Thai–Chinese restaurant in Hat Yai (50+ years), family-friendly with traditional Thai–Chinese dishes.",
      "address": "50/3 Kim Pradit Road, Hat Yai, Songkhla 90110",
      "phone": "074-246-138",
      "hours": "Daily 10:30–14:00 and 17:00–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Thai-Chinese",
        "Family-friendly",
        "Heritage"
      ]
    }
  },
  {
    "id": "bang-lamphu",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "บางลำภู",
      "description": "ร้านซีฟู้ดเจ้าดังบรรยากาศริมทะเลสาบ เหมาะชมพระอาทิตย์ตก มีดนตรีสดและคาราโอเกะ",
      "address": "120/224 หมู่ 8 ถ.ติณสูลานนท์ ต.เขารูปช้าง อ.เมืองสงขลา สงขลา 90000",
      "phone": "088-914-6636",
      "hours": "ทุกวัน 16:30–00:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "วิวทะเลสาบ",
        "โรแมนติก",
        "ซีฟู้ด"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Bang Lamphu",
      "description": "Famous seafood restaurant on Songkhla's lakefront with romantic views, live music, and private karaoke rooms.",
      "address": "120/224 Moo 8, Tinsulanonda Road, Khao Rup Chang, Mueang Songkhla, Songkhla 90000",
      "phone": "088-914-6636",
      "hours": "Daily 16:30–00:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Lakeside",
        "Romantic",
        "Live music"
      ]
    }
  },
  {
    "id": "view-le-suan-ahan-view-le",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "สวนอาหารวิว-เล",
      "description": "ร้านทะเลบรรยากาศสวนริมบึง มีซุ้มที่นั่งส่วนตัว ซีฟู้ดสดและเมนูถ่ายรูปสวย",
      "address": "61/15 หมู่ 8 หมู่บ้านแหลมขวัญ ถ.ติณสูลานนท์ ต.พะวง อ.เมืองสงขลา สงขลา 90100",
      "phone": "064-038-0690",
      "hours": "09:00–21:00 (ปิดวันพุธ)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "สวน",
        "ถ่ายรูป",
        "ซีฟู้ดสด"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "View-Le (Suan Ahan View-Le)",
      "description": "Garden-style seafood restaurant beside a pond, photogenic private seating and very fresh seafood.",
      "address": "61/15 Moo 8, Laem Khwan Village, Tinsulanonda Road, Phawong, Mueang Songkhla, Songkhla 90100",
      "phone": "064-038-0690",
      "hours": "09:00–21:00 (Closed Wednesday)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Garden",
        "Photogenic",
        "Fresh seafood"
      ]
    }
  },
  {
    "id": "monthathip-seafood",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "มณฑาทิพย์ ซีฟู้ด",
      "description": "ร้านซีฟู้ดใกล้หาดสมิหลา อาหารทะเลสดใหม่ ปรุงรสจัดจ้าน",
      "address": "ซอยราชดำเนิน (ใกล้หาดสมิหลา) ต.บ่อยาง อ.เมืองสงขลา สงขลา 90000",
      "phone": "091-444-9161",
      "hours": "ทุกวัน 10:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ใกล้หาด",
        "ซีฟู้ด",
        "สดทุกวัน"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Monthathip Seafood",
      "description": "Popular seafood spot near Samila Beach offering daily fresh seafood and seaside breeze seating.",
      "address": "Rajadamnoen Soi (near Samila Beach), Bo Yang, Mueang Songkhla, Songkhla 90000",
      "phone": "091-444-9161",
      "hours": "Daily 10:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Samila",
        "Seaside",
        "Fresh"
      ]
    }
  },
  {
    "id": "nam-kiang-din-koh-yo",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "น้ำเคียงดิน เกาะยอ",
      "description": "ร้านไทย-ซีฟู้ดบนเกาะยอ ชมวิวทะเลสาบและสะพานติณฯ เมนูเด่นปลากะพงหลากหลายรูปแบบ",
      "address": "59 หมู่ 6 ต.เกาะยอ อ.เมืองสงขลา สงขลา 90100",
      "phone": "082-179-9709",
      "hours": "ทุกวัน 10:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เกาะยอ",
        "วิวทะเลสาบ",
        "ปลากะพง"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Nam Kiang Din - Koh Yo",
      "description": "Thai-seafood restaurant on Koh Yo with lake and bridge views; known for Koh Yo sea bass and various preparations.",
      "address": "59 Moo 6, Koh Yo, Mueang Songkhla, Songkhla 90100",
      "phone": "082-179-9709",
      "hours": "Daily 10:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Koh Yo",
        "Sea bass",
        "Lake view"
      ]
    }
  },
  {
    "id": "krua-yok-yo-khuan-niang",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "ครัวยก-ยอ (ควนเนียง)",
      "description": "ร้านซีฟู้ดริมทะเลสาบ บรรยากาศศาลาไม้นั่งชิล วัตถุดิบซีฟู้ดสดหลากหลาย",
      "address": "1 หมู่ 7 บ้านท่าประดู่ ต.ห้วยลึก อ.ควนเนียง จ.สงขลา 90220",
      "phone": "082-665-4226",
      "hours": "ทุกวัน 08:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ริมทะเลสาบ",
        "ศาลาไม้",
        "สด"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Krua Yok-Yo (Khuan Niang)",
      "description": "Lakeside seafood restaurant with wooden pavilions, busy daily; reservations recommended for fresh seafood selection.",
      "address": "1 Moo 7, Ban Tha Pradu, Huai Luek, Khuan Niang, Songkhla 90220",
      "phone": "082-665-4226",
      "hours": "Daily 08:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Lakeside",
        "Wooden pavilion",
        "Reservation recommended"
      ]
    }
  },
  {
    "id": "nang-rim-lay-seafood",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "นั่งริมเล Seafood",
      "description": "ร้านซีฟู้ดริมชายหาด อ.ระโนด บรรยากาศเปิดโล่ง ใกล้น้ำ เหมาะคนชอบวิวทะเล",
      "address": "164/6 หมู่ 5 ต.ปากแตระ อ.ระโนด สงขลา 90140",
      "phone": "082-659-6444",
      "hours": "ทุกวัน 10:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ชายหาด",
        "เปิดโล่ง",
        "ซีฟู้ด"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Nang Rim Lay Seafood",
      "description": "Chill beachfront seafood restaurant in Ranot District with open-air seating and very fresh-from-the-boat seafood.",
      "address": "164/6 Moo 5, Pak Ta Ra, Ranot, Songkhla 90140",
      "phone": "082-659-6444",
      "hours": "Daily 10:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Beachfront",
        "Open-air",
        "Fresh catch"
      ]
    }
  },
  {
    "id": "bankampu-hatyai",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "บ้านก้ามปู (Bankampu Hatyai)",
      "description": "ร้านซีฟู้ดชื่อดังในหาดใหญ่ เมนูปูดอง ปูม้า และกุ้งแม่น้ำ จานแชร์ยอดนิยม",
      "address": "22/4-5 ถนนละม้ายสงเคราะห์ ต.หาดใหญ่ อ.หาดใหญ่ สงขลา",
      "phone": "087-109-8777",
      "hours": "ทุกวัน 11:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ปูดอง",
        "หาดใหญ่",
        "แชร์ได้"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Bankampu Hatyai",
      "description": "Well-known Hat Yai seafood restaurant with many crab and prawn dishes ideal for sharing.",
      "address": "22/4-5 Lamai Songkhro Road, Hat Yai, Songkhla",
      "phone": "087-109-8777",
      "hours": "Daily 11:00–22:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Crab",
        "Sharing",
        "Hat Yai"
      ]
    }
  },
  {
    "id": "na-wang-nao-camping-and-seafood",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "ณ วังหนาว Camping & Seafood",
      "description": "ร้านซีฟู้ดฮาลาล ริมหาดวังหนาว อ.จะนะ บรรยากาศติดทะเลและลมเย็น",
      "address": "ริมหาดวังหนาว (ถนนตลิ่งชัน-นาทับ) ต.นาทับ อ.จะนะ สงขลา 90130",
      "phone": "061-320-5877",
      "hours": "ทุกวัน 10:30–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ฮาลาล",
        "ริมทะเล",
        "บรรยากาศดี"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Na Wang Nao Camping & Seafood",
      "description": "Halal seafood on Wang Nao Beach (Chana) with seaside atmosphere and a range of fresh seafood dishes.",
      "address": "Wang Nao Beach (Taling Chan–Natap Road), Natap, Chana, Songkhla 90130",
      "phone": "061-320-5877",
      "hours": "Daily 10:30–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Halal",
        "Beach",
        "Fresh seafood"
      ]
    }
  },
  {
    "id": "duen-tem-duang-seafood",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารทะเล (Seafood)",
      "name": "เดือนเต็มดวง ซีฟู้ด",
      "description": "ร้านซีฟู้ดพื้นบ้านบนเกาะยอ เมนูเด่นเช่น ยำไข่แมงดา แกงส้มปลากะพง",
      "address": "เลขที่ 9 บ้านเกาะยอ ต.เกาะยอ อ.เมืองสงขลา สงขลา 90100",
      "phone": "",
      "hours": "ทุกวัน 10:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เกาะยอ",
        "พื้นบ้าน",
        "ยำ"
      ]
    },
    "en": {
      "catagorie": "Seafood",
      "name": "Duen Tem Duang Seafood",
      "description": "Local seafood restaurant on Koh Yo known for horseshoe crab egg salad, Kaeng Som, and other local specialties.",
      "address": "No.9, Koh Yo Village, Koh Yo, Mueang Songkhla, Songkhla 90100",
      "phone": "",
      "hours": "Daily 10:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Koh Yo",
        "Local specialties",
        "Casual"
      ]
    }
  },
  {
    "id": "ar-restaurant-a-r",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "Ar Restaurant (ร้านอ้า)",
      "description": "ภัตตาคารไทย-จีนเก่าแก่ในหาดใหญ่ มากกว่า 60 ปี เมนูจีน-ไทยสูตรดั้งเดิม",
      "address": "105 ถนนศุภสารรังสรรค์ ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110",
      "phone": "089-464-4333",
      "hours": "ทุกวัน 10:00–21:30",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ภัตตาคาร",
        "จีน-ไทย",
        "ตำนาน"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Ar Restaurant (A-R)",
      "description": "Legendary Thai–Chinese restaurant in Hat Yai (60+ years) serving classic Thai–Chinese dishes and banquet items.",
      "address": "105 Suphasarnrangsan Road, Hat Yai, Songkhla 90110",
      "phone": "089-464-4333",
      "hours": "Daily 10:00–21:30",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Thai-Chinese",
        "Heritage",
        "Banquet"
      ]
    }
  },
  {
    "id": "nai-roo-in-the-hole",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "ร้านในรู",
      "description": "ร้านไทย-จีนดั้งเดิมย่านตลาดกิมหยง เปิดมานานกว่า 40 ปี เมนูหลากหลายสไตล์ท้องถิ่น",
      "address": "ซอยนิพัทธ์อุทิศ 3 ซอย 1 (ข้างตลาดกิมหยง) ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110",
      "phone": "081-898-7656",
      "hours": "ทุกวัน 11:00–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "วินเทจ",
        "ตลาดกิมหยง",
        "ยอดนิยม"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Nai Roo (In the Hole)",
      "description": "Small storied Thai–Chinese eatery near Kim Yong Market, Hat Yai, open for 40+ years with vintage charm.",
      "address": "Niphat Uthit 3 Soi 1 (next to Kim Yong Market), Hat Yai, Songkhla 90110",
      "phone": "081-898-7656",
      "hours": "Daily 11:00–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Vintage",
        "Market",
        "Local favorite"
      ]
    }
  },
  {
    "id": "khao-tom-rod-daeng-red-truck-congee",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "ข้าวต้มรถแดง",
      "description": "ร้านข้าวต้มโต้รุ่งชื่อดังในหาดใหญ่ ข้าวต้มเครื่องและกับข้าวหลากหลาย ราคาประหยัด",
      "address": "23/1-2 ถนนรัถการ ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110 (สาขาที่แนะนำ)",
      "phone": "094-624-4562",
      "hours": "ทุกวัน 11:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ข้าวต้ม",
        "โต้รุ่ง",
        "ราคาประหยัด"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Khao Tom Rod Daeng (Red Truck Congee)",
      "description": "Famous overnight congee spot in Hat Yai with many side dishes and affordable prices.",
      "address": "23/1-2 Rattanakorn Road, Hat Yai, Songkhla 90110 (Branch 2)",
      "phone": "094-624-4562",
      "hours": "Daily 11:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Congee",
        "Late-night",
        "Affordable"
      ]
    }
  },
  {
    "id": "je-ni-fish-congee",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "เจ๊นิ ข้าวต้มปลา",
      "description": "ร้านข้าวต้มปลากะพงชื่อดังของสงขลา มากว่า 60 ปี บรรยากาศสาขาโรงสีแดงวินเทจ",
      "address": "สาขาโรงสีแดง – ถนนนครนอก ต.บ่อยาง อ.เมืองสงขลา สงขลา 90000",
      "phone": "081-897-9307",
      "hours": "ทุกวัน 09:00–17:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ข้าวต้มปลา",
        "วินเทจ",
        "คลาสสิก"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Je Ni — Fish Congee",
      "description": "Historic Songkhla fish-congee shop (60+ years) with a vintage Red Silo branch and classic sea bass congee.",
      "address": "Red Silo branch – Nakanok Road, Bo Yang, Mueang Songkhla, Songkhla 90000",
      "phone": "081-897-9307",
      "hours": "Daily 09:00–17:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Fish congee",
        "Historic",
        "Comfort food"
      ]
    }
  },
  {
    "id": "tae-hiang-iu-restaurant",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "ร้านแต้เฮี้ยงอิ้ว",
      "description": "ภัตตาคารจีน-ไทยย่านเมืองเก่าสงขลา เปิดมากว่า 70 ปี เมนูสูตรจีนแต้จิ๋วผสมไทย",
      "address": "85 ถนนนางงาม ต.บ่อยาง อ.เมืองสงขลา สงขลา 90000",
      "phone": "074-311-505",
      "hours": "ทุกวัน 11:30–14:00 และ 17:00–20:00 (ปิดวันพุธ)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "จีนแต้จิ๋ว",
        "เมืองเก่า",
        "ภัตตาคาร"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Tae Hiang Iu Restaurant",
      "description": "Long-established Chinese–Thai restaurant in Old Town Songkhla (70+ years) serving Teochew-influenced dishes.",
      "address": "85 Nang Ngam Road, Bo Yang, Mueang Songkhla, Songkhla 90000",
      "phone": "074-311-505",
      "hours": "Daily 11:30–14:00 and 17:00–20:00 (Closed Wednesday)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Teochew",
        "Old Town",
        "Classic"
      ]
    }
  },
  {
    "id": "pratana-pochana-tien-tien-lai",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารไทย-จีน & อาหารทั่วไป",
      "name": "ปรารถนาโภชนา (เทียน เทียน ไหล)",
      "description": "ภัตตาคารสไตล์กวางตุ้ง-แต้จิ๋วในหาดใหญ่ เน้นเมนูเหลาและอาหารตามสั่งระดับภัตตาคาร",
      "address": "ถนนนิพัทธ์อุทิศ 1 อ.หาดใหญ่ จ.สงขลา",
      "phone": "",
      "hours": "กลางวัน–เย็น (กรุณาตรวจสอบ)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เหลา",
        "กวางตุ้ง",
        "งานเลี้ยง"
      ]
    },
    "en": {
      "catagorie": "Thai–Chinese & General Thai",
      "name": "Pratana Pochana (Tien Tien Lai)",
      "description": "Cantonese–Teochew style restaurant in Hat Yai focusing on banquet dishes and premium a-la-carte items.",
      "address": "Niphat Uthit 1 Road, Hat Yai, Songkhla",
      "phone": "",
      "hours": "Lunch–Dinner (please confirm)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Cantonese",
        "Banquet",
        "Premium"
      ]
    }
  },
  {
    "id": "the-basil-mediterranean-restaurant",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารนานาชาติ และอื่นๆ",
      "name": "The Basil Mediterranean Restaurant",
      "description": "ร้านอาหารสไตล์เมดิเตอร์เรเนียน-อิตาเลียนในหาดใหญ่ บรรยากาศเรียบหรู พาสต้า สเต๊ก และพิซซ่า",
      "address": "ถนนนิพัทธ์สงเคราะห์ 5 (หลัง รพ.หาดใหญ่)",
      "phone": "",
      "hours": "ประมาณ 11:00–22:00 (กรุณาตรวจสอบ)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เมดิเตอร์เรเนียน",
        "อิตาเลียน",
        "บรรยากาศดี"
      ]
    },
    "en": {
      "catagorie": "International & Others",
      "name": "The Basil Mediterranean Restaurant",
      "description": "Mediterranean–Italian restaurant in Hat Yai offering pasta, steaks, homemade pizza and European-style seafood.",
      "address": "Niphat Songkroh 5 Road (behind Hat Yai Hospital)",
      "phone": "",
      "hours": "Approx. 11:00–22:00 (please confirm)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Mediterranean",
        "Italian",
        "Elegant"
      ]
    }
  },
  {
    "id": "vela-beach-bar-and-restaurant",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารนานาชาติ และอื่นๆ",
      "name": "Vela Beach Bar & Restaurant",
      "description": "บีชบาร์บรรยากาศชิล ในเขตสิงหนคร เหมาะชมวิวพระอาทิตย์ตก มีเมนูฟิวชั่น",
      "address": "บริเวณชายทะเลบ้านหัวเขา อ.สิงหนคร สงขลา",
      "phone": "",
      "hours": "กรุณาตรวจสอบ",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "บีชบาร์",
        "ค็อกเทล",
        "ฟิวชั่น"
      ]
    },
    "en": {
      "catagorie": "International & Others",
      "name": "Vela Beach Bar & Restaurant",
      "description": "Beach bar in Singhanakhon with cocktails at sunset and Thai-fusion dishes.",
      "address": "Coastal area near Ban Hua Khao, Singhanakhon, Songkhla",
      "phone": "",
      "hours": "Please confirm",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Beach bar",
        "Cocktails",
        "Fusion"
      ]
    }
  },
  {
    "id": "chok-dee-taitiam-chok-dee-bak-kut-teh",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารนานาชาติ และอื่นๆ",
      "name": "โชคดี แต่เตี้ยม (Chok Dee Taitiam)",
      "description": "ร้านติ่มซำและบะกุ๊ดเต๋ชื่อดังของหาดใหญ่ ติ่มซำเข่งละ 20 บาท น้ำซุปบะกุ๊ดเต๋เข้มข้น",
      "address": "58/25 ซอยละม้ายสงเคราะห์ 1 (ใกล้โรงแรมไดอิชิ) ต.หาดใหญ่ อ.หาดใหญ่",
      "phone": "080-525-9623",
      "hours": "ทุกวัน 06:00–11:30 และ 17:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ติ่มซำ",
        "เช้า",
        "บะกุ๊ดเต๋"
      ]
    },
    "en": {
      "catagorie": "International & Others",
      "name": "Chok Dee Taitiam (Chok Dee Bak Kut Teh)",
      "description": "Famous dim sum and Bak Kut Teh spot in Hat Yai, a top choice for traditional breakfast.",
      "address": "58/25 Lamai Songkhro 1 (near Daiichi Hotel), Hat Yai, Songkhla",
      "phone": "080-525-9623",
      "hours": "Daily 06:00–11:30 and 17:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Dim sum",
        "Bak Kut Teh",
        "Breakfast"
      ]
    }
  },
  {
    "id": "kaithong-decha-fried-chicken",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารนานาชาติ และอื่นๆ",
      "name": "ไก่ทอดเดชา",
      "description": "ตำนานไก่ทอดหาดใหญ่ ไก่หมักเครื่องเทศทอดกรอบ เสิร์ฟคู่ข้าวเหนียว (มีสาขาและตัวเลือกฮาลาล)",
      "address": "สาขาถนนชีอุทิศ (ใกล้ ร.ร.ศรีนคร) อ.หาดใหญ่ จ.สงขลา",
      "phone": "080-549-4478 / 081-098-3751",
      "hours": "10:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ไก่ทอด",
        "ต้นตำรับ",
        "ฮาลาล"
      ]
    },
    "en": {
      "catagorie": "International & Others",
      "name": "Kaithong Decha Fried Chicken",
      "description": "Original Hat Yai fried chicken legend — marinated, crispy outside and tender inside; served with sticky rice.",
      "address": "Chiu Uthit Road branch (near Srinakorn School), Hat Yai, Songkhla",
      "phone": "080-549-4478 / 081-098-3751",
      "hours": "10:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Fried chicken",
        "Signature",
        "Street food"
      ]
    }
  },
  {
    "id": "rad-na-ko-chon-chi-chang",
    "rating": null,
    "th": {
      "catagorie": "ร้านอาหารนานาชาติ และอื่นๆ",
      "name": "",
      "description": "",
      "address": "",
      "phone": "",
      "hours": "",
      "images": {
        "cover": "/images/placeholder/",
        "foods": []
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": []
    },
    "en": {
      "catagorie": "International & Others",
      "name": "Rad Na Ko Chon (Chi Chang)",
      "description": "Famous rad na (stirred-gravy noodle) near Che Chang Market, Hat Yai — thick gravy and tender pork.",
      "address": "226/16 Suphasarnrangsan Road, Hat Yai, Songkhla 90110",
      "phone": "074-233-555",
      "hours": "Daily 10:30–00:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Rad na",
        "Noodles",
        "Market area"
      ]
    }
  },
  {
    "id": "sunshine-blend-home-cafe",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "Sunshine Blend Home Cafe",
      "description": "คาเฟ่สวนสไตล์โฮมมี่ในเมืองสงขลา บรรยากาศอบอุ่น มุมถ่ายรูปและเมนูคาว-หวานครบ",
      "address": "ถนนตกสำรวจ (ใกล้เขาตังกวน) ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "ทุกวัน 07:30–18:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "คาเฟ่สวน",
        "เช้า",
        "ถ่ายรูป"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Sunshine Blend Home Cafe",
      "description": "Homely garden cafe in Songkhla with indoor and outdoor seating, savory and sweet menu and signature drink.",
      "address": "Tok Samrua Road (near Tang Kuan Hill), Bo Yang, Mueang Songkhla",
      "phone": "",
      "hours": "Daily 07:30–18:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Garden cafe",
        "Cozy",
        "Breakfast"
      ]
    }
  },
  {
    "id": "22-twenty-two-cafe",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "22 Twenty Two Cafe",
      "description": "คาเฟ่สวยโปร่งใกล้เขาตังกวน เมนูอาหารจานเดียวและเครื่องดื่มหลากหลาย",
      "address": "22 ถนนชายเขา ต.บ่อยาง อ.เมืองสงขลา 90000",
      "phone": "093-639-2232",
      "hours": "ทุกวัน 09:00–18:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "คาเฟ่",
        "บรรยากาศดี",
        "อาหารจานเดียว"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "22 Twenty Two Cafe",
      "description": "Stylish cafe near Tang Kuan Hill with spacious airy layout and all-day menu.",
      "address": "22 Chai Khao Road, Bo Yang, Mueang Songkhla 90000",
      "phone": "093-639-2232",
      "hours": "Daily 09:00–18:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Stylish",
        "All-day menu",
        "Coffee"
      ]
    }
  },
  {
    "id": "kongkang-cafe-koh-yo-mangrove-cafe",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "โกงกางคาเฟ่ เกาะยอ",
      "description": "คาเฟ่กลางป่าโกงกางบนเกาะยอ มีสะพานไม้ยื่นลงไปในน้ำ มุมชมพระอาทิตย์ตก",
      "address": "บ้านสวนใหม่ ซอย 13 หมู่ 9 ต.เกาะยอ อ.เมืองสงขลา สงขลา 90100",
      "phone": "081-275-2592",
      "hours": "จันทร์-ศุกร์ 10:00–18:00 (เสาร์-อาทิตย์/วันหยุดถึง 19:00)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "โกงกาง",
        "วิวทะเลสาบ",
        "ชิล"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Kongkang Cafe — Koh Yo Mangrove Cafe",
      "description": "Cafe amid Koh Yo mangroves with lake and sunset views; wooden pier and homemade desserts.",
      "address": "Baan Suan Mai Soi 13, Moo 9, Koh Yo, Mueang Songkhla, Songkhla 90100",
      "phone": "081-275-2592",
      "hours": "Mon–Fri 10:00–18:00 (Sat–Sun/public holidays until 19:00)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Mangrove",
        "Sunset",
        "Homemade"
      ]
    }
  },
  {
    "id": "lyns-the-shanghai-cafe",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "Lyn’s The Shanghai Cafe",
      "description": "คาเฟ่ธีมเซี่ยงไฮ้ในย่านเมืองเก่าสงขลา ใช้วัตถุดิบท้องถิ่นและมีเมนูซิกเนเจอร์",
      "address": "144–146 ถนนนครนอก (ย่านเมืองเก่า) ต.บ่อยาง อ.เมืองสงขลา 90000",
      "phone": "083-243-9977",
      "hours": "ทุกวัน 09:30–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ธีมเซี่ยงไฮ้",
        "วัตถุดิบท้องถิ่น",
        "คาเฟ่วินเทจ"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Lyn’s The Shanghai Cafe",
      "description": "Chic Old Town cafe blending old Shanghai style with local art, offering savory dishes, desserts and coffee.",
      "address": "144–146 Nakhon Nok Road (Old Town), Bo Yang, Mueang Songkhla 90000",
      "phone": "083-243-9977",
      "hours": "Daily 09:30–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Old Shanghai",
        "Local ingredients",
        "Signature drinks"
      ]
    }
  },
  {
    "id": "space-bar-hatyai",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "Space Bar Hatyai",
      "description": "คาเฟ่มินิมอลในหาดใหญ่ มีช็อกโกแลตรสเข้มและกาแฟดริปคุณภาพ เหมาะนั่งทำงาน",
      "address": "131 ถ.วงศ์วานิช ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110",
      "phone": "095-886-4266",
      "hours": "10:00–19:00 (ปิดวันพฤหัสบดี)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "มินิมอล",
        "กาแฟดี",
        "เงียบสงบ"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Space Bar Hatyai",
      "description": "Minimalist cafe in Hat Yai known for rich hot chocolate and quality drip coffee; quiet atmosphere for work.",
      "address": "131 Wongwanich Road, Hat Yai, Songkhla 90110",
      "phone": "095-886-4266",
      "hours": "10:00–19:00 (Closed Thursday)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Minimalist",
        "Quality coffee",
        "Work-friendly"
      ]
    }
  },
  {
    "id": "nong-nil-charcoal-egg-cakes-and-cafe",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "ขนมไข่เตาถ่านน้องนิล & คาเฟ่",
      "description": "ขนมไข่โบราณอบเตาถ่าน หอมกรุ่น ไส้หลากหลาย พร้อมเครื่องดื่มและของหวานอื่นๆ",
      "address": "170/1 ถนนธรรมนูญวิถี ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110",
      "phone": "082-432-4649 / 062-056-4899",
      "hours": "ทุกวัน 07:00–18:00 (หยุดวันที่ 6 และ 20-21 ของทุกเดือน)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ขนมไทย",
        "เตาถ่าน",
        "ของหวาน"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Nong Nil Charcoal Egg Cakes & Cafe",
      "description": "Traditional charcoal-baked egg cakes with various fillings, served in a nostalgic cafe setting.",
      "address": "170/1 Thamnuan Withi Road, Hat Yai, Songkhla 90110",
      "phone": "082-432-4649 / 062-056-4899",
      "hours": "Daily 07:00–18:00 (closed on 6th and 20–21st each month)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Charcoal-baked",
        "Traditional",
        "Dessert"
      ]
    }
  },
  {
    "id": "yiu-ice-cream-nang-ngam-road",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "ไอติมยิว (ถนนนางงาม)",
      "description": "ร้านไอศกรีมกะทิโบราณ เปิดมานานกว่า 80 ปี สูตรดั้งเดิม มีท็อปปิ้งหลากหลาย",
      "address": "ตรงข้ามศาลเจ้าถนนนางงาม ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "ประมาณ 10:00–16:00 (ขายหมดก่อนปิด)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ไอศกรีมโบราณ",
        "กะทิ",
        "ตำนาน"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Yiu Ice Cream (Nang Ngam Road)",
      "description": "Iconic traditional coconut ice cream since 1933 with classic toppings such as red bean and taro.",
      "address": "Opposite Nang Ngam Shrine, Bo Yang, Mueang Songkhla",
      "phone": "",
      "hours": "Approx. 10:00–16:00 (sells out fast)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Coconut ice cream",
        "Historic",
        "Local favorite"
      ]
    }
  },
  {
    "id": "roti-nang-ngam",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "โรตี ถนนนางงาม",
      "description": "ร้านโรตียอดนิยมบนถนนนางงาม แป้งกรอบนอกนุ่มใน เสิร์ฟกับนมข้นหวานหรือใส่ไข่/กล้วย",
      "address": "ถ.นางงาม ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "เช้า–บ่าย (ขายหมดเร็ว)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "โรตี",
        "ถนนนางงาม",
        "ขนมเช้า"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Roti Nang Ngam",
      "description": "Beloved roti stall on Nang Ngam Road known for crispy outside, soft inside roti served with condensed milk.",
      "address": "Nang Ngam Road, Bo Yang, Mueang Songkhla",
      "phone": "",
      "hours": "Morning–Afternoon (sells out early)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Roti",
        "Street dessert",
        "Popular"
      ]
    }
  },
  {
    "id": "lert-bakery",
    "rating": null,
    "th": {
      "catagorie": "คาเฟ่และร้านของหวาน",
      "name": "เลิศเบเกอรี่",
      "description": "ร้านเบเกอรี่โฮมเมดเก่าแก่ ขนมไทย-เบเกอรี่ดั้งเดิม เช่น เค้กฝอยทอง ขนมเปี๊ยะ",
      "address": "ถ.นครใน ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "ประมาณ 08:00–17:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เบเกอรี่",
        "โฮมเมด",
        "ของฝาก"
      ]
    },
    "en": {
      "catagorie": "Cafés & Desserts",
      "name": "Lert Bakery",
      "description": "Longstanding homemade bakery known for traditional cakes and pastries like Foi Thong and mooncakes.",
      "address": "Nakhon Nai Road, Bo Yang, Mueang Songkhla",
      "phone": "",
      "hours": "Approx. 08:00–17:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Bakery",
        "Traditional",
        "Takeaway"
      ]
    }
  },
  {
    "id": "nai-roo-noodle-shop",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "ร้านก๋วยเตี๋ยวในรู",
      "description": "สตรีทฟู้ดยอดนิยม เมนูก๋วยเตี๋ยวลูกชิ้นปลา บะหมี่น้ำใสหมูแดง และต้มยำสูตรโบราณ",
      "address": "ย่านตลาดกิมหยง/ซอยนิพัทธ์อุทิศ 3 (ข้างตลาดกิมหยง)",
      "phone": "081-898-7656",
      "hours": "ทุกวัน 11:00–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "สตรีทฟู้ด",
        "ก๋วยเตี๋ยว",
        "ตลาด"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Nai Roo Noodle Shop",
      "description": "Street-food favorite known for fish ball noodles, clear-broth egg noodles with roast pork, and nostalgic tom yum.",
      "address": "Kim Yong Market area / Niphat Uthit 3 Soi 1, Hat Yai",
      "phone": "081-898-7656",
      "hours": "Daily 11:00–20:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Street food",
        "Noodles",
        "Nostalgia"
      ]
    }
  },
  {
    "id": "siri-pork-blood-soup-siri-tom-lued-moo",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "ศิริ ต้มเลือดหมู",
      "description": "ร้านต้มเลือดหมูชื่อดังของหาดใหญ่ น้ำซุปกลมกล่อม เครื่องในสะอาดนุ่ม",
      "address": "42/13 ถนนศรีผดุงวิถี (ซอยอารีย์) ต.หาดใหญ่ อ.หาดใหญ่",
      "phone": "090-246-6987",
      "hours": "07:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ต้มเลือดหมู",
        "เช้า",
        "เครื่องยาจีน"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Siri Pork Blood Soup (Siri Tom Lued Moo)",
      "description": "Well-known Hat Yai pork-blood soup shop with herbal clear broth and tender offal.",
      "address": "42/13 Sri Phadung Withi (Soi Ari), Hat Yai",
      "phone": "090-246-6987",
      "hours": "07:00–21:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Pork blood soup",
        "Herbal",
        "Local"
      ]
    }
  },
  {
    "id": "pne-crispy-chicken",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "ไก่กรอบพี่เน่",
      "description": "ร้านข้าวหน้าไก่ทอดย่าน ม.อ. ไก่กรอบนอกนุ่มใน ราดด้วยแกงกะหรี่ของทางร้าน",
      "address": "ซอยปั๊มเซลล์ (ใกล้ ม.อ.หาดใหญ่) ต.หาดใหญ่",
      "phone": "083-196-8924",
      "hours": "17:00–21:00 (หยุดทุกวันเสาร์)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ไก่ทอด",
        "นักศึกษา",
        "ฟาสต์ฟู้ดท้องถิ่น"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "P'Ne Crispy Chicken",
      "description": "Popular fried chicken rice bowl near PSU Hat Yai, crispy outside, tender inside, served with curry sauce options.",
      "address": "Soi near Shell (near PSU Hat Yai), Hat Yai",
      "phone": "083-196-8924",
      "hours": "17:00–21:00 (Closed Saturday)",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Crispy chicken",
        "Student favorite",
        "Street stall"
      ]
    }
  },
  {
    "id": "je-moi-steamed-pork-balls",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "ลูกชิ้นหมูนึ่ง เจ๊โม้ย",
      "description": "ลูกชิ้นหมูนึ่งสูตรโบราณ ย่านยะหริ่ง-นางงาม เนื้อเด้ง เสิร์ฟกับน้ำจิ้มถั่ว",
      "address": "หัวมุมถนนยะหริ่ง ตัดถนนนางงาม อ.เมืองสงขลา",
      "phone": "",
      "hours": "ช่วงสายถึงบ่าย",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "ลูกชิ้นหมู",
        "ของว่าง",
        "สูตรโบราณ"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Je Moi Steamed Pork Balls",
      "description": "Traditional steamed pork-ball stall near Yaharin–Nang Ngam; bouncy pork balls served with sweet-spicy peanut dip.",
      "address": "Corner of Yaharin and Nang Ngam roads, Mueang Songkhla",
      "phone": "",
      "hours": "Morning–Afternoon",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Steamed pork balls",
        "Snack",
        "Traditional"
      ]
    }
  },
  {
    "id": "tao-kua-pa-juab",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "เถ้าคั่ว ป้าจวบ",
      "description": "เถ้าคั่วก๋วยเตี๋ยวผัดแห้งโบราณ ใส่กระดูกหมูและเครื่องใน เส้นผัดหอมกรอบ",
      "address": "ซอยยะหริ่ง (หลังศาลหลักเมือง) ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "ประมาณ 10:00–15:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เถ้าคั่ว",
        "ก๋วยเตี๋ยวผัด",
        "ท้องถิ่น"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Tao Kua Pa Juab",
      "description": "Old-style stir-fried noodle with pork bones and offal, fragrant and dry-style — local classic.",
      "address": "Soi Yaharin (behind the City Pillar), Bo Yang, Mueang Songkhla",
      "phone": "",
      "hours": "Approx. 10:00–15:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Stir-fried noodle",
        "Local classic",
        "Fragrant"
      ]
    }
  },
  {
    "id": "nang-ngam-satay",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "ร้านสะเต๊ะนางงาม",
      "description": "หมูสะเต๊ะย่างไฟถ่าน น้ำจิ้มถั่วข้นและอาจาดสด เป็นร้านยอดฮิตบนถนนนางงาม",
      "address": "หัวมุมถ.นางงาม-ปัตตานี ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "ประมาณ 09:00–15:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "สะเต๊ะ",
        "ย่างถ่าน",
        "ถนนนางงาม"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Nang Ngam Satay",
      "description": "Famous pork satay on Nang Ngam Road, charcoal-grilled with rich peanut sauce and fresh pickles.",
      "address": "Corner of Nang Ngam–Pattani, Bo Yang, Mueang Songkhla",
      "phone": "",
      "hours": "Approx. 09:00–15:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Satay",
        "Charcoal grilled",
        "Street food"
      ]
    }
  },
  {
    "id": "pig-tail-noodle-nang-ngam-road",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "ก๋วยเตี๋ยวหางหมู (ถนนนางงาม)",
      "description": "เมนูก๋วยเตี๋ยวหางหมูน้ำใส ใส่หางหมูตุ๋นเปื่อย เป็นเมนูท้องถิ่นหายาก",
      "address": "ใกล้โรงสีแดง ถนนนครใน-นางงาม ต.บ่อยาง อ.เมืองสงขลา",
      "phone": "",
      "hours": "เช้า–เที่ยง",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เมนูท้องถิ่น",
        "ก๋วยเตี๋ยว",
        "หายาก"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Pig Tail Noodle (Nang Ngam Road)",
      "description": "Unique clear-broth noodle with braised pig tail — a local delicacy near the Red Silo area.",
      "address": "Near Red Silo, Nakhon Nai–Nang Ngam area",
      "phone": "",
      "hours": "Morning–Noon",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Unique",
        "Braised pig tail",
        "Local delicacy"
      ]
    }
  },
  {
    "id": "ko-tee-ocha",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "โกตี๋โอชา",
      "description": "ร้านชาโกปี๊และอาหารเช้าโบราณ มีติ่มซำ ไข่กระทะ โรตี และกาแฟโบราณ",
      "address": "ถนนนิพัทธ์อุทิศ 2 (ตลาดฉื่อฉาง) อ.หาดใหญ่",
      "phone": "",
      "hours": "06:00–12:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "เช้า",
        "ติ่มซำ",
        "ชาโกปี๊"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Ko Tee Ocha",
      "description": "Old coffee shop and traditional breakfast place in Hat Yai serving dim sum, steamed buns, egg skillets and roti.",
      "address": "Niphat Uthit 2 (Chi Chang Market), Hat Yai",
      "phone": "",
      "hours": "06:00–12:00",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Traditional breakfast",
        "Dim sum",
        "Coffee shop"
      ]
    }
  },
  {
    "id": "bak-kut-teh-seng-ngi-hat-yai",
    "rating": null,
    "th": {
      "catagorie": "สตรีทฟู้ดเจ้าเด็ด และร้านอาหารพื้นเมืองดั้งเดิม",
      "name": "บะกุ๊ดเต๋ เซ่งงี่ (หาดใหญ่)",
      "description": "บะกุ๊ดเต๋สูตรกวางตุ้ง-มาเลย์ น้ำซุปยาจีนเข้มข้น เปิดมาตั้งแต่ปี 2520",
      "address": "ย่านเสน่หานุสรณ์ หาดใหญ่ จ.สงขลา",
      "phone": "",
      "hours": "",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "บะกุ๊ดเต๋",
        "ยาจีน",
        "โบราณ"
      ]
    },
    "en": {
      "catagorie": "Street Food & Traditional Local Stalls",
      "name": "Bak Kut Teh — Seng Ngi (Hat Yai)",
      "description": "Long-running Bak Kut Teh since 1977 with Cantonese–Malay style herbal pork rib soup.",
      "address": "Sanehanusorn area, Hat Yai",
      "phone": "",
      "hours": "",
      "images": {
        "cover": "/images/placeholder/",
        "foods": [
          "/images/placeholder/",
          "/images/placeholder/"
        ]
      },
      "embed": "",
      "recommands": [
        {
          "th": "",
          "en": ""
        },
        {
          "th": "",
          "en": ""
        }
      ],
      "tags": [
        "Bak Kut Teh",
        "Herbal soup",
        "Historic"
      ]
    }
  }
];

  const GAS_URL = "https://script.google.com/macros/s/AKfycbx_HyV7KrDo2oNTauO-lax0V0-10O0Ys0jvsIl3lYpG_1GXbCUMzZoLu9FQMDYIRtpzjw/exec";

  const el = (id) => document.getElementById(id);

  const toast = (opts) => {
    if (window.Swal && typeof window.Swal.fire === "function") return window.Swal.fire(opts);
    alert([opts.title, opts.text].filter(Boolean).join("\n"));
    return Promise.resolve();
  };

  const showLoading = (title, text) => {
    if (window.Swal && typeof window.Swal.fire === "function") {
      window.Swal.fire({ title, text, allowOutsideClick:false, didOpen: () => window.Swal.showLoading() });
    }
  };
  const closeLoading = () => {
    if (window.Swal && typeof window.Swal.close === "function") window.Swal.close();
  };

  const normalized = (s) => (s ?? "").toString().toLowerCase().trim();

  function isLikelyImagePath(src) {
    const s = (src || "").trim();
    if (!s) return false;
    if (s.endsWith("/")) return false;
    if (s.startsWith("data:image/")) return true;
    return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(s);
  }

  function svgPlaceholder(label) {
    const safe = String(label || "Photo").slice(0, 22);
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#0c0c0c"/>
            <stop offset="1" stop-color="#1b1b1b"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#g)"/>
        <rect x="40" y="40" width="1120" height="620" rx="48" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
        <g fill="rgba(255,255,255,0.55)">
          <path d="M330 475l135-150 110 120 165-200 230 260H330z" opacity="0.75"/>
          <circle cx="470" cy="260" r="42" opacity="0.65"/>
        </g>
        <text x="600" y="585" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Roboto" font-size="42" fill="rgba(255,255,255,0.72)">${safe}</text>
        <text x="600" y="630" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Roboto" font-size="22" fill="rgba(255,255,255,0.45)">Add real images later</text>
      </svg>
    `.trim();
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function pickEmbed(r, lang) {
    const cur = (r?.[lang]?.embed || "").trim();
    const alt = (r?.[lang === "en" ? "th" : "en"]?.embed || "").trim();
    return cur || alt || "";
  }

  function makeAutoEmbedURL(r, lang) {
    const d = r?.[lang] || r?.en || r?.th || {};
    const addr = (d.address || "").trim();
    const name = (d.name || "").trim();
    const q = encodeURIComponent(addr || name || "");
    if (!q) return "";
    return `https://www.google.com/maps?q=${q}&output=embed`;
  }

  function pickImages(r, lang) {
    const cur = r?.[lang]?.images || {};
    const alt = r?.[lang === "en" ? "th" : "en"]?.images || {};

    let cover = (cur.cover || "").trim() || (alt.cover || "").trim();
    if (!isLikelyImagePath(cover)) {
      const d = r?.[lang] || r?.en || r?.th || {};
      cover = svgPlaceholder(d.name || "Cover");
    }

    let foods = (Array.isArray(cur.foods) && cur.foods.length) ? cur.foods
            : (Array.isArray(alt.foods) ? alt.foods : []);
    foods = foods.slice(0, 2).map((src, idx) => isLikelyImagePath(src) ? src : svgPlaceholder(`Food ${idx+1}`));

    return { cover, foods };
  }

  async function sha256Hex(text) {
    const enc = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }

  function jsonp(url) {
    return new Promise((resolve, reject) => {
      const cbName = `__sgf_cb_${Date.now()}_${Math.floor(Math.random()*9999)}`;
      window[cbName] = (data) => { cleanup(); resolve(data); };

      const script = document.createElement("script");
      const cleanup = () => { try { delete window[cbName]; } catch {} script.remove(); };

      script.onerror = () => { cleanup(); reject(new Error("JSONP request failed")); };
      script.src = url.replace("callback=?", `callback=${cbName}`);
      document.body.appendChild(script);
    });
  }

  async function submitRegistration(payload) {
    const encoded = encodeURIComponent(JSON.stringify(payload));
    return await jsonp(`${GAS_URL}?callback=?&action=register&data=${encoded}`);
  }
  async function submitLogin(payload) {
    const encoded = encodeURIComponent(JSON.stringify(payload));
    return await jsonp(`${GAS_URL}?callback=?&action=login&data=${encoded}`);
  }

  const LS_PROFILE = "sgf_profile";
  const LS_LANG = "sgf_lang";

  function getProfile() {
    try { return JSON.parse(localStorage.getItem(LS_PROFILE) || "null"); }
    catch { return null; }
  }
  function setProfile(profile) {
    localStorage.setItem(LS_PROFILE, JSON.stringify(profile));
    paintUserBanner();
  }

  function currentUserKey() {
    const p = getProfile();
    return p?.id ? `user_${p.id}` : "guest";
  }
  const favKey = () => `sgf_favorites_${currentUserKey()}`;
  const rateKey = () => `sgf_ratings_${currentUserKey()}`;

  function getFavSet() {
    try { return new Set(JSON.parse(localStorage.getItem(favKey()) || "[]")); }
    catch { return new Set(); }
  }
  function setFavSet(set) { localStorage.setItem(favKey(), JSON.stringify([...set])); }
  function toggleFavorite(id) {
    const set = getFavSet();
    set.has(id) ? set.delete(id) : set.add(id);
    setFavSet(set);
    render();
  }

  function getRatings() {
    try { return JSON.parse(localStorage.getItem(rateKey()) || "{}"); }
    catch { return {}; }
  }
  function setRatings(obj) { localStorage.setItem(rateKey(), JSON.stringify(obj)); }
  function setUserRating(id, stars) {
    const r = getRatings();
    r[id] = stars;
    setRatings(r);
    if (state.activeRestaurantId === id) renderDetail(id);
    render();
  }

  const state = {
    lang: "en",
    selectedTag: "",
    onlyFavorites: false,
    activeRestaurantId: null,
  };

  const dom = {
    cards: el("cards"),
    resultLabel: el("resultLabel"),
    modeLabel: el("modeLabel"),
    searchInput: el("searchInput"),
    categorySelect: el("categorySelect"),
    clearBtn: el("clearBtn"),
    tagChips: el("tagChips"),
    btnEN: el("btnEN"),
    btnTH: el("btnTH"),
    btnFavorites: el("btnFavorites"),
    btnAccount: el("btnAccount"),
    userBanner: el("userBanner"),

    detailModal: el("detailModal"),
    closeDetail: el("closeDetail"),
    detailName: el("detailName"),
    detailCat: el("detailCat"),
    detailCover: el("detailCover"),
    detailDesc: el("detailDesc"),
    detailHours: el("detailHours"),
    detailPhone: el("detailPhone"),
    detailAddress: el("detailAddress"),
    detailFoods: el("detailFoods"),
    detailRecs: el("detailRecs"),
    detailTags: el("detailTags"),
    mapBox: el("mapBox"),
    detailFavBtn: el("detailFavBtn"),
    openMapNewTab: el("openMapNewTab"),
    ratingStars: el("ratingStars"),
    ratingNote: el("ratingNote"),

    subtitle: el("subtitle"),
    heroTitle: el("heroTitle"),
    heroDesc: el("heroDesc"),
    quickLabel: el("quickLabel"),
    tagLabel: el("tagLabel"),

    regModal: el("regModal"),
    regForm: el("regForm"),
    closeReg: el("closeReg"),
    loginModal: el("loginModal"),
    loginForm: el("loginForm"),
    closeLogin: el("closeLogin"),
  };

  function paintStaticText() {
    const L = state.lang;
    if (dom.subtitle) dom.subtitle.textContent = L === "en" ? "Find great food in Songkhla" : "ค้นหาร้านอร่อยในจังหวัดสงขลา";
    if (dom.heroTitle) dom.heroTitle.textContent = L === "en" ? "Explore Songkhla’s best local food" : "ออกตามหาร้านอร่อยที่ดีที่สุดในสงขลา";
    if (dom.heroDesc) dom.heroDesc.textContent = L === "en"
      ? "Browse categories, view photos, save favorites, and open maps instantly."
      : "เลือกหมวด ดูรูป กดรายการโปรด และเปิดแผนที่ได้ทันที";

    if (dom.quickLabel) dom.quickLabel.textContent = L === "en" ? "Quick search" : "ค้นหาแบบด่วน";
    if (dom.tagLabel) dom.tagLabel.textContent = L === "en" ? "Popular tags" : "แท็กยอดนิยม";

    if (dom.searchInput) dom.searchInput.placeholder = L === "en" ? "Search by name, tag..." : "ค้นหาชื่อร้านหรือแท็ก...";
    if (dom.clearBtn) dom.clearBtn.textContent = L === "en" ? "Clear" : "ล้างค่า";
    if (dom.btnFavorites) dom.btnFavorites.textContent = L === "en" ? "Favorites" : "รายการโปรด";

    const p = getProfile();
    if (dom.btnAccount) dom.btnAccount.textContent = p ? (L === "en" ? "Account" : "บัญชี") : (L === "en" ? "Login" : "เข้าสู่ระบบ");
    if (dom.modeLabel) dom.modeLabel.textContent = state.onlyFavorites
      ? (L === "en" ? "Showing: Favorites" : "โหมด: รายการโปรด")
      : (L === "en" ? "Showing: All" : "โหมด: ทั้งหมด");

    if (dom.closeDetail) dom.closeDetail.textContent = L === "en" ? "Close" : "ปิด";
  }

  function setLang(next) {
    state.lang = next;
    localStorage.setItem(LS_LANG, next);

    if (dom.btnEN && dom.btnTH) {
      if (next === "en") {
        dom.btnEN.classList.add("bg-white/10"); dom.btnEN.classList.remove("opacity-70");
        dom.btnTH.classList.remove("bg-white/10"); dom.btnTH.classList.add("opacity-70");
        document.documentElement.lang = "en";
      } else {
        dom.btnTH.classList.add("bg-white/10"); dom.btnTH.classList.remove("opacity-70");
        dom.btnEN.classList.remove("bg-white/10"); dom.btnEN.classList.add("opacity-70");
        document.documentElement.lang = "th";
      }
    }
    paintStaticText();
    paintUserBanner();
    render();
  }

  function paintUserBanner() {
    if (!dom.userBanner) return;
    const p = getProfile();
    if (!p) { dom.userBanner.classList.add("hidden"); dom.userBanner.textContent = ""; return; }
    dom.userBanner.classList.remove("hidden");
    dom.userBanner.textContent = state.lang === "en"
      ? `👋 Hi ${p.name} (${p.nationality}, ${p.age}) — ID: ${p.id}`
      : `👋 สวัสดี ${p.name} (${p.nationality}, อายุ ${p.age}) — รหัส: ${p.id}`;
  }

  function getAllCategories() {
    const set = new Set();
    for (const r of RESTAURANTS) set.add((r[state.lang]?.catagorie || "").trim());
    return [...set].filter(Boolean).sort((a,b) => a.localeCompare(b));
  }

  function getAllTags() {
    const set = new Set();
    for (const r of RESTAURANTS) (r[state.lang]?.tags || []).forEach(t => set.add(t));
    return [...set].filter(Boolean).slice(0, 24);
  }

  function matchesFilters(r) {
    const L = state.lang;
    const qv = normalized(dom.searchInput?.value || "");
    const cat = dom.categorySelect?.value || "";
    const data = r[L];

    const favs = getFavSet();
    if (state.onlyFavorites && !favs.has(r.id)) return false;
    if (cat && (data?.catagorie || "") !== cat) return false;

    if (state.selectedTag) {
      const tags = (data?.tags || []).map(normalized);
      if (!tags.includes(normalized(state.selectedTag))) return false;
    }

    if (!qv) return true;

    const hay = [
      data?.name, data?.description, data?.address,
      ...(data?.tags || []),
    ].map(normalized).join(" | ");

    return hay.includes(qv);
  }

  function renderCategorySelect() {
    if (!dom.categorySelect) return;
    const current = dom.categorySelect.value;
    const cats = getAllCategories();
    dom.categorySelect.innerHTML = "";

    const opt0 = document.createElement("option");
    opt0.value = "";
    opt0.textContent = state.lang === "en" ? "All categories" : "ทุกหมวดหมู่";
    dom.categorySelect.appendChild(opt0);

    cats.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      dom.categorySelect.appendChild(opt);
    });

    if ([...dom.categorySelect.options].some(o => o.value === current)) dom.categorySelect.value = current;
  }

  function renderTags() {
    if (!dom.tagChips) return;
    const tags = getAllTags();
    dom.tagChips.innerHTML = "";
    tags.forEach(t => {
      const btn = document.createElement("button");
      const isActive = normalized(state.selectedTag) === normalized(t);
      btn.className = `glass soft text-xs rounded-full px-3 py-1 border ${isActive ? "border-[var(--brand)]" : "border-white/10 hover:border-white/30"}`;
      btn.textContent = t;
      btn.addEventListener("click", () => { state.selectedTag = isActive ? "" : t; render(); });
      dom.tagChips.appendChild(btn);
    });
  }

  function starRow(n) {
    const full = "★".repeat(n);
    const empty = "☆".repeat(5 - n);
    return full + empty;
  }

  function renderCards(list) {
    if (!dom.cards) return;
    dom.cards.innerHTML = "";
    const favs = getFavSet();
    const userRates = getRatings();

    list.forEach(r => {
      const d = r[state.lang];
      const imgs = pickImages(r, state.lang);
      const isFav = favs.has(r.id);
      const rating = userRates[r.id] || Math.round(r.rating || 4);

      const card = document.createElement("article");
      card.className = "glass soft rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 cursor-pointer";
      card.innerHTML = `
        <div class="relative">
          <img class="h-44 w-full object-cover" src="${imgs.cover}" alt="cover" />
          <button data-fav="${r.id}"
            class="absolute top-3 right-3 glass soft rounded-full px-3 py-2 text-sm border border-white/10 hover:border-[var(--brand)]">
            ${isFav ? "♥" : "♡"}
          </button>
        </div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="font-semibold tracking-tight">${d?.name || ""}</div>
              <div class="text-xs text-white/60 mt-1 line-clamp-1">${d?.catagorie || ""}</div>
            </div>
            <div class="text-sm text-[var(--brand)]">${starRow(rating)}</div>
          </div>
          <div class="mt-2 text-sm text-white/75 line-clamp-2">${d?.description || ""}</div>
        </div>
      `;

      card.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-fav]");
        if (btn) return;
        openDetail(r.id);
      });

      card.querySelector(`button[data-fav="${r.id}"]`)?.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(r.id);
      });

      dom.cards.appendChild(card);
    });
  }

  function render() {
    if (!RESTAURANTS.length) return;
    paintStaticText();
    renderCategorySelect();
    renderTags();

    const list = RESTAURANTS.filter(matchesFilters);

    if (dom.resultLabel) dom.resultLabel.textContent = state.lang === "en"
      ? `${list.length} place(s) found`
      : `พบทั้งหมด ${list.length} ร้าน`;

    renderCards(list);
  }

  function openDetail(id) {
    state.activeRestaurantId = id;
    renderDetail(id);
    if (dom.detailModal) { dom.detailModal.classList.remove("hidden"); document.body.style.overflow = "hidden"; }
  }

  function closeDetailModal() {
    if (dom.detailModal) dom.detailModal.classList.add("hidden");
    document.body.style.overflow = "";
    state.activeRestaurantId = null;
  }

  function renderDetail(id) {
    const r = RESTAURANTS.find(x => x.id === id);
    if (!r) return;

    const d = r[state.lang];
    const imgs = pickImages(r, state.lang);

    if (dom.detailName) dom.detailName.textContent = d?.name || "";
    if (dom.detailCat) dom.detailCat.textContent = d?.catagorie || "";
    if (dom.detailCover) dom.detailCover.src = imgs.cover;
    if (dom.detailDesc) dom.detailDesc.textContent = d?.description || "";

    if (dom.detailHours) dom.detailHours.textContent = d?.hours || (state.lang === "en" ? "Not available" : "ไม่ระบุ");
    if (dom.detailPhone) dom.detailPhone.textContent = d?.phone || (state.lang === "en" ? "Not available" : "ไม่ระบุ");
    if (dom.detailAddress) dom.detailAddress.textContent = d?.address || (state.lang === "en" ? "Not available" : "ไม่ระบุ");

    if (dom.detailFoods) {
      dom.detailFoods.innerHTML = "";
      (imgs.foods || []).forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "food";
        img.className = "w-full h-40 object-cover rounded-2xl border border-white/10";
        dom.detailFoods.appendChild(img);
      });
    }

    if (dom.mapBox) {
      dom.mapBox.innerHTML = "";
      const v = pickEmbed(r, state.lang) || makeAutoEmbedURL(r, state.lang);
      dom.mapBox.innerHTML = v
        ? `<iframe src="${v}" width="100%" height="260" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        : (state.lang === "en" ? "No map" : "ไม่มีแผนที่");
    }

    if (dom.detailFavBtn) {
      const isFav = getFavSet().has(r.id);
      dom.detailFavBtn.textContent = isFav
        ? (state.lang === "en" ? "Remove favorite" : "ลบออกจากโปรด")
        : (state.lang === "en" ? "Add to favorites" : "เพิ่มรายการโปรด");
      dom.detailFavBtn.onclick = () => toggleFavorite(r.id);
    }

    if (dom.openMapNewTab) {
      dom.openMapNewTab.onclick = () => {
        const d2 = r[state.lang] || r.en || r.th || {};
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d2.address || d2.name || "")}`;
        window.open(url, "_blank");
      };
    }

    if (dom.ratingStars && dom.ratingNote) {
      const userRates = getRatings();
      const current = userRates[r.id] || 0;

      dom.ratingStars.innerHTML = "";
      for (let i = 1; i <= 5; i++) {
        const b = document.createElement("button");
        b.className = "text-xl soft px-1";
        b.style.color = i <= (current || 0) ? "var(--brand)" : "rgba(255,255,255,.35)";
        b.textContent = "★";
        b.title = `${i}/5`;
        b.addEventListener("click", () => setUserRating(r.id, i));
        dom.ratingStars.appendChild(b);
      }
      dom.ratingNote.textContent = current
        ? (state.lang === "en" ? `Saved: ${current}/5` : `บันทึกแล้ว: ${current}/5`)
        : (state.lang === "en" ? "Tap stars to rate" : "แตะดาวเพื่อให้คะแนน");
    }
  }

  function toggleFavoritesMode() {
    state.onlyFavorites = !state.onlyFavorites;
    paintStaticText();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openModal(modalEl) { if (!modalEl) return; modalEl.classList.remove("hidden"); document.body.style.overflow = "hidden"; }
  function closeModal(modalEl) { if (!modalEl) return; modalEl.classList.add("hidden"); document.body.style.overflow = ""; }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = (el("nameInput")?.value || "").trim();
    const nationality = (el("nationInput")?.value || "").trim();
    const age = Number(el("ageInput")?.value);

    const pass1El = el("passInput");
    const pass2El = el("passInput2");
    let passwordHash = "";

    if (pass1El && pass2El) {
      const pass1 = pass1El.value || "";
      const pass2 = pass2El.value || "";
      if (pass1.length < 6) return toast({ icon:"warning", title: state.lang==="en"?"Weak password":"รหัสผ่านสั้นไป", text: state.lang==="en"?"Use at least 6 characters.":"อย่างน้อย 6 ตัวอักษร" });
      if (pass1 !== pass2) return toast({ icon:"warning", title: state.lang==="en"?"Mismatch":"รหัสผ่านไม่ตรงกัน", text: state.lang==="en"?"Please confirm password again.":"กรุณายืนยันรหัสผ่านใหม่" });
      passwordHash = await sha256Hex(pass1);
    }

    const createdAt = new Date().toISOString();
    const payload = passwordHash ? { name, nationality, age, createdAt, passwordHash } : { name, nationality, age, createdAt };

    showLoading(state.lang==="en"?"Saving...":"กำลังบันทึก...", "");
    try {
      const res = await submitRegistration(payload);
      closeLoading();
      if (res?.status !== "success") throw new Error(res?.message || "Unknown error");

      setProfile({ id: res.id, totalUsers: res.totalUsers, name, nationality, age, createdAt });

      await toast({ icon:"success", title: state.lang==="en"?"Account created!":"สร้างบัญชีสำเร็จ!", text: state.lang==="en"?`Your ID is ${res.id}`:`รหัสสมาชิกของคุณคือ ${res.id}` });

      closeModal(dom.regModal);
      dom.regForm?.reset();
      paintStaticText();
      render();
    } catch (err) {
      closeLoading();
      await toast({ icon:"error", title: state.lang==="en"?"Failed":"บันทึกไม่สำเร็จ", text: String(err?.message || err) });
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const id = String(el("loginIdInput")?.value || "").trim();
    const pass = String(el("loginPassInput")?.value || "");
    if (!id) return;

    showLoading(state.lang==="en"?"Logging in...":"กำลังเข้าสู่ระบบ...", "");
    try {
      const passwordHash = await sha256Hex(pass);
      const res = await submitLogin({ id, passwordHash });
      closeLoading();
      if (res?.status !== "success") throw new Error(res?.message || "Login failed");

      setProfile({ id: res.profile.id, name: res.profile.name, nationality: res.profile.nationality, age: res.profile.age, createdAt: res.profile.createdAt });

      await toast({ icon:"success", title: state.lang==="en"?"Welcome!":"ยินดีต้อนรับ!", text: "" });

      closeModal(dom.loginModal);
      dom.loginForm?.reset();
      paintStaticText();
      render();
    } catch (err) {
      closeLoading();
      await toast({ icon:"error", title: state.lang==="en"?"Login failed":"เข้าสู่ระบบไม่สำเร็จ", text: String(err?.message || err) });
    }
  }

  function wireEvents() {
    dom.btnEN?.addEventListener("click", () => setLang("en"));
    dom.btnTH?.addEventListener("click", () => setLang("th"));
    dom.btnFavorites?.addEventListener("click", toggleFavoritesMode);

    dom.searchInput?.addEventListener("input", render);
    dom.categorySelect?.addEventListener("change", render);

    dom.clearBtn?.addEventListener("click", () => {
      if (dom.searchInput) dom.searchInput.value = "";
      if (dom.categorySelect) dom.categorySelect.value = "";
      state.selectedTag = "";
      state.onlyFavorites = false;
      paintStaticText();
      render();
    });

    dom.closeDetail?.addEventListener("click", closeDetailModal);
    dom.detailModal?.addEventListener("click", (e) => {
      if (e.target === dom.detailModal) closeDetailModal();
      if (e.target.classList?.contains("modal-backdrop")) closeDetailModal();
    });

    dom.closeReg?.addEventListener("click", () => closeModal(dom.regModal));
    dom.regModal?.addEventListener("click", (e) => { if (e.target.classList?.contains("modal-backdrop")) closeModal(dom.regModal); });
    dom.regForm?.addEventListener("submit", handleRegisterSubmit);

    dom.closeLogin?.addEventListener("click", () => closeModal(dom.loginModal));
    dom.loginModal?.addEventListener("click", (e) => { if (e.target.classList?.contains("modal-backdrop")) closeModal(dom.loginModal); });
    dom.loginForm?.addEventListener("submit", handleLoginSubmit);
  }

  function init() {
    const savedLang = localStorage.getItem(LS_LANG);
    if (savedLang === "th" || savedLang === "en") state.lang = savedLang;

    wireEvents();
    setLang(state.lang);
    paintUserBanner();
    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
