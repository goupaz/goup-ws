/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'goupaz';
export const BRAND_NAME = 'GOUP';
export const SITE_NAME_MULTILINE = ['GOUP', 'Events'];
export const SITE_NAME = 'GOUP Events';
export const META_DESCRIPTION =
  'Together we can do more.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'June 04, 2021';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/goupaz/goup-ws';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Home',
    route: '/stage/a'
  },
  {
    name: 'Techbrains',
    route: '/stage/c'
  },
  {
    name: 'kiss.conf',
    route: '/stage/m'
  },
  {
    name: '02hero',
    route: '/schedule'
  },
  {
    name: 'Gallery',
    route: '/expo'
  },

  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'News',
    route: '/expo'
  },
  {
    name: 'Playbooks',
    route: '/expo'
  },
  {
    name: 'Partners',
    route: '/jobs'
  },
  {
    name: 'About Us',
    route: '/jobs'
  },
  {
    name: 'Join Us',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
