export const translations = {
  en: {
    nav: {
      top: "Top",
      works: "Works",
      profile: "Profile",
      contact: "Contact",
    },
    hero: {
      title: "Web Engineer",
      name: "Hikaru Gyoji",
      summary:
        "In April 2021, after I got a master's degree from the Tokyo University of Science, I joined SoftBank Corporation as an engineer and was in charge of operation and maintenance of the customer management system in the Integrated Core System Operation Section.",
      summary2:
        "In November 2021, I moved front-end engineer / designer. I handled the creation of portal sites for research institutions and the addition of functions to database search systems.",
      summary3:
        "Recently, I primarily work as a front-end engineer, but in personal projects, I also engage in backend development and AI development.",
    },
    works: {
      title: "Featured Works",
      viewDemo: "View Demo",
      viewGithub: "View Code",
      categories: {
        web: "Web",
        app: "App",
        illustration: "Illustration",
        design: "Design",
      },
      showMore: "Show More",
      showLess: "Show Less",
      projects: [
        // Web
        {
          title: "Nature Coffee",
          description: "Simple cafe website top page",
          image: "/portfolio/static/img/web/nature-coffee.png",
          skills: ["HTML", "CSS", "JavaScript"],
          demo: "https://hikarugyoji.github.io/work1/",
          category: "web",
        },
        {
          title: "FUTURE",
          description: "Small corporate website",
          image: "/portfolio/static/img/web/future.png",
          skills: ["HTML", "CSS", "JavaScript"],
          demo: "https://hikarugyoji.github.io/work2/",
          category: "web",
        },
        {
          title: "JDC",
          description: "Special website for the seminar",
          image: "/portfolio/static/img/web/jdc.png",
          skills: ["HTML", "CSS", "JavaScript"],
          demo: "https://hikarugyoji.github.io/work3/",
          category: "web",
        },
        {
          title: "GYM ENG",
          description: "Mobile-first coding",
          image: "/portfolio/static/img/web/gymeng.png",
          skills: ["HTML", "CSS", "JavaScript", "jQuery"],
          demo: "https://hikarugyoji.github.io/work4/",
          category: "web",
        },
        {
          title: "Special World",
          description: "Game Sites",
          image: "/portfolio/static/img/web/spaceworld.png",
          skills: ["HTML", "CSS", "JavaScript", "jQuery"],
          demo: "https://hikarugyoji.github.io/work5/",
          category: "web",
        },
        {
          title: "GYO DESIGN",
          description: "8-page corporate website",
          image: "/portfolio/static/img/web/gyo-design.png",
          skills: ["HTML", "CSS", "JavaScript", "jQuery"],
          demo: "https://hikarugyoji.github.io/work6/",
          category: "web",
        },
        // App
        {
          title: "Pocket Money TODO",
          description:
            "Pocket Money Todo is an app that lets you manage tasks while earning virtual pocket money based on your progress. It’s a fun way to stay motivated and achieve your goals!",
          image: "/portfolio/static/img/app/pocket_money_todo.png",
          skills: ["Flutter", "SQLite", "Riverpod"],
          demo: "/portfolio/static/img/app/pocket_money_todo.png",
          category: "app",
        },
        {
          title: "HIITer",
          description:
            "This app supports building a workout habit by incorporating HIIT (High-Intensity Interval Training) into your routine.",
          image: "/portfolio/static/img/app/hiiter.png",
          skills: ["React", "Next", "PWA"],
          demo: "https://www.makuake.com/project/hiiter/",
          category: "app",
        },
        {
          title: "News & Weather",
          description: "App to retrieve and display news and weather",
          image: "/portfolio/static/img/app/news.gif",
          skills: ["ReactNative"],
          demo: "/portfolio/static/img/app/news.gif",
          category: "app",
        },
        {
          title: "Search Movie",
          description: "App to search for movies and TV shows",
          image: "/portfolio/static/img/app/movie.gif",
          skills: ["ReactNative"],
          demo: "/portfolio/static/img/app/movie.gif",
          category: "app",
        },
        {
          title: "Memo App",
          description: "Simple memo app",
          image: "/portfolio/static/img/app/memoapp.gif",
          skills: ["ReactNative"],
          demo: "/portfolio/static/img/app/memoapp.gif",
          category: "app",
        },
        // Illustration
        {
          title: "Super Cute sea creatures",
          description:
            "These stickers are very cute sea creatures that can be used on the LINE app.",
          image: "/portfolio/static/img/sticker/sea-creature.png",
          skills: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
          demo: "https://store.line.me/stickershop/product/23031136/ja",
          category: "illustration",
        },
        {
          title: "Mikan",
          description: "Illustration of an orange that I somehow drew.",
          image: "/portfolio/static/img/illustration/mikan.png",
          skills: ["Adobe Illustrator"],
          demo: "/portfolio/static/img/illustration/mikan.png",
          category: "illustration",
        },
        // Design
        {
          title: "Business Card",
          description: "Personal Business Card",
          image: "/portfolio/static/img/design/business-card.png",
          skills: ["Adobe Photoshop", "Canva", "React"],
          demo: "https://hikarugyoji.github.io/business-card/",
          category: "design",
        },
        {
          title: "Business Card 2",
          description: "Personal Trainer's Business Card",
          image: "/portfolio/static/img/design/business-card-2.png",
          skills: ["Adobe Photoshop", "Canva", "React"],
          demo: "https://hikarugyoji.github.io/business-card-2/",
          category: "design",
        },
        {
          title: "Sutekina Camp",
          description: "Campground flyer design.",
          image: "/portfolio/static/img/design/sutekinacamp.png",
          skills: ["Adobe Photoshop", "Canva"],
          demo: "/portfolio/static/img/design/sutekinacamp.png",
          category: "design",
        },
        {
          title: "Uminoie",
          description: "Uminoie flyer design.",
          image: "/portfolio/static//img/design/uminoie.png",
          skills: ["Adobe Photoshop", "Canva"],
          demo: "/portfolio/static//img/design/uminoie.png",
          category: "design",
        },
      ],
    },
    profile: {
      title: "Profile",
      aboutMe: "About Me",
      aboutText:
        "I’m a Senior Frontend Engineer from Fukuoka, Japan, passionate about creating impactful web applications. I enjoy playing classical piano, taking walks, and exploring new ideas by building my own services. Traveling abroad inspires me, offering fresh perspectives and creativity. Always driven by curiosity, I aim to craft applications that make a difference.",
      skills: "Skills",
      timeline: "Timeline",
      timelineEvent: [
        {
          year: "2024",
          title: "Senior Frontend Engineer",
          description:
            "Developing applications tailored for scientists, focusing on intuitive interfaces and advanced data visualization",
        },
        {
          year: "2021 - 2023",
          title: "Frontend Engineer / Designer",
          description:
            "Designed and developed responsive web applications using React and TypeScript",
        },
        {
          year: "2021",
          title: "Infrastructure Engineer - SoftBank Corporation",
          description:
            "Managed and maintained customer management systems in the Integrated Core System Operation Section",
        },
        {
          year: "2021",
          title: "Master's Degree - Tokyo University of Science",
          description:
            "Conducted research on AI applications, focusing on computer vision",
        },
      ],
      certification: "Certifications",
      certifications: [
        {
          name: "Virtual Reality Specialist",
          issuer: "The Virtual Reality Society of Japan",
          year: "2017",
        },
        {
          name: "Japan Statistics Society Certificate Grade 2",
          issuer: "Japan Statistical Society Certificate",
          year: "2017",
        },
        {
          name: "Stanford University Machine Learning course on Coursera certificate",
          issuer: "Stanford University",
          year: "2018",
        },
        {
          name: "Senior Virtual Reality Specialist",
          issuer: "The Virtual Reality Society of Japan",
          year: "2018",
        },
        {
          name: "3rd grade Certified Skilled Worker of Financial Planning",
          issuer: "Kinzai Institute for Financial Affairs,Inc",
          year: "2018",
        },
        {
          name: "JUPA Japan Psychology Proficiency Test Grade 2",
          issuer: "Japanese Union of Psychological Associations",
          year: "2018",
        },
        {
          name: "JDLA Deep Learning for GENERAL",
          issuer: "Japan Deep Learning Association",
          year: "2020",
        },
        {
          name: "2nd grade Certified Skilled Worker of Web Design",
          issuer: "Association for Net Skills Promotion and Certification",
          year: "2022",
        },
        {
          name: "Shodan in Go Qualified",
          issuer: "The Nihon Ki-in",
          year: "2023",
        },
        {
          name: "Grade 1 in Go Qualified",
          issuer: "The Nihon Ki-in",
          year: "2023",
        },
        {
          name: "TOEIC Listening & Reading Score 815",
          issuer: "The Institute for International Business Communication",
          year: "2024",
        },
      ],
      showMore: "Show More",
      showLess: "Show Less",
    },
    contact: {
      title: "Get in Touch",
      info: "Contact Information",
      available: "Available for freelance projects",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
    },
  },
  ja: {
    nav: {
      top: "トップ",
      works: "制作実績",
      profile: "プロフィール",
      contact: "お問い合わせ",
    },
    hero: {
      title: "Webエンジニア",
      name: "行事 光",
      summary:
        "東京理科大学で修士号を取得し、2021年4月にソフトバンク株式会社にエンジニアとして入社、統合基幹システム運用課で顧客管理システムの運用保守を担当しました。",
      summary2:
        "2021年11月にフロントエンドエンジニア/デザイナーとして転職しました。現在は、研究機関向けのポータルサイトの構築やデータベース検索システムの機能追加などを担当しています。",

      summary3:
        "最近では、主にフロントエンドエンジニアとして活動していますが、個人開発ではバックエンドやAI開発にも取り組んでいます。",
    },
    works: {
      title: "制作実績",
      viewDemo: "デモを見る",
      viewGithub: "コードを見る",
      categories: {
        web: "ウェブ",
        app: "アプリ",
        illustration: "イラスト",
        design: "デザイン",
      },
      showMore: "もっと見る",
      showLess: "表示を減らす",

      projects: [
        // Web
        {
          title: "Nature Coffee",
          description: "シンプルなカフェのホームページ",
          image: "/portfolio/static/img/web/nature-coffee.png",
          skills: ["HTML", "CSS", "JavaScript"],
          demo: "https://hikarugyoji.github.io/work1/",
          category: "web",
        },
        {
          title: "FUTURE",
          description: "小規模な会社のホームページ",
          image: "/portfolio/static/img/web/future.png",
          skills: ["HTML", "CSS", "JavaScript"],
          demo: "https://hikarugyoji.github.io/work2/",
          category: "web",
        },
        {
          title: "JDC",
          description: "セミナー用のウェブサイト",
          image: "/portfolio/static/img/web/jdc.png",
          skills: ["HTML", "CSS", "JavaScript"],
          demo: "https://hikarugyoji.github.io/work3/",
          category: "web",
        },
        {
          title: "GYM ENG",
          description: "モバイルサイトにも対応したジムのホームページ",
          image: "/portfolio/static/img/web/gymeng.png",
          skills: ["HTML", "CSS", "JavaScript", "jQuery"],
          demo: "https://hikarugyoji.github.io/work4/",
          category: "web",
        },
        {
          title: "Special World",
          description: "ゲームサイト",
          image: "/portfolio/static/img/web/spaceworld.png",
          skills: ["HTML", "CSS", "JavaScript", "jQuery"],
          demo: "https://hikarugyoji.github.io/work5/",
          category: "web",
        },
        {
          title: "GYO DESIGN",
          description: "デザイン会社のホームページ",
          image: "/portfolio/static/img/web/gyo-design.png",
          skills: ["HTML", "CSS", "JavaScript", "jQuery"],
          demo: "https://hikarugyoji.github.io/work6/",
          category: "web",
        },
        // App
        {
          title: "おこづかい TODO",
          description:
            "Pocket Money Todoは、タスクを管理しながら達成度に応じて仮想のお小遣いを貯められるアプリです。楽しみながら目標達成をサポートします。",
          image: "/portfolio/static/img/app/pocket_money_todo.png",
          skills: ["Flutter", "SQLite", "Riverpod"],
          demo: "/portfolio/static/img/app/pocket_money_todo.png",
          category: "app",
        },
        {
          title: "HIITer",
          description:
            "このアプリは、HIIT（高強度インターバルトレーニング）を取り入れた運動の習慣化をサポートするアプリです。",
          image: "/portfolio/static/img/app/hiiter.png",
          skills: ["React", "Next"],
          demo: "https://www.makuake.com/project/hiiter/",
          category: "app",
        },
        {
          title: "ニュース & 天気",
          description: "ニュースと天気を表示するアプリ",
          image: "/portfolio/static/img/app/news.gif",
          skills: ["ReactNative"],
          demo: "/portfolio/static/img/app/news.gif",
          category: "app",
        },
        {
          title: "映画検索",
          description: "映画とテレビ番組を検索できるアプリ",
          image: "/portfolio/static/img/app/movie.gif",
          skills: ["ReactNative"],
          demo: "/portfolio/static/img/app/movie.gif",
          category: "app",
        },
        {
          title: "メモアプリ",
          description: "シンプルなメモアプリ",
          image: "/portfolio/static/img/app/memoapp.gif",
          skills: ["ReactNative"],
          demo: "/portfolio/static/img/app/memoapp.gif",
          category: "app",
        },
        // Illustration
        {
          title: "超可愛い海の生物",
          description: "超可愛い海の生物LINEスタンプ",
          image: "/portfolio/static/img/sticker/sea-creature.png",
          skills: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
          demo: "https://store.line.me/stickershop/product/23031136/ja",
          category: "illustration",
        },
        {
          title: "みかん",
          description: "なんとなく描いてみたみかん",
          image: "/portfolio/static/img/illustration/mikan.png",
          skills: ["Adobe Illustrator"],
          demo: "/portfolio/static/img/illustration/mikan.png",
          category: "illustration",
        },
        // Design
        {
          title: "個人名刺",
          description: "個人名刺",
          image: "/portfolio/static/img/design/business-card.png",
          skills: ["Adobe Photoshop", "Canva", "React"],
          demo: "https://hikarugyoji.github.io/business-card/",
          category: "design",
        },
        {
          title: "個人名刺2",
          description: "パーソナルトレーナーの個人名刺",
          image: "/portfolio/static/img/design/business-card-2.png",
          skills: ["Adobe Photoshop", "Canva", "React"],
          demo: "https://hikarugyoji.github.io/business-card-2/",
          category: "design",
        },
        {
          title: "素敵なキャンプ",
          description: "キャンプ場のチラシデザイン",
          image: "/portfolio/static/img/design/sutekinacamp.png",
          skills: ["Adobe Photoshop", "Canva"],
          demo: "/portfolio/static/img/design/sutekinacamp.png",
          category: "design",
        },
        {
          title: "海の家",
          description: "海の家のチラシデザイン",
          image: "/portfolio/static//img/design/uminoie.png",
          skills: ["Adobe Photoshop", "Canva"],
          demo: "/portfolio/static//img/design/uminoie.png",
          category: "design",
        },
      ],
    },
    profile: {
      title: "プロフィール",
      aboutMe: "自己紹介",
      aboutText:
        "福岡県出身のフロントエンドエンジニアです。趣味はクラシックピアノの演奏や散歩で、リフレッシュしながら新しいアイデアを考えるのが好きです。最近は自分のサービス作りに熱中しており、海外旅行で得た新しい視点や経験も創造性の源になっています。好奇心を大切にしながら、人々の生活をより良くするアプリケーションの開発に取り組んでいます。",
      skills: "スキル",
      timeline: "経歴",
      timelineEvent: [
        {
          year: "2024",
          title: "シニアフロントエンドエンジニア",
          description:
            "科学者向けのアプリケーションを開発。直感的なインターフェースと高度なデータ可視化に重点を置いています。",
        },
        {
          year: "2021 - 2023",
          title: "フロントエンドエンジニア / デザイナー",
          description:
            "ReactとTypeScriptを使用して、レスポンシブなWebアプリケーションを設計・開発。",
        },
        {
          year: "2021",
          title: "インフラエンジニア - ソフトバンク株式会社",
          description:
            "統合基幹システム運用部門で、顧客管理システムの運用・保守を担当しました。",
        },
        {
          year: "2021",
          title: "東京理科大学大学院 修了",
          description:
            "AIの応用に関する研究をしていました。主にコンピュータビジョン関連",
        },
      ],
      certification: "資格",
      certifications: [
        {
          name: "バーチャルリアリティ技術者",
          issuer: "日本バーチャルリアリティ学会",
          year: "2017",
        },
        {
          name: "統計検定2級",
          issuer: "日本統計学会公式認定",
          year: "2017",
        },
        {
          name: "スタンフォード大学機械学習コース（Coursera）修了",
          issuer: "スタンフォード大学",
          year: "2018",
        },
        {
          name: "上級バーチャルリアリティ技術者",
          issuer: "日本バーチャルリアリティ学会",
          year: "2018",
        },
        {
          name: "3級ファイナンシャル・プランニング技能士",
          issuer: "一般社団法人 金融財政事情研究会",
          year: "2018",
        },
        {
          name: "心理学検定 ２級",
          issuer: "日本心理学諸各会連合",
          year: "2018",
        },
        {
          name: "G検定",
          issuer: "一般社団法人日本ディープラーニング協会",
          year: "2020",
        },
        {
          name: "ウェブデザイン検定2級",
          issuer: "インターネットスキル認定普及協会",
          year: "2022",
        },
        {
          name: "囲碁初段",
          issuer: "日本棋院",
          year: "2023",
        },
        {
          name: "囲碁1級",
          issuer: "日本棋院",
          year: "2023",
        },
        {
          name: "TOEIC Listening & Reading 815点",
          issuer: "The Institute for International Business Communication",
          year: "2024",
        },
      ],
      showMore: "もっと見る",
      showLess: "表示を減らす",
    },
    contact: {
      title: "お問い合わせ",
      info: "連絡先情報",
      available: "フリーランスプロジェクト募集中",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信する",
      sending: "送信中...",
    },
  },
};
