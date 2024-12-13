export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Andrew Brauteseth',
    subtitle: 'Leader for the time being',
    description: 'Man is just hustling in the ZA world',
    image: {
        src: '/andrew.jpg',
        alt: 'Andrew Brauteseth portrait and a very cool picture'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/andrewbth/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/andrew_brauteseth/'
        },
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@andrewbrauteseth/'
        },
        {
            text: 'TikTok',
            href: 'https://tiktok.com/brauteseth/'
        },
        {
            text: 'Pinterest',
            href: 'https://www.pinterest.com/andrewbrauteseth/'
        },
        {
            text: 'Pinterest',
            href: 'https://www.pinterest.com/andrewbrauteseth/'
        }
    ],
    hero: {
        title: 'Howzit!',
        text: "Meet **Andrew Brauteseth**, a visionary South African leader and entrepreneur who is pioneering a new era of transparency, accountability, and community-driven innovation.",
        image: {
            src: '/Andrew_Brauteseth.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to the Brauteseth Newsletter',
        text: 'One update per month. All the thoughts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
