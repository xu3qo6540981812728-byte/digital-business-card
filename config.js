// =======================================================================
// === 電子名片內容設定檔 ===
// =======================================================================
// 說明：
// 1. 這就是您的專屬「後台」，所有名片上的文字、圖片、連結都在這裡修改。
// 2. 修改時，請只修改引號 '' 或 `` 之間的內容。
// 3. 圖片連結建議使用相對路徑 (如果您將圖片和 index.html 放在一起) 或完整的 https:// 網址。
// =======================================================================

const config = {
    // --- 1. 個人資訊區 ---
    profile: {
        // 大頭貼圖片連結
        avatarURL: "https://cdn.linkgoods.com/user/6663f82a2dc0862002411d3b/avatar/68678f5f-3627-4031-af88-34d64e47c36e.jpeg", 
        // 頁面頂部的主要標題
        nickname: "桃園房仲專業顧問培智",
        // 您的姓名或品牌名稱
        name: "Page Li | 李培智",
        // 您的職稱或簡介 (使用 ` ` 可以換行)
        description: `Founder of Page Realty Insights
📌 嶺翔團隊教育總監｜第23屆金仲獎楷模
永慶不動產內壢忠孝吉富加盟店 副店長
專注洞察，用心成就家的夢想`,
        // 專業領域標籤
        tags: [
            "不動產", "房屋買賣", "房地產", "人才教育", "菁英訓練", 
            "招募", "金仲獎楷模", "桃園", "中壢", "房仲", "稅費試算"
        ],
        // 社群媒體連結
        socialLinks: [
            { icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61556947092890' },
            { icon: 'line', url: 'https://line.me/ti/p/ueNu_ueXaV' },
            { icon: 'blog', url: 'https://vocus.cc/salon/pagehouse' },
            { icon: 'threads', url: 'https://www.threads.net/@pagelee0201' },
            { icon: 'linkedin', url: 'https://www.linkedin.com/in/%E5%9F%B9%E6%99%BA-%E6%9D%8E-78172018a/' }
        ]
    },

    // --- 2. 內容區塊 ---
    // 這裡是您名片的主要內容，可以自由新增、刪除、排序各個區塊。
    // 支援的區塊類型 (type): 
    //   - 'links': 連結按鈕列表
    //   - 'gallery': 照片網格/輪播
    //   - 'videos': 影片列表
    //   - 'awards': 純文字獎項列表
    //   - 'map': 地圖
    //   - 'team': 團隊成員
    sections: [
        {
            type: 'links',
            title: '文章導讀',
            items: [
                { text: '如何幫您賣房子?', url: 'https://drive.google.com/file/d/1CAmfAKfJxQnfrvu9cs4r3jzat1vwmzJP/view?usp=sharing' },
                { text: '賣家攻略與進階稅務規劃', url: 'https://vocus.cc/salon/pagehouse/room/68aa92fe2b7cb426efab739d', icon: 'blog' },
                { text: '新手買家入門與基礎稅務概念', url: 'https://vocus.cc/salon/pagehouse/room/68aa92e02b7cb426efab739a', icon: 'blog' },
                { text: '👉 點我立即測試 <房仲新人16型人格測驗>', url: 'https://pagerealtyinsights.netlify.app/' },
                { text: '金仲獎新聞報導', url: 'https://www.ctee.com.tw/news/20240920701571-431206' },
                { text: '部落格 - Page Realty Insights', url: 'https://vocus.cc/salon/pagehouse' },
                { text: '關於我', url: 'https://vocus.cc/salon/pagehouse/about' },
                { text: '16型人格測驗解鎖你的房仲超能力', url: 'https://vocus.cc/article/68a2ab3efd897800017c0e4f' },
                { text: '從工程師到房仲：疫情下的轉職故事', url: 'https://vocus.cc/article/683d2414fd89780001b24b3e' },
                { text: '房仲業的PTSD：自我對話與容錯練習', url: 'https://vocus.cc/article/683fe0b1fd897800013ac8c7' }
            ]
        },
        {
            type: 'gallery',
            title: '無限行善小團體',
            subtitle: '取之於社會，用之於社會',
            layout: 'grid-layout-1', // 'grid-layout-1' 或 'grid-layout-2'
            images: [
                "https://cdn.linkgoods.com/product/685106cf46b2d4d31ebf9f75/active/146a3a9e-57f3-467c-a9fc-8250d2bd406e.jpeg",
                "https://cdn.linkgoods.com/product/685106cf46b2d4d31ebf9f75/active/a1e849f0-aa4b-4e77-898a-25a6303b5445.jpeg",
                "https://cdn.linkgoods.com/product/685106cf46b2d4d31ebf9f75/active/0cd9b711-f0b3-4fd9-a1c3-d27b10cf7ac9.jpeg",
                "https://cdn.linkgoods.com/product/685106cf46b2d4d31ebf9f75/active/11569f09-9350-4ce9-bce6-43a5eb464a74.jpeg"
            ],
            mainLink: { text: '【不是做善事，而是做想做的事】6月份捐物資', url: 'https://vocus.cc/article/685def2dfd897800010ff9c3' }
        },
        {
            type: 'gallery',
            title: '嶺翔團隊',
            subtitle: '用不動產的專業讓人們更幸福-大桃園專屬我的不動產資產管理師',
            layout: 'grid-layout-2',
            images: [
                "https://cdn.linkgoods.com/product/6665662ee43dd1459879ab2f/active/3b17d54b-a9f9-4a31-9af7-f18e87cf5e62.jpeg",
                "https://cdn.linkgoods.com/product/6665662ee43dd1459879ab2f/active/05a3a462-41b8-4fcd-973d-993183507eeb.jpeg",
                "https://cdn.linkgoods.com/product/6665662ee43dd1459879ab2f/active/cc83441f-d25e-43cc-88d9-df2a63d2ce6e.jpeg",
                "https://cdn.linkgoods.com/product/6665662ee43dd1459879ab2f/active/5f8f3f3d-03dd-45b0-a4c0-0801b617ca5d.jpeg",
                "https://cdn.linkgoods.com/product/6665662ee43dd1459879ab2f/active/cff167b0-3d19-421f-92d5-0e5396c12e63.jpeg"
            ]
        },
        {
            type: 'videos',
            title: '系列影片',
            items: [
                { videoId: '0srGMZwvjaA', title: '全新模式，顛覆你的想像' },
                { videoId: 'wvxsaZhZDP0', title: '我選擇了我要的生活方式，那你呢？' },
                { videoId: 'gRF5q0HeMsw', title: '運動會' },
                { videoId: 'IvOAwam-XdI', title: '3天2夜國內員工旅遊' }
            ]
        },
        {
            type: 'videos',
            title: '教育訓練',
            items: [
                { videoId: '0nmjGfdm5SU', title: '嶺翔團隊-教育前導' },
                { videoId: 'h0UzzxvGHUg', title: '菁英實戰訓練營0001期' },
                { videoId: 'gr8qU5Tq6dY', title: '菁英實戰訓練營0002期' }
            ]
        },
        {
            type: 'awards',
            title: '個人得獎紀錄',
            items: [
                { text: '🏆 112年第二季冒泡王', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 112年第二季百萬經紀人', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 112年第二季業績季軍', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 112年永慶不動產第二季績優', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 112年第三季冒泡王', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 112年第四季冒泡王', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 112年年度業績TOP7', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 113年第一季冒泡王', url: 'https://www.facebook.com/profile.php?id=100006007026184' },
                { text: '🏆 第二十三屆全國金仲獎楷模', url: 'https://www.facebook.com/profile.php?id=100006007026184' }
            ]
        },
        {
            type: 'map',
            title: '服務據點',
            address: '桃園市中壢區忠孝路39號', // Google Maps 會自動尋找這個地址
            joinUs: {
                imageURL: "https://cdn.linkgoods.com/product/68ac12e7cde6cb8a4927e38c/active/724b51ef-eb22-4e01-97d1-a0b28b3cabaf.png",
                link: { text: '加入我們', url: 'https://line.me/ti/p/ueNu_ueXaV' }
            }
        },
        {
            type: 'team',
            title: '菁英顧問推薦',
            // 我使用了您剛上傳的五張照片作為範例，您可以自行更換成正確的顧問照片和連結
            members: [
                { name: '葉欣宜', imageURL: 'https://storage.googleapis.com/gemini-prod-us-west1-409903542289-custom-code-files/1756169702650_0.jpg', url: 'https://line.me/ti/p/Q1zOYIrQ0n' },
                { name: '李志仁', imageURL: 'https://storage.googleapis.com/gemini-prod-us-west1-409903542289-custom-code-files/1756169740822_0.jpg', url: 'https://line.me/ti/p/JkV54lof0z' },
                { name: '劉懷懋', imageURL: 'https://storage.googleapis.com/gemini-prod-us-west1-409903542289-custom-code-files/1756169760105_0.jpg', url: 'https://line.me/ti/p/GjUP7nUZ_b' },
                { name: '林俊翔', imageURL: 'https://storage.googleapis.com/gemini-prod-us-west1-409903542289-custom-code-files/1756169803376_0.jpg', url: 'https://line.me/ti/p/WCh6HYEODX' }
            ]
        }
    ]
};
