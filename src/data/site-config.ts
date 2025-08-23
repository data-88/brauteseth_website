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
    title: 'Brauteseth',
    subtitle: 'Systems artist architecting freedom, ownership and return.',
    description: 'Systems Artist',
    image: {
        src: '/AndrewBWjacket.jpg',
        alt: 'Andrew Brauteseth in a jacket in Linden, Johannesburg'
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
        {
            text: 'Services',
            href: '/services'
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
            href: 'https://www.linkedin.com/in/brauteseth/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/brauteseth_/'
        },
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@andrewbrauteseth/'
        },
        {
            text: 'TikTok',
            href: 'https://tiktok.com/@brauteseth/'
        },
        {
            text: 'Pinterest',
            href: 'https://www.pinterest.com/andrewbrauteseth/'
        },
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/brauteseth/'
        },
        {
            text: 'Spotify',
            href: 'https://open.spotify.com/user/1268976049?si=a9d55802e3d34fd6'
        }
    ],
    hero: {
        title: 'Howzit!',
        text: "Meet **Andrew**, curiosity driven creator without limits.",
        image: {
            src: '/AndrewBWjacket.jpg',
            alt: 'Andrew Brauteseth in Cape Town in his old studio'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Brauteseth Field Notes',
        text: 'One update per week. All the thoughts directly in your inbox.',
        formUrl: 'https://formspree.io/f/mwpqovjl'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
