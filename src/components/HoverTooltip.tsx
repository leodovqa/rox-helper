import { useState } from 'react';
import './HoverTooltip.css';

interface TooltipData {
  description: string;
  icon: string;
}

const tooltipData: Record<string, TooltipData> = {
  // Skills
  'Wind Walk': {
    description: 'Increases Movement Speed and Flee for the user and party members.',
    icon: 'https://static.divine-pride.net/images/skill/381.png'
  },
  'True Sight': {
    description: 'Boosts all stats, Attack Power, Hit, and Critical rate.',
    icon: 'https://static.divine-pride.net/images/skill/382.png'
  },
  'Focused Shot': {
    description: 'A powerful single-target shot that deals massive physical damage.',
    icon: 'https://static.divine-pride.net/images/skill/113.png' // using Double Strafe icon as placeholder
  },
  'Sharp Shooting': {
    description: 'Fires a piercing arrow dealing heavy AoE damage in a line.',
    icon: 'https://static.divine-pride.net/images/skill/380.png'
  },
  'Ankle Snare': {
    description: 'Places a trap that immobilizes the first enemy that steps on it.',
    icon: 'https://static.divine-pride.net/images/skill/121.png'
  },

  // Weapons & Accessories
  'Shortbow': {
    description: 'A weapon type offering high Attack Speed and Haste.',
    icon: 'https://static.divine-pride.net/images/items/weapon/2/1701.png' // Bow icon
  },
  'Longbow': {
    description: 'A weapon type offering high base Physical Attack.',
    icon: 'https://static.divine-pride.net/images/items/weapon/2/1714.png' // Gakkung icon
  },
  'Autumn Talisman': {
    description: 'A popular accessory providing a massive boost to Haste.',
    icon: 'https://static.divine-pride.net/images/items/item/2601.png' // Ring icon
  },

  // Cards
  'Andre Card': {
    description: 'Weapon Card: ATK +20',
    icon: 'https://static.divine-pride.net/images/items/cards/4066.png'
  },
  'Marduk': {
    description: 'Headgear Card: Grants immunity to Silence.',
    icon: 'https://static.divine-pride.net/images/items/cards/4112.png'
  },
  'Pupa': {
    description: 'Armor Card: Max HP +700',
    icon: 'https://static.divine-pride.net/images/items/cards/4033.png'
  },
  'Pecopeco': {
    description: 'Armor Card: Max HP +10%',
    icon: 'https://static.divine-pride.net/images/items/cards/4034.png'
  },

  // Enchantments
  'Prontera DEX': {
    description: 'City Enchantment focusing on primary stats (STR, AGI, VIT, INT, DEX, LUK).',
    icon: 'https://static.divine-pride.net/images/items/item/1002.png' // Jellopy icon placeholder
  },
  'Morroc': {
    description: 'City Enchantment focusing on Attack Power, Magic Power, and Penetration.',
    icon: 'https://static.divine-pride.net/images/items/item/909.png' // Jellopy icon placeholder
  }
};

interface HoverTooltipProps {
  term: string;
}

export default function HoverTooltip({ term }: HoverTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const data = tooltipData[term];

  if (!data) return <strong>{term}</strong>;

  return (
    <span 
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <strong className="tooltip-trigger">{term}</strong>
      {showTooltip && (
        <div className="tooltip-popup">
          <img src={data.icon} alt={term} className="tooltip-icon" />
          <div className="tooltip-content">
            <span className="tooltip-title">{term}</span>
            <span className="tooltip-desc">{data.description}</span>
          </div>
        </div>
      )}
    </span>
  );
}
