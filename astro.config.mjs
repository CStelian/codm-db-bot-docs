import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CoDM DB Bot Docs',
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
						{ label: 'Commands List', link: '/commands/list' },
						{ label: 'Help', link: '/commands/help' },
						{ label: 'Ping', link: '/commands/ping' },
						{ label: 'Weapons', link: '/commands/weapons' },
						{ label: 'Weapon', link: '/commands/weapon' },
						{ label: 'Secondaries', link: '/commands/secondaries' },
						{ label: 'Secondary', link: '/commands/secondary' },
					],
				},
			],
		}),
	],
});
