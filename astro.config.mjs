import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CoDM DB Bot',
			social: {
				facebook: 'https://www.facebook.com/CoDMDB',
				twitter: 'https://x.com/CoDMDatabase',
				discord: 'https://discord.gg/3RrGsMhb37'
			},
			sidebar: [
				{
					label: 'Commands',
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Commands List', 
							link: '/commands/list' 
						},
						{ 
							label: 'Help', 
							link: '/commands/help' 
						},
						{ 
							label: 'Ping', 
							link: '/commands/ping' 
						},
						{ 
							label: 'Weapons', 
							link: '/commands/weapons' 
						},
						{ 
							label: 'Weapon', 
							link: '/commands/weapon' 
						},
						{ 
							label: 'Secondaries', 
							link: '/commands/secondaries' 
						},
						{
							label: 'Secondary',
							link: '/commands/secondary'
						},
						{
							label: 'Perks',
							link: '/commands/perks',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Perk',
							link: '/commands/perk',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Modes',
							link: '/commands/modes',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Maps',
							link: '/commands/maps',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Scorestreaks',
							link: '/commands/scorestreaks',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Operator Skills',
							link: '/commands/skills',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Operator Classes',
							link: '/commands/classes',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
						{
							label: 'Characters',
							link: '/commands/characters',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
					],
				},
				{
					label: 'Info',
					items: [
						{ 
							label: 'Changelog', 
							link: '/changelog' 
						},
						{ 
							label: 'Roadmap', 
							link: '/roadmap',
							badge: {
								text: 'Work In Progress',
								variant: 'caution',
							}
						},
						{ 
							label: 'Support & Feedback',
							link: 'https://discord.gg/3RrGsMhb37' 
						},
					],
				}
			],
		}),
	],
});
