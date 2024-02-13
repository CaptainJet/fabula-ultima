const NAVBAR = ['stats', 'bonds', 'classes', 'equipment', 'magic', 'journal', 'settings'];

const REPEATING = [
  'weapons',
  'spells',
  'rituals',

  'classes',
  'notes',

  'armors',
  'shields',
  'accessories',

  // bestiary
  'basic-attacks',
  'other-actions',
  'special-rules',
  'rare-gears',
];

const DIE_SIZES = [6, 8, 10, 12];

// const STUDY_THRESHOLDS = [10, 13, 16];
const STUDY_THRESHOLDS = [7, 10, 13];

const VILLAIN_ULTIMA_POINTS: Record<string, number> = {
  minor: 5,
  major: 10,
  supreme: 15,
};

const STATUS_EFFECTS: Record<string, number> = {
  dazed: -1,
  enraged: -1,
  poisoned: -1,
  shaken: -1,
  slow: -1,
  weak: -1,
  dexterity_boost: 1,
  insight_boost: 1,
  might_boost: 1,
  willpower_boost: 1,
};

const RITUAL_DISCIPLINES = [
  'arcanism',
  'chimerism',
  'elementalism',
  'entropism',
  'ritualism',
  'spiritism',
];

const MARTIAL_PROFICIENCIES = ['martialmelee', 'martialranged', 'martialarmor', 'martialshield'];

const RITUAL_DIFFICULTY: Record<string, any> = {
  difficulty: {
    minor: 7,
    medium: 10,
    major: 13,
    extreme: 16,
  },
  potency: {
    minor: 20,
    medium: 30,
    major: 40,
    extreme: 50,
  },
  area: {
    individual: 1,
    small: 2,
    large: 3,
    huge: 4,
  },
};

const ATTR_ABBREVIATIONS = {
  dexterity: 'dex',
  insight: 'ins',
  might: 'mig',
  willpower: 'wlp',
};

const AFFINITIES = ['physical', 'air', 'bolt', 'dark', 'earth', 'fire', 'ice', 'light', 'poison'];

const ATTR_WATCH: Record<string, string[]> = {
  dexterity: ['dexterity_max', 'slow', 'enraged', 'dexterity_boost'],
  insight: ['insight_max', 'dazed', 'enraged', 'insight_boost'],
  might: ['might_max', 'weak', 'poisoned', 'might_boost'],
  willpower: ['willpower_max', 'shaken', 'poisoned', 'willpower_boost'],

  hp: ['sheet_type', 'might_max', 'level', 'hp_extra'],
  mp: ['sheet_type', 'willpower_max', 'level', 'mp_extra'],
  ip: ['sheet_type', 'ip_extra'],

  ultima_points: ['sheet_type', 'villain'],

  villain_empty: ['villain', 'multipart', 'phases'],

  initiative: ['dexterity', 'insight', 'initiative_extra', 'initiative_bonus'],

  level: [
    'sheet_type',
    // 'repeating_classes:class_level',
    'repeating_classes:class_skill1_level',
    'repeating_classes:class_skill2_level',
    'repeating_classes:class_skill3_level',
    'repeating_classes:class_skill4_level',
    'repeating_classes:class_skill5_level',
    'repeating_classes:class_martialmelee',
    'repeating_classes:class_martialranged',
    'repeating_classes:class_martialarmor',
    'repeating_classes:class_martialshield',
  ],

  defense: [
    'dexterity',
    'defense_quick',
    'defense_extra',
    'armor_is_martial',
    'armor_defense',
    'armor_defense_bonus',
    'shield_defense_bonus',
    'repeating_armors:armor_is_martial',
    'repeating_armors:armor_defense',
    'repeating_armors:armor_defense_bonus',
    'repeating_armors:armor_is_equipped',
    'repeating_shields:shield_defense_bonus',
    'repeating_shields:shield_is_equipped',
  ],

  magic_defense: [
    'willpower',
    'defense_quick',
    'magic_defense_extra',
    // 'armor_is_martial',
    // 'armor_magic_defense',
    'armor_magic_defense_bonus',
    'shield_magic_defense_bonus',
    'repeating_armors:armor_magic_defense_bonus',
    'repeating_armors:armor_is_equipped',
    'repeating_shields:shield_magic_defense_bonus',
    'repeating_shields:shield_is_equipped',
  ],

  equipped: [
    'repeating_armors:armor_is_equipped',
    'repeating_shields:shield_is_equipped',
    'repeating_accessories:accessory_is_equipped',
    'repeating_weapons:weapon_is_equipped',
  ],

  bonds: [1, 2, 3, 4, 5, 6].flatMap((bond) => [
    `bond${bond}_approval`,
    `bond${bond}_allegiance`,
    `bond${bond}_fondness`,
  ]),

  basic_attacks: [
    'sheet_type',
    'level',
    'accuracy_bonus',
    'magic_bonus',
    'repeating_basic-attacks:attack_extra_damage',
  ],
  weapons: [
    'sheet_type',
    'level',
    'accuracy_bonus',
    'magic_bonus',
    'repeating_weapons:weapon_accuracy',
    'repeating_weapons:weapon_damage',
    'repeating_weapons:weapon_attack_accuracy',
    'repeating_weapons:weapon_attack_damage',
    'repeating_weapons:weapon_extra_damage',
  ],
  spells: [
    'sheet_type',
    'level',
    'accuracy_bonus',
    'magic_bonus',
    'repeating_spells:spell_accuracy',
    'repeating_spells:spell_damage',
  ],
  rituals: [
    'sheet_type',
    'accuracy_bonus',
    'repeating_rituals:ritual_accuracy',
    'repeating_rituals:ritual_potency',
    'repeating_rituals:ritual_area',
    ...RITUAL_DISCIPLINES,
  ],

  // equipments_empty: [
  //   'weapons_empty',
  //   'armor_name',
  //   'armor_defense',
  //   'armor_defense_bonus',
  //   'armor_magic_defense_bonus',
  //   'armor_initiative',
  //   'armor_cost',
  //   'shield_name',
  //   'shield_defense',
  //   'shield_defense_bonus',
  //   'shield_magic_defense_bonus',
  //   'shield_initiative',
  //   'shield_cost',
  // ],
};

