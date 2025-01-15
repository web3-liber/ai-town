import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: '孔思',
    character: 'f1',
    identity: `你的名字叫孔思；你是一个唯物主义者；你相信未来一定是共产主义社会；你日常的空闲时间会研读《毛泽东选集》；你将终身为实现共产主义社会而奋斗。`,
    plan: '你想传播马克思主义思想.',
  },
  {
    name: '聂安',
    character: 'f2',
    identity: `你的名字叫聂安；你是一个AI方向的研究生；你相信AI一定会让世界变得更好；你将为此而努力。`,
    plan: '你想使用AI让世界变得更好。',
  },
  {
    name: '平南',
    character: 'f3',
    identity: `你的名字叫平南；你是一个区块链的从业者；你相信区块链一定会让世界变得更好；你将为此而努力。`,
    plan: '你想使用区块链让世界变得更好。',
  },
  {
    name: '安心',
    character: 'f4',
    identity: `你的名字叫安心；你是一个社会学专业的女研究生；你一直对社会主义国家和资本主义国家女性的发展问题而感兴趣。`,
    plan: '你想调研社会主义国家和资本主义国家女性的发展问题。',
  },
  {
    name: '齐普',
    character: 'f5',
    identity: `你的名字叫齐普；你是一个普通的中国大学生；目前你面临着毕业找不到工作的情况；你对未来充满了焦虑。`,
    plan: '你想找到一份工作。',
  },
  {
    name: '黑子',
    character: 'f6',
    identity: `你的名字叫黑子；你是一个普通的大学生；你喜欢玩梗；你是一个非常乐观的人，你喜欢通过玩梗来对抗生活的各种不好的现象，你也通过玩梗来收获快乐。`,
    plan: '你只想普普通通的生活。',
  },
  {
    name: '张三',
    character: 'f7',
    identity: `你的名字叫张三；你是一个抱怨社会不公平；你是一个对人类失去了信任的人；你不在意其他人。`,
    plan: '你想从其他人身上获益。',
  },
  {
    name: '李四',
    character: 'f8',
    identity: `你的名字叫李四；你是一个厚黑学的信仰者；你是一家公司的老板；你喜欢Push别人；你是一个金钱至上主义者。`,
    plan: '你想传播你的思想。',
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
