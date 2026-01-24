export const COUNSELING_RESOURCES = [
    {
        id: 'intouch',
        name: 'InTouch Community Services',
        description: 'Quality mental health services including counseling, support groups, and professional training.',
        website: 'https://in-touch.org/',
        tags: ['counseling', 'support groups', 'professional training']
    },
    {
        id: 'dswd',
        name: 'Department of Social Welfare and Development (DSWD)',
        description: 'Crisis centers and 24/7 hotlines for victims of violence and those in crisis.',
        phones: [
            { label: 'Smart', number: '0943-4648026' },
            { label: 'Smart', number: '0943-4648086' },
            { label: 'Globe', number: '0995-7153926' },
            { label: 'Globe', number: '0995-7153934' }
        ],
        email: 'inquiry@dswd.gov.ph',
        tags: ['crisis center', 'government', 'hotline']
    },
    {
        id: 'lunas',
        name: 'Lunas Collective',
        description: 'A volunteer-powered care space for women and members and allies of the LGBTQIA+ community who have experienced gender-based violence or have sexual and reproductive health concerns.',
        chat: 'https://m.me/LunasCollective',
        website: 'https://lunascollective.org/contact/',
        note: 'Specifically for women and LGBTQIA+ community.',
        tags: ['GBV', 'LGBTQIA+', 'women', 'volunteer-powered']
    },
    {
        id: 'bantay-bata',
        name: 'Bantay Bata Helpline 163',
        description: 'Responds to reports of child abuse, exploitation, and neglect, and connects callers with appropriate agencies.',
        hotline: '163',
        note: 'Specialized for child abuse and exploitation.',
        tags: ['children', 'helpline', 'child protection']
    },
    {
        id: 'ncmh',
        name: 'National Center for Mental Health (NCMH) Crisis Line',
        description: '24/7 crisis hotline providing mental health support and intervention services.',
        hotline: '1-800-1888-1553',
        phones: [
            { label: 'Smart/TnT', number: '0919-057-1553' },
            { label: 'Globe/TM', number: '0917-899-8727' },
            { label: 'Globe/TM', number: '0966-351-4518' }
        ],
        tags: ['crisis', '24/7', 'intervention']
    },
    {
        id: 'tawag-paglaum',
        name: 'Tawag Paglaum - Centro Bisaya',
        description: 'A 24-hour, seven days a week call-based mental health helpline providing services in English and Filipino.',
        phones: [
            { label: 'Globe/TM', number: '0966-467-9626' },
            { label: 'Smart/Sun/TnT', number: '0939-936-5433' },
            { label: 'Smart/Sun/TnT', number: '0939-937-5433' }
        ],
        email: 'tawagpaglaumsb@gmail.com',
        tags: ['24/7', 'helpline', 'bilingual']
    },
    {
        id: 'rapha',
        name: 'Rapha Helpline',
        description: 'A safe world for children free from sexual abuse and exploitation. Free online mental health support services.',
        phones: [
            { label: 'Globe (M-F)', number: '0977-652-0230' }
        ],
        viber: '0961-718-2654 / 2655 / 2658',
        facebook: 'facebook.com/CPTCSA.org',
        tags: ['children', 'online support', 'free service']
    }
];
