# AI-TOWN-CHINESE

## 1. 汉化

### 1.1 人物身份，目标汉化

修改 data/characters.ts 文件，将角色的 identity 和 plan 翻译成中文。

### 1.2 记忆，对话相关的 Prompt 汉化

修改 convex/agent/memory.ts 和 convex/agent/conversation.ts 文件，将相关的Prompt 翻译成中文

### 1.3 Model

修改 convex/util/llm.ts 文件，将LLM 和 Embedding Model 修改成对中文支持比较好的模型
```ts
  chatModel: 'qwen2:7b' as const,
  embeddingModel: 'znbang/bge:large-zh-v1.5-q8_0',
```



## 2. Linux Installation

### 2.1 准备 Ollama 模型

```bash
ollama pull qwen2:7b  
ollama pull znbang/bge:large-zh-v1.5-q8\_0
```

### 2.2 下载代码并按照 npm 包

```bash
git clone git@github.com:Steven-Luo/ai-town-cn.git  
cd ai-town-cn  
npm install
```

### 2.3 启动 Convex 后端

```bash
sudo apt install just  

# 下载地址：https://github.com/get-convex/convex-backend/releases

# 解压缩  
unzip ./convex-local-backend-x86\_64-unknown-linux-gnu.zip  

# 增加执行权限  
chmod +x convex-local-backend  

# 运行Server  
./convex-local-backend  
```

### 2.4 清理之前的数据

1. 首先需要确保convex-local-backend处于运行状态

2. 如果是第一次运行，则不需要执行

```bash
just convex run testing:wipeAllTables  
```

3. 创建一个全新的世界

```bash
just convex run init  
```

### 2.5 启动服务

1. 设置背景音乐，创建一个Replicate (https://replicate.com/)账户，并在API Token页面创建一个token，下面这条命令可选

```bash
just convex env set REPLICATE\_API\_TOKEN <替换为自己的token>  
```

2. 修改package.json文件，修改 predev 字段。

```json
    "predev": "just convex dev --run init --until-success",
```

3. 启动前后端

```bash
npm run dev  
```

4. 如果需要监听所有网络，修改package.json文件，将dev:frontend的值，由vite 修改为vite --host