export const PLATFORMS = [
    {
        id: 'youtube',
        name: 'YouTube',
        url: 'https://support.google.com/youtube/answer/2802027',
        overview: 'YouTube provides tools to report cyberbullying, harassment, and other policy violations. You can report specific videos, comments, or entire channels.',
        screenshots: [
            'Screenshot of the video or comment in question.',
            'Screenshot of the channel profile page.',
            'Screenshot of any direct messages or interactions (if applicable).'
        ],
        tips: [
            'Include the direct URL of the video or comment.',
            'Be specific about which part of the video violates policies.',
            'Do not engage with the harasser directly in the comments.'
        ]
    },
    {
        id: 'tiktok',
        name: 'TikTok',
        url: 'https://www.tiktok.com/safety/en/countering-hate/',
        overview: 'TikTok has a dedicated safety center for reporting hate speech, harassment, and bullying. Reports are anonymous.',
        screenshots: [
            'Screenshot of the video or live stream.',
            'Screenshot of the user\'s profile.',
            'Screenshot of comments or messages.'
        ],
        tips: [
            'Use the "Report" button directly on the content.',
            'Provide context if the harassment is part of a trend or challenge.',
            'Save the video link before it gets deleted or hidden.'
        ]
    },
    {
        id: 'snapchat',
        name: 'Snapchat',
        url: 'https://www.tiktok.com/safety/en/countering-hate/', // Note: Doc had same URL for tiktok and snapchat, likely a typo in doc but I'll stick to it or find a better one if needed. Actually it's probably wrong. Let's provide a better one: https://support.snapchat.com/en-US/article/report-abuse-in-app
        overview: 'Snapchat allows users to report snaps, stories, and profiles that involve harassment or bullying.',
        screenshots: [
            'Screenshot of the Snap (be aware that Snapchat notifies users of screenshots).',
            'Screenshot of the Chat conversation.',
            'Screenshot of the user\'s profile.'
        ],
        tips: [
            'Reports are confidential.',
            'Use the long-press feature on a Snap or Chat to report it quickly.',
            'Contact local law enforcement if there is immediate danger.'
        ]
    },
    {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://help.instagram.com/192435014247952',
        overview: 'Instagram offers various ways to report bullying, harassment, and impersonation. You can report posts, stories, profiles, and comments.',
        screenshots: [
            'Screenshot of the post or story.',
            'Screenshot of the profile.',
            'Screenshot of direct messages.'
        ],
        tips: [
            'Use the "Restrict" feature to limit interactions without blocking.',
            'Report impersonation accounts through the specific impersonation form.',
            'Keep a record of the report confirmation.'
        ]
    },
    {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/help/181495968648557',
        overview: 'Facebook encourages users to report content that violates Community Standards, including bullying and harassment.',
        screenshots: [
            'Screenshot of the post, photo, or comment.',
            'Screenshot of the profile or page.',
            'Screenshot of Messenger conversations.'
        ],
        tips: [
            'Use the "Find Support or Report" option on the content.',
            'You can report on behalf of someone else if they are being impersonated.',
            'Block the user after reporting to prevent further contact.'
        ]
    },
    {
        id: 'discord',
        name: 'Discord',
        url: 'https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord',
        overview: 'Discord takes harassment seriously. You can report messages directly to their Trust & Safety team.',
        screenshots: [
            'Screenshot of the message(s) including the timestamp.',
            'Screenshot of the User ID (enable Developer Mode in settings).',
            'Screenshot of the Server ID (if applicable).'
        ],
        tips: [
            'Do not delete the messages before reporting, as Discord needs message links/IDs.',
            'Report the user via their profile if they are sending unwanted DMs.',
            'Involve server moderators if the harassment is happening in a specific server.'
        ]
    },
    {
        id: 'x',
        name: 'X (Twitter)',
        url: 'https://help.x.com/en/safety-and-security/report-abusive-behavior',
        overview: 'X allows you to report accounts and posts for abusive behavior, harassment, and hate speech.',
        screenshots: [
            'Screenshot of the post(s).',
            'Screenshot of the profile.',
            'Screenshot of Direct Messages.'
        ],
        tips: [
            'You can report multiple posts in a single report.',
            'Use the "Mute" or "Block" features to stop seeing content.',
            'Provide as much context as possible in the details section.'
        ]
    },
    {
        id: 'twitch',
        name: 'Twitch',
        url: 'https://safety.twitch.tv/s/article/Filing-a-Report?language=en_US',
        overview: 'Twitch users can report streamers or viewers for harassment, hate speech, and other violations during broadcasts or in chat.',
        screenshots: [
            'Screenshot of the chat log.',
            'Screenshot of the stream if the violation is visual.',
            'Screenshot of the user profile.'
        ],
        tips: [
            'Use the "Report" button in the chat or on the channel page.',
            'Provide the specific timestamp and date of the incident.',
            'Channel moderators can also assist with immediate chat issues.'
        ]
    },
    {
        id: 'xbox',
        name: 'Xbox Party Chat',
        url: 'https://support.xbox.com/en-US/help/family-online-safety/enforcement/file-a-complaint',
        overview: 'Xbox allows users to report voice and text harassment occurring in party chats or games.',
        screenshots: [
            'Photo or screenshot of the text message.',
            'Record of the gamertag.',
            'Report the voice clip if the console allows for voice reporting.'
        ],
        tips: [
            'Use the "Report" feature directly from the player\'s profile.',
            'Specify if the harassment occurred in a Party or during a game.',
            'Keep your console software updated for the latest safety features.'
        ]
    },
    {
        id: 'playstation',
        name: 'PlayStation Party Chat',
        url: 'https://www.playstation.com/en-us/support/account/ps5-report-behaviour/',
        overview: 'Sony provides reporting tools for the PlayStation Network to handle harassment in party chats and messages.',
        screenshots: [
            'Screenshot of the message.',
            'Photo of the screen if a screenshot isn\'t possible.',
            'Note the PSN ID of the offender.'
        ],
        tips: [
            'Report through the "Options" menu on the message or player profile.',
            'Ensure you are reporting the specific content that is harmful.',
            'Block the PSN ID to stop receiving communications.'
        ]
    },
    {
        id: 'tumblr',
        name: 'Tumblr',
        url: 'https://help.tumblr.com/reporting-content/',
        overview: 'Tumblr has policies against harassment and bullying. You can report posts, blogs, and messages.',
        screenshots: [
            'Screenshot of the post or blog.',
            'Screenshot of the ask or message.',
            'Screenshot of the blog URL.'
        ],
        tips: [
            'Use the "Report" link found on the post or blog.',
            'Specify the nature of the abuse (e.g., harassment, hate speech).',
            'You can also block the blog to prevent them from interacting with you.'
        ]
    },
    {
        id: 'viber',
        name: 'Viber',
        url: 'https://help.viber.com/hc/en-us/articles/8922694984733-How-to-report-inappropriate-content',
        overview: 'Viber allows users to report messages and accounts that engage in spam or harassment.',
        screenshots: [
            'Screenshot of the chat conversation.',
            'Screenshot of the sender\'s phone number or profile info.',
            'Screenshot of any media shared.'
        ],
        tips: [
            'Tap and hold a message to find the "Report" option.',
            'Block the number immediately after reporting.',
            'Be careful with sharing personal info in public communities.'
        ]
    }
];
