interface Weapon {
  name: string;
  bcCost: string;
  allowsDualWielding: boolean;
  description: string;
  image: string; 
}

interface ThrownWeapon {
  name: string;
  image: string; 
  description: string;
}


export const weapons: Weapon[] = [
  {
    name: "Mini eagle",
    bcCost: "0",
    allowsDualWielding: true,
    description: "A secondary gun by default. Has small range and deals little damage.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/d/d7/Desert_eagle.png/revision/latest?cb=20211128022157"
  },
  {
    name: "Magnum",
    bcCost: "0",
    allowsDualWielding: true,
    description: "Default primary gun. Slow rate of fire, but decent amount of damage.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/9/90/Magnum.png/revision/latest?cb=20211128022239"
  },
  {
    name: "Uzi",
    bcCost: "0",
    allowsDualWielding: true,
    description: "Default primary gun. Fast rate of fire, but quite inaccurate.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/9/98/Uzi.png/revision/latest?cb=20211128022319"
  },
  {
    name: "Golden Eagle",
    bcCost: "50",
    allowsDualWielding: true,
    description: "Desert Eagle's silenced & golden counterpart. Has more range compared to the original.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/3/3c/Golden_eagle.png/revision/latest?cb=20211128022357"
  },
  {
    name: "Machete",
    bcCost: "50",
    allowsDualWielding: true,
    description: "Melee item. Can instantly kill players with one use of a melee button.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/0/0c/Machete.png/revision/latest?cb=20211128022756"
  },
  {
    name: "Tec-9",
    bcCost: "50",
    allowsDualWielding: true,
    description: "A default gun option. Is more accurate than the UZI, but has slower rate of fire compared to the aforementioned weapon.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/9/93/Tec-9.png/revision/latest?cb=20211128022840"
  },
  {
    name: "MP5",
    bcCost: "100",
    allowsDualWielding: false,
    description: "Holds a large amount of ammunition. Despite being inaccurate, it fires rapidly, which is suitable for close combat, as with most submachine guns and pistols.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/5/54/Mp5.png/revision/latest?cb=20211128022924"
  },
  {
    name: "AK47",
    bcCost: "100",
    allowsDualWielding: false,
    description: "An assault rifle. Offers great damage at the expense of accuracy. A certified Soviet classic.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/c/ce/Ak47.png/revision/latest?cb=20211128022956"
  },
  {
    name: "M4/AR-15",
    bcCost: "100",
    allowsDualWielding: false,
    description: "Shoots 3-round highly accurate bursts. When used properly, it excels in dealing damage.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/6/63/M4_AR-15.png/revision/latest?cb=20211128023120"
  },
  {
    name: "Tavor X95",
    bcCost: "100",
    allowsDualWielding: false,
    description: "Decent weapon found in some exclusive maps. Deals highly decent amount of damage.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/2/21/Travor_x95.png/revision/latest?cb=20211128023202"
  },
  {
    name: "XM8",
    bcCost: "100",
    allowsDualWielding: false,
    description: "Has similar zooming range to the M4 but does not do burst-firing. Deals barely decent damage.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/3/3c/XM8.png/revision/latest?cb=20211128023236"
  },
  {
    name: "EMP Gun",
    bcCost: "100",
    allowsDualWielding: false,
    description: "A Utility type weapon which shoots a large Electro Magnetic Pulse (EMP) that travels slowly. If a player comes in contact with the EMP, their rocket boots will be disabled for a brief amount of time. It can also disarm Proxy Mines.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/c/c6/Emp_gun.png/revision/latest?cb=20211128023312"
  },
  {
    name: "Phasr/Laser",
    bcCost: "200",
    allowsDualWielding: false,
    description: "Fires a laser beam that does not inflict a lot of damage but has continuous fire. Is excellent at accuracy, similar to that of M93BA. This and the flamethrower reloads when the battery or tank is empty and is uncontrollable by the player.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/e/e7/Phasr_laser_gun.png/revision/latest?cb=20211128023345"
  },
  {
    name: "Flamethrower",
    bcCost: "200",
    allowsDualWielding: false,
    description: "It deals great damage in rapid succession. Has smaller range compared to the shotgun, but spreads out more widely in an area of effect. Used widely in close combat. It cannot be manually reloaded.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/6/6c/Flame_thrower.png/revision/latest?cb=20211128023421"
  },
  {
    name: "Grenade Launcher/Mortar",
    bcCost: "200",
    allowsDualWielding: false,
    description: "Contains six rounds of small explosives that detonates whenever it hits a target, or triggers an explosion after a few seconds mid-air or in a terrain.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/c/c2/Grenade_launcher.png/revision/latest?cb=20211128023505"
  },
  {
    name: "M14 Sniper Rifle",
    bcCost: "200",
    allowsDualWielding: false,
    description: "A marksman weapon with shorter range. The bullets are precise but it travels slowly, which is detrimental to its accuracy. It deals high damage when used properly.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/b/b4/M14.png/revision/latest?cb=20211128023555"
  },
  {
    name: "SPAS-12 Pump-Action Shotgun",
    bcCost: "600",
    allowsDualWielding: false,
    description: "Contains six shells that can one-hit KO a target when used well. The bullets spread out at a shorter range in comparison to the Desert Eagle, making it excellent for close combat.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/6/61/Shotgun.png/revision/latest?cb=20211128023639"
  },
  {
    name: "M134 Minigun",
    bcCost: "1000",
    allowsDualWielding: false,
    description: "Whenever it fires, it takes a long second to load up the mini gun until it reaches full speed, which then gives a rapid burst of fire that deals massive damage at a certain range. Is a heavy duty firearm that is suitable for close combat.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/0/07/M134_minigun.png/revision/latest?cb=20211128023747"
  },
  {
    name: "Rocket Launcher/SMAW",
    bcCost: "1000",
    allowsDualWielding: false,
    description: "Has 3 rounds of explosives that travels slowly and explodes when it hits something within a certain distance.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/8/8e/Rocket_launcher_smaw.png/revision/latest?cb=20211128023825"
  },
  {
    name: "M93BA Anti-Materiel Sniper Rifle",
    bcCost: "1200",
    allowsDualWielding: false,
    description: "M93BA is a heavy-duty sniper rifle that inflicts impressive damage and can knock out opponents in one hit at a great distance with a headshot. Paired with its perfect accuracy, it is preferred by top players of this game.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/8/8f/Sniper.png/revision/latest?cb=20211128023908"
  },
  {
    name: "AA-20 Shotgun",
    bcCost: "200",
    allowsDualWielding: false,
    description: "Added v0.10.5, but as of 0.13.7 it was never used in any map whatsoever, but it can still be used with Loadouts, assuming the player has selected it, and/or is spawned with one. Has more range and faster rate of fire than the SPAS-12, but deals less damage.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/e/ec/AA-20.png/revision/latest?cb=20230222210042"
  },
  {
    name: "Riot Shield",
    bcCost: "1320",
    allowsDualWielding: true,
    description: "Used only in other hand (dual). Players move slower with a shield (every weapon affects movement), making them more vulnerable to grenades, explosions and flamethrowers. The shield is a good defense against snipers and bullet shooting weapons.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/c/cf/Shield.png/revision/latest?cb=20211128023941"
  },
  {
    name: "Saw Gun",
    bcCost: "__",
    allowsDualWielding: false,
    description: "Not available in loadouts. Only available in Catacombs and Cliffhanger maps. It fires a saw blade that can bounce off walls and pierces through opponents, and the saw blade itself explodes after a period of time. Similar to the EMP Gun & the Minigun, it takes few seconds for it to charge until it is launched.",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/7/71/SawGun.png/revision/latest?cb=20240624054037"
  }
];


export const thrownWeapons: ThrownWeapon[] = [
  {
    name: "Frag Grenades",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/7/7f/Frag_grenade.png/revision/latest?cb=20211128024241",
    description: "A regular grenade. Kills player/s in a range."
  },
  {
    name: "Gas Grenade",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/f/f3/Grenade_gas.png/revision/latest?cb=20211128024320",
    description: "A large area effect that kill players instantly."
  },
  {
    name: "EMP",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/e/ed/Grenade_emp.png/revision/latest?cb=20211128024359",
    description: "A large area effect that will disable rocket boots of anyone within range."
  },
  {
    name: "Proxy Mine",
    image: "https://static.wikia.nocookie.net/mini-militia-classic/images/a/a9/Proximity_mine.png/revision/latest?cb=20211128024434",
    description: "A timed grenade. When thrown, it will travel in a straight line and will explode assuming no obstacles are facing in its direction. If it hits a player, it explodes. It can attach to the terrain and is then armed for a few seconds. Anyone that gets within range of the armed mine will detonate it. An armed mine will eventually despawn (though it takes several minutes)."
  }
];