const SECTION_PREFIX: Record<string, string> = {
  repeating_armors: 'armor_',
  repeating_shields: 'shield_',
  repeating_accessories: 'accessory_',
  repeating_weapons: 'weapon_',
};

const BUTTON_ACTIONS: Record<string, string[]> = {
  hp: ['hp-control-add', 'hp-control-subtract'],
  mp: ['mp-control-add', 'mp-control-subtract'],
};

const CLICK_LISTENERS: Record<string, string> = {
  'repeating_basic-attacks:basicattack': 'basicattack',
  'repeating_weapons:weaponattack': 'weaponattack',
  'repeating_weapons:weaponchat': 'weaponchat',
  'repeating_armors:armorchat': 'armorchat',
  'repeating_shields:shieldchat': 'shieldchat',
  'repeating_accessories:accessorychat': 'accessorychat',
  'repeating_spells:spell': 'spell',
  'repeating_rituals:ritual': 'ritual',
  'repeating_other-actions:otheractionchat': 'otheractionchat',
  'repeating_special-rules:specialrulechat': 'specialrulechat',
  'repeating_rare-gears:raregearchat': 'raregearchat',
  'repeating_notes:notechat': 'notechat',
  'repeating_classes:classchat': 'classchat',
  'armorchat': 'armorchat',
  'shieldchat': 'shieldchat',
  'study7': 'study7',
  'study10': 'study10',
  'study13': 'study13',
  'bond1chat': 'bond1',
  'bond2chat': 'bond2',
  'bond3chat': 'bond3',
  'bond4chat': 'bond4',
  'bond5chat': 'bond5',
  'bond6chat': 'bond6',
  'declare-fabula': 'fabulapoints',
};

