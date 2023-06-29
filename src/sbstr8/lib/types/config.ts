import * as React from 'react';
import { Person } from './person';
import { MenuItem } from '@/sbstr8/lib/menu';
import { CardProps } from '@/sbstr8/components/card';
import { ClipboardButtonProps } from '@/sbstr8/components/clipboard-button';
import { ImageProps } from '@/sbstr8/components/image';
import { EmojiProps } from '@/sbstr8/components/emoji';
import { EssayProps } from '@/sbstr8/components/essay';
import { FigProps } from '@/sbstr8/components/fig';
import { GraphProps } from '@/sbstr8/components/graph';
import { GridProps } from '@/sbstr8/components/grid';
import { LedeProps } from '@/sbstr8/components/lede';
import { LedeListProps } from '@/sbstr8/components/lede-list';
import { LinkProps } from '@/sbstr8/components/link';
import { MdProps } from '@/sbstr8/components/md';
import { PreProps } from '@/sbstr8/components/pre';
import { PageHeaderProps } from '@/sbstr8/components/page/header';
import { BlurbProps } from '@/sbstr8/components/blurb';
import { FeatureProps } from '@/sbstr8/components/feature';
import { ReadMoreProps } from '@/sbstr8/components/read-more';
import { VideoProps } from '@/sbstr8/components/video';

export interface Config {
  owners: Person[];
  categories: string[];
  copyright: string;
  description: string;
  icon?: string;
  image?: string;
  language: string;
  link: string;
  postPath?: string; // URL segment, e.g. /posts
  feedPath?: string; // URL segment, e.g. /feed
  keywords: string[];
  title: string;
}

export interface Switchboard {
  Card: React.FunctionComponent<CardProps>;
  ClipboardButton: React.FunctionComponent<ClipboardButtonProps>;
  Emoji: React.FunctionComponent<EmojiProps>;
  Essay: React.FunctionComponent<EssayProps>;
  Fig: React.FunctionComponent<FigProps>;
  Graph: React.FunctionComponent<GraphProps>;
  Grid: React.FunctionComponent<GridProps>;
  Image: React.FunctionComponent<ImageProps>;
  Lede: React.FunctionComponent<LedeProps>;
  LedeList: React.FunctionComponent<LedeListProps>;
  Link: React.FunctionComponent<LinkProps>;
  Md: React.FunctionComponent<MdProps>;
  PageHeader: React.FunctionComponent<PageHeaderProps>;
  Pre: React.FunctionComponent<PreProps>;
  ReadMore: React.FunctionComponent<ReadMoreProps>;
  Blurb: React.FunctionComponent<BlurbProps>;
  Feature: React.FunctionComponent<FeatureProps>;
  Video: React.FunctionComponent<VideoProps>;
  menu: MenuItem[];
}

export type SwitchboardOverride = Partial<Switchboard>;
