import { Switchboard } from '@/sbstr8/lib/types/config';
import { override } from '@/../sbstr8.config';
import Card from '@/sbstr8/components/card';
import ClipboardButton from '@/sbstr8/components/clipboard-button';
import Emoji from '@/sbstr8/components/emoji';
import Error from '@/sbstr8/components/error';
import Essay from '@/sbstr8/components/essay';
import Fig from '@/sbstr8/components/fig';
import Graph from '@/sbstr8/components/graph';
import Grid from '@/sbstr8/components/grid';
import Image from '@/sbstr8/components/image';
import Lede from '@/sbstr8/components/lede';
import LedeList from '@/sbstr8/components/lede-list';
import Link from '@/sbstr8/components/link';
import Loading from '@/sbstr8/components/loading';
import Md from '@/sbstr8/components/md';
import NotFound from '@/sbstr8/components/not-found';
import ReadMore from '@/sbstr8/components/read-more';
import Pre from '@/sbstr8/components/pre';
import PageHeader from '@/sbstr8/components/page/header';
import Slip from '@/sbstr8/components/slip';
import Station from '@/sbstr8/components/station';
import Video from '@/sbstr8/components/video';
import menu from '@/sbstr8/lib/menu';

export const defaults: Switchboard = {
  Card,
  ClipboardButton,
  Emoji,
  Error,
  Essay,
  Fig,
  Graph,
  Grid,
  Image,
  Lede,
  LedeList,
  Link,
  Loading,
  Md,
  NotFound,
  PageHeader,
  Pre,
  ReadMore,
  Slip,
  Station,
  Video,
  menu,
};
export default Object.assign({}, defaults, override);