const SEND_TO_CHAT: Record<string, string[]> = {
  ...([1, 2, 3, 4, 5, 6] as any[]).reduce(
    (memo: Record<string, string[]>, bond: number) => (
      (memo[`bond${bond}`] = [
        `bond${bond}_name`,
        `bond${bond}_level`,
        `bond${bond}_approval`,
        `bond${bond}_allegiance`,
        `bond${bond}_fondness`,
        `bond${bond}_description`,
      ]),
      memo
    ),
    {} as Record<string, string[]>
  ),
  basicattack: [
    'attack_name',
    'attack_range',
    'attack_attr1',
    'attack_attr2',
    'attack_accuracy_total',
    'attack_damage_total',
    'attack_type',
    'attack_special',
  ],
  weaponattack: [
    'weapon_name',
    'weapon_accuracy_total',
    'weapon_attack_accuracy',
    'weapon_attack_damage',
    'weapon_attack_name',
    'weapon_attr1',
    'weapon_attr2',
    'weapon_category',
    'weapon_damage_total',
    'weapon_extra_damage',
    'weapon_hands',
    'weapon_name',
    'weapon_range',
    'weapon_special',
    'weapon_type',
  ],
  spell: [
    'spell_name',
    'spell_is_offensive',
    'spell_accuracy_total',
    'spell_attr1',
    'spell_attr2',
    'spell_damage_total',
    'spell_duration',
    'spell_effect',
    'spell_mp',
    'spell_name',
    'spell_target',
    'spell_type',
  ],
  ritual: [
    'ritual_name',
    'ritual_discipline',
    'ritual_attr1',
    'ritual_attr2',
    'ritual_accuracy_total',
    'ritual_potency',
    'ritual_area',
    'ritual_difficulty',
    'ritual_mp',
    'ritual_effect',
  ],
  otheractionchat: ['action_name', 'action_effect'],
  specialrulechat: ['special_name', 'special_effect'],
  raregearchat: ['raregear_name', 'raregear_effect'],
  notechat: ['note_name', 'note_effect'],
  armorchat: [
    'armor_is_martial',
    'armor_name',
    'armor_defense',
    'armor_defense_bonus',
    'armor_magic_defense_bonus',
    'armor_initiative',
    'armor_cost',
    'armor_special',
  ],
  shieldchat: [
    'shield_name',
    'shield_is_martial',
    'shield_defense_bonus',
    'shield_magic_defense_bonus',
    'shield_initiative',
    'shield_cost',
    'shield_special',
  ],
  accessorychat: ['accessory_name', 'accessory_cost', 'accessory_special'],
  weaponchat: [
    'weapon_name',
    'weapon_is_martial',
    'weapon_range',
    'weapon_category',
    'weapon_attr1',
    'weapon_attr2',
    'weapon_accuracy',
    'weapon_type',
    'weapon_hands',
    'weapon_damage',
    'weapon_cost',
    'weapon_special',
  ],
  study7: ['rank', 'species', 'hp', 'hp_max', 'hp_crisis', 'mp_max'],
  classchat: [
    'class_name',
    'class_level',
    'class_skills_taken',
    'class_benefit',
    'level',
    'class_description',
  ],
  fabulapoints: ['fabula_points', 'spend_fabula_points'],
};
SEND_TO_CHAT.study10 = [
  ...SEND_TO_CHAT.study7,
  'traits',
  'dexterity_max',
  'insight_max',
  'might_max',
  'willpower_max',
  'defense',
  'magic_defense',
  'physical',
  'air',
  'bolt',
  'dark',
  'earth',
  'fire',
  'ice',
  'light',
  'poison',
];
SEND_TO_CHAT.study13 = [...SEND_TO_CHAT.study10];

const ROLLTEMPLATE_REQUESTS: string[] = ['character_avatar', 'sheet_type'];

const EQUIPMENT_REQUESTS: string[] = [
  'sheet_type',
  'dexterity',
  'willpower',
  'dual_shieldbearer',
  'armor_defense_bonus',
  'armor_defense',
  'armor_is_martial',
  'armor_magic_defense_bonus',
  'defense_extra',
  'defense_extra',
  'magic_defense_extra',
  'magic_defense_extra',
  'shield_defense_bonus',
  'shield_magic_defense_bonus',
];

const CHARACTER_EQUIPMENTS: SectionDetails[] = [
  {
    section: 'repeating_armors',
    fields: [
      'armor_is_equipped',
      'armor_is_martial',
      'armor_defense',
      'armor_defense_bonus',
      'armor_magic_defense_bonus',
    ],
  },
  {
    section: 'repeating_shields',
    fields: ['shield_is_equipped', 'shield_defense_bonus', 'shield_magic_defense_bonus'],
  },
  { section: 'repeating_accessories', fields: ['accessory_is_equipped'] },
  { section: 'repeating_weapons', fields: ['weapon_is_equipped', 'weapon_hands'] },
];

const CHARACTER_SKILL_LEVEL: SectionDetails[] = [
  {
    section: 'repeating_classes',
    fields: [
      'class_skill1_name',
      'class_skill1_level',
      'class_skill2_name',
      'class_skill2_level',
      'class_skill3_name',
      'class_skill3_level',
      'class_skill4_name',
      'class_skill4_level',
      'class_skill5_name',
      'class_skill5_level',
      'class_martialmelee',
      'class_martialranged',
      'class_martialarmor',
      'class_martialshield',
    ],
  },
];

const BASIC_ACCURACY_DAMAGE: SectionDetails[] = [
  {
    section: 'repeating_basic-attacks',
    fields: ['attack_extra_damage'],
  },
];

const WEAPON_ACCURACY_DAMAGE: SectionDetails[] = [
  {
    section: 'repeating_weapons',
    fields: [
      'weapon_accuracy',
      'weapon_damage',
      'weapon_attack_accuracy',
      'weapon_attack_damage',
      'weapon_extra_damage',
    ],
  },
];

const SPELL_ACCURACY_DAMAGE: SectionDetails[] = [
  {
    section: 'repeating_spells',
    fields: ['spell_accuracy', 'spell_damage'],
  },
];

const RITUAL_ACCURACY_DIFFICULTY: SectionDetails[] = [
  {
    section: 'repeating_rituals',
    fields: ['ritual_accuracy', 'ritual_potency', 'ritual_area'],
  },
];

const listenersByKey = (obj: object) => {
  return Object.entries(obj).reduce((memo: Record<string, string>, [key, arr]) => {
    memo[key] = listeners(arr);
    return memo;
  }, {});
};

const listeners = (arr: string[]): string => {
  return arr.map((str: string) => `change:${str}`).join(' ');
};
