export default function Session(){
    const datas = [
        {
            date: "2024 年 8 月 29 日（星期四）14:20-15:40",
            children: [
                {
                    id: "A1",
                    title: "最佳論文獎",
                    children: [
                        {
                            author: "Chun-Tsai Chien and Sying-Jyan Wang",
                            title: "Adopts Secret-Hashing Technology based on AES Round-Keys to Increase Complexity to Resist Side-Channel Attacks"
                        },
                        {
                            author: "王仁甫、許世璋、張書睿",
                            title: "非價格競爭的異質寡占廠商間的資訊安全情資共享關鍵因素分析"
                        },
                        {
                            author: "Chia-Mei Chen, Sun-Jie Zhang, Zheng-Xun Cai, Ya-Hui Ou and Lai Gu-Hsin",
                            title: "運用自然語言處理挖掘新興網路威脅情資"
                        },
                        {
                            author: "Nai-Wei Lo, Jheng-Jia Huang, Yan-Yu Nian, Jui Wang and Ya-Jhu Liang",
                            title: "於車聯網環境中具韌性保障且輕量之安全通訊傳輸協定"
                        },
                        {
                            author: "Jheng-Jia Huang, Yung-Yi Lin, Wei-Hsueh Wang and Sin-Yu Pan",
                            title: "Methods to improve NB-IoT device access security and efficiency  in 5G environment: solutions based on single sign-on and key escrow"
                        },
                        {
                            author: "Ruei-Hau Hsu and Kuan-Lin Chen",
                            title: "Assessing Integrity Protection for 5G User Plane: Uncovering Potential Vulnerability Through Collision Attacks"
                        }
                    ]
                },
                {
                    id: "B1",
                    title: "學生論文獎",
                    children: [
                        {
                            author: "Hong-Sheng Huang, Hsuan-Tung Chen and Hung-Min Sun",
                            title: "An Enhanced Online Certificate Status Protocol for Public Key Infrastructure with Smart Grid and Energy Storage System"
                        },
                        {
                            author: "張博鈞、廖元勳、李曉慧",
                            title: "基於聲音傳輸與Grover量子搜尋演算法的安全通信方法研究"
                        },
                        {
                            author: "章世雄、洪晟峰、鄭欣明",
                            title: "在 O-RAN 環境中實現 F1AP 協定的一致性檢測"
                        },
                        {
                            author: "Kai-Jung Chen and Chun-Ying Huang",
                            title: "網路通訊協定的測試與工具改良"
                        },
                        {
                            author: "Hong Bo Chen and Chinyang Henry Tseng",
                            title: "基於對比學習用於入侵偵測模型"
                        },
                        {
                            author: "楊舒蓁、羅嘉寧、楊明豪",
                            title: "EMV網路交易之使用者FIDO身分驗證設計與改良"
                        }
                    ]
                },
                {
                    id: "C1",
                    title: "軟體安全",
                    children: [
                        {
                            author: "吳俊漳、鄭欣明",
                            title: "透過上下文推斷的間接調用函數呼叫圖輔助的靜態分析"
                        },
                        {
                            author: "Jian-Syue Huang, Tsung-Han Liu, Yi-Hsien Chen, Chin-Laung Lei and Chun-Ying Huang",
                            title: "在 Hypervisor 保護檔案系統免受勒索軟體攻擊的方法"
                        },
                        {
                            author: "林孝忠、林文暉、王平、林郁翔",
                            title: "惡意程式偵測使用圖注意力網路"
                        },
                        {
                            author: "Jiun-Wei Su, Gao-Yu Lin, Shin-Ming Cheng and Hahn-Ming Lee",
                            title: "透過函數呼叫圖結合邊標記與注意力網路來提升物聯網惡意軟體檢測的可解釋性"
                        },
                        {
                            author: "Liang-Yu Ho, Gao-Yu Lin, Hahn-Ming Lee and Shin-Ming Cheng",
                            title: "在黑箱情境下透過替代模型揭露惡意軟體檢測器的特徵"
                        },
                        {
                            author: "Wei-Cheng Kang, Gao-Yu Lin, Hahn-Ming Lee and Shin-Ming Cheng",
                            title: "通過基於無約束優化的資料增強方法提升對變體的物聯網惡意軟體檢測的穩健性"
                        }
                    ]
                },
                {
                    id: "D1",
                    title: "閃電講",
                    children: [
                        {
                            author: "林有康、林筠庭、饒文婷、蔡淵裕",
                            title: "應用秘密分享於支援多訊息嵌入者之加密高動態範圍影像可回復式資訊隱藏技術"
                        },
                        {
                            author: "Ko-Han Chiu, An-Ting Chao, Po-Wen Chi and Ming-Hung Wang",
                            title: "MUTED: Machine Unlearning based on Trapdoors Equipped with a Distillator"
                        },
                        {
                            author: "張尊傑、賴俊鳴、李佳叡",
                            title: "Optimizing Security Awareness Training with  Language Model Techniques"
                        },
                        {
                            author: "羅乃維、吳竣宇、陳軍翰、張智傑",
                            title: "結合機器學習且基於風險概念的使用者異常檢測"
                        },
                        {
                            author: "Yi-Wen Huang, You-Ming Bai, Wan-Xuan Wu, Bo-Rui Guo and Yi-Ming Lin",
                            title: "使用語言模型於威脅報告之事件提取技術"
                        },
                        {
                            author: "趙奕勛、謝欽旭、林志學、郭宇軒、繆德澤",
                            title: "以重構誤差與孤立森林偵測未知分散式阻斷服務攻擊"
                        },
                        {
                            author: "林于翔、謝欽旭、洪盟峰、郭敦詠",
                            title: "採行增強型自動編碼器和長短期記憶網路的惡意流量偵測技術 以IEC-61850網路為例 A New Approach based on Enhanced Autoencoder and LSTM to Intrusion Detection in IEC-61850 Networks"
                        },
                        {
                            author: "張世豪、黃凱勵、周永仕、范少嘉、侯昱言 ",
                            title: "基於零信任架構的身分認證調查"
                        },
                        {
                            author: "Jung-Hsuan Wu and Ruei-Hau Hsu",
                            title: "Data Reconstruction Attack by Deep Leakage from Gradients in Federated Learning of Language Models"
                        }
                    ]
                },
            ]
        },
        {
            date: "2024 年 8 月 29 日（星期四）16:00-17:30",
            children: [
                {
                    id: "A2",
                    title: "密碼學",
                    children: [
                        {
                            author: "Zih-Sin Huang, Chung-Ming Chang, Yao-Cheng Kuo, Cheng-Han Shie, Kai-Him Lam and Chun-I Fan",
                            title: "基於屬性加密實現零信任中資源存取控制架構"
                        },
                        {
                            author: "簡敦佑、李映薇、張語軒、黃賀軍、Yi-Fan Tseng",
                            title: "基於 Falcon 之安全身份簽章機制"
                        },
                        {
                            author: "何建茂、陳沅寬、黃賀軍、張語軒、Yi-Fan Tseng",
                            title: "後量子安全一次性簽章與 Full-Rank 編碼函數實作"
                        },
                        {
                            author: "鄭家鴻、鄭錦楸",
                            title: "基於 R-LWE 的 n 選 t 模糊傳輸協定"
                        },
                        {
                            author: "魏巍、郭崇韋、洪宇義、林駿璋、劉嘉瑞、吳承軒、莊恆豪",
                            title: "應用跳動金鑰加密機制抵抗 IoT 裝置的旁通道攻擊"
                        },
                        {
                            author: "劉姿妙、黃玉枝、郭文中",
                            title: "提升安全性之改良 Playfair 加密技術"
                        }
                    ]
                },
                {
                    id: "B2",
                    title: "網路安全",
                    children: [
                        {
                            author: "An Tong Shih, Hung-Yu Chien and Yuh-Ming Huang",
                            title: "Mosquitto MQTT客製化安全機制開發"
                        },
                        {
                            author: "吳季馨、洪晟峰、鄭欣明",
                            title: "一種新的中間人攻擊框架：使網路智能控制器與開放式基地台換手決策衝突以降低網路吞吐量"
                        },
                        {
                            author: "Hsuan-Yu Peng, Tse-Wei Huang and Chun-Ying Huang",
                            title: "Pyllow：最小化基於路由網頁後端框架之攻擊面"
                        },
                        {
                            author: "曾文彥、鄭欣明",
                            title: "自動化物聯網韌體模擬框架的硬體架構擴展與應用"
                        },
                        {
                            author: "Xuan-Ren Hsu and Shin-Ming Cheng",
                            title: "無人機系統之自動化通訊驗證框架"
                        },
                        {
                            author: "魏銪志、陳韋堯",
                            title: "運用遺傳演算法在網路安全實作練習舞弊偵測之研究"
                        }
                    ]
                },
                {
                    id: "C2",
                    title: "資安檢測",
                    children: [
                        {
                            author: "Huai-Sheng Ku, Yu-Cheng Chiang, Chia-Hsiu Huang, Albert Guan and Po-Wen Chi",
                            title: "APT Detection Preprocessing: Configure Auditd and Extract User Behavior"
                        },
                        {
                            author: "高瑋哲、陳彥嘉、黃俊穎",
                            title: "可擴充低功耗藍牙模糊測試框架"
                        },
                        {
                            author: "Nan-Jung Huang, Ching-Hung Chen and Shih-Kun Huang",
                            title: "Test Harness for Fuzzing Windows Defender"
                        },
                        {
                            author: "Chia-Wei Tsai, Chun-Wei Yang, I-Hsin Hung and Yao-Chung Chang",
                            title: "Anomaly-based Intrusion Detection Model Using a Semi-Supervised Learning Strategy for Industrial Control Systems in Water Tank Management"
                        },
                        {
                            author: "王柏鈞、鄭欣明",
                            title: "利用網頁服務資料傳遞功能引導污點分析檢測物聯網漏洞"
                        },
                        {
                            author: "Xin-Ye Jiang and Chun-Ying Huang",
                            title: "對5G核心網路進行覆蓋率引導灰箱模糊測試"
                        },
                        {
                            author: "王紹睿、陳冠霖、黃竣揮、廖元揚",
                            title: "基於自然語言處理及對抗式學習的惡意憑證偵測"
                        }
                    ]
                },
                {
                    id: "D2",
                    title: "閃電講",
                    children: [
                        {
                            author: "簡春在、戴偉峻、鍾松剛",
                            title: "功率分群洩漏分析 (Power Grouping Leakage Analysis : PGLA)"
                        },
                        {
                            author: "李佳叡、賴俊鳴、張尊傑",
                            title: "Blockchain-based Time Banking System: Enabling Senior Mutual Aid in Long-Term Care Organizations with Hyperledger Fabric"
                        },
                        {
                            author: "Ying-Ren Guo, Yi-Ting Huang and Meng Chang Chen",
                            title: "Synthetic Audit Logs as Traces of APT Campaigns"
                        },
                        {
                            author: "Yi-Hsiang Lin and Hsu-Chun Hsiao",
                            title: "運用網路流群組化資訊之進階型分散式阻斷服務攻擊防護機制"
                        },
                        {
                            author: "Yu Han Kung and Chun-Ming Lai",
                            title: "探討墮胎迷因的立場與解析方法：現況、挑戰與改進策略"
                        },
                        {
                            author: "張桓齊、謝宗辰、張國洋、陳昱圻",
                            title: "基於總和檢查證明協定與多項式近似法的隱私強化負債證明"
                        },
                        {
                            author: "劉又升、葉文健、戴文諺、黃政嘉",
                            title: "應用於車聯網環境中之批量驗證演算法"
                        },
                        {
                            author: "Isaac Lee, Shih Wei Liao and Jiu-Yi Chen",
                            title: "從 2024 CrowdStrike 事件探討軟體供應鏈安全強化"
                        },
                        {
                            author: "Isaac Lee, Shih-Wei Liao and Jiu-Yi Chen",
                            title: "從金管會2024最新參考指引談企業零信任實施方向"
                        }
                    ]
                },
            ]
        },
        {
            date: "2024 年 8 月 30 日（星期五）13:00-14:30",
            children: [
                {
                    id: "A3",
                    title: "區塊鏈",
                    children: [
                        {
                            author: "洪嘉均、林宜隆、江義淵",
                            title: "區塊鏈技術之安全應用於台灣司法聯盟鏈之探討-以ISO/IEC27050為例"
                        },
                        {
                            author: "林輝堂、楊皓荏",
                            title: "在開放式無線接取網路架構中利用區塊鏈實現基於PUF的雙重認證和金鑰協商方案"
                        },
                        {
                            author: "Wei-Dan Siao and Yun-Hsin Chuang",
                            title: "使用聯盟鏈改善臺灣職業安全衛生管理系統"
                        },
                        {
                            author: "Chun Ning Adrian Sham, Ka Fai Felix Hung and Shih-Wei Liao",
                            title: "Design and Analysis of a Secured Token-Bound Account"
                        },
                        {
                            author: "Chun-Yeh Chen and Yun-Hsin Chuang",
                            title: "Designing a Blockchain-Based Large-Scale E-Voting System"
                        },
                        {
                            author: "李佳叡、賴俊鳴、張尊傑",
                            title: "Blockchain-based Time Banking System: Enabling Senior Mutual Aid in Long-Term Care Organizations with Hyperledger Fabric"
                        }
                    ]
                },
                {
                    id: "B3",
                    title: "AI 安全與情資",
                    children: [
                        {
                            author: "Kuan-Chih Tseng, Iuon-Chang Lin, Yun-Yi Fan and Jung-San Lee",
                            title: "應用 GAN 於增強對抗式模糊攻擊流量之車載資料集"
                        },
                        {
                            author: "Chorng-Ming Chen and I-Long Lin",
                            title: "防護式可信賴生成式 AI 框架初探"
                        },
                        {
                            author: "王玟雅、蔡婷玗、陳俞縕、毛世鑫、王偉學、戴文諺、黃政嘉",
                            title: "應用音訊浮水印於對抗式攻擊與深度學習之數位護聲符系統"
                        },
                        {
                            author: "Chung Jui Lai, Da Yu Kao and Ray Lin Tso",
                            title: "Exploring and Implementing Cybersecurity Posture from Taiwan Cybersecurity Maturity Model"
                        },
                        {
                            author: "林玉山、林宜隆、陳景亮",
                            title: "運用機器學習進行威脅情資探勘與實作驗證之研究"
                        },
                        {
                            author: "Hsuan-Cheng Su and Ruei-Hau Hsu",
                            title: "Secure Collaborative Decision Tree Evaluation"
                        }
                    ]
                },
                {
                    id: "C3",
                    title: "零信任與身份認證",
                    children: [
                        {
                            author: "Chien Chang Wu and Shiang-Jiun Chen",
                            title: "The Convergence of FIDO2 and Zero Trust: A Comprehensive Approach to Enterprise Security"
                        },
                        {
                            author: "Isaac Lee and Shih Wei Liao",
                            title: "從美國零信任戰略規劃談我國零信任架構實施方向"
                        },
                        {
                            author: "楊舒蓁、羅嘉寧、楊明豪",
                            title: "EMV網路交易之使用者FIDO身分驗證設計與改良"
                        },
                        {
                            author: "周兆龍、朱秉聰、劉得民、呂理哲",
                            title: "基於滑鼠動力學之輕量級行為特徵身份認證"
                        },
                        {
                            author: "李添福、郭采羚",
                            title: "適用於物聯網基於PUF與區塊鏈的身份認證協定之效能和安全分析與其改善"
                        },
                        {
                            author: "Jheng-Jia Huang, I-Cheng Lee, Guan-Yu Chen and Wei-Je Yu",
                            title: "Property-Backed Repurchase NFT Trading Framework to Enhance Art Investment"
                        }
                    ]
                },
                {
                    id: "D3",
                    title: "閃電講",
                    children: [
                        {
                            author: "Chun-Chieh Tsai, Shih-Hsuan Yang and Chin-Yu Sun",
                            title: "含加權要項可驗證分散式聚合函數之低隱私預算差分隱私方案"
                        },
                        {
                            author: "蔡國裕、林子煒、尤婕蓉、林玟欣",
                            title: "適用於雲端資料保護之基於網格密碼學屬性加密協定"
                        },
                        {
                            author: "Han-Yu Lin, Tung-Tso Tsai, Jing-Yu Hsu and Han-Sheng Chen",
                            title: "A Pairing-Free Revocable Certificateless Multi-Signature Scheme for Wireless Sensor Networks"
                        },
                        {
                            author: "葉宥君、林韓禹、蔡東佐、陳昱圻",
                            title: "Leakage-Resilient Certificate-Based Signcryption with Equality Test"
                        },
                        {
                            author: "Hong-Sheng Huang and Hung-Min Sun",
                            title: "Multiplication Strong Logic Locking for NTRU Hardware Scheme"
                        },
                        {
                            author: "Jheng-Jia Huang, Nai-Wei Lo, Guan-Yu Chen, Hau-Hsiang Chang Chien, Chi Wei Chen and Yung-Yi Lin",
                            title: "Efficient Multi-Certificate Issuance and Batch Verification in the Internet of Vehicles"
                        },
                        {
                            author: "賴宗賢、廖酉詳、張君瑋、陳昱圻",
                            title: "基於協作式零知識證明驗證聯邦學習資源分配與資料擁有者可靠度之保有隱私應用"
                        },
                        {
                            author: "林姵妏、顏薪展、洪章景、陳昱圻",
                            title: "利用 Blaze 私密分享框架實現保有隱私授權神經網路訓練"
                        },
                        {
                            author: "張廷宇、黃志翔、張震凡、陳昱圻",
                            title: "利用零知識證明有效率驗證近鄰演算法執行與模型隱私保護"
                        },
                        {
                            author: "顏薪展、陳昱圻、左聖馨、蔡東佐",
                            title: "基於雙雲結構的隱私保護主成份分析：利用私密分享法保護共變數矩陣"
                        }
                    ]
                },
            ]
        },
        {
            date: "2024 年 8 月 30 日（星期五）15:50-17:10",
            children: [
                {
                    id: "A4",
                    title: "關鍵基礎建設",
                    children: [
                        {
                            author: "林宗德、林敬皇",
                            title: "探討欺敵技術應用在醫療生態系統中的有效性及挑戰"
                        },
                        {
                            author: "賴羿瑄、林敬皇",
                            title: "醫療機構應用 HITRUST CSF 與資通安全管理法之分析"
                        },
                        {
                            author: "林子煒、蔡國裕、郭崇韋、林玟欣、李品臻、梁瑋宸、黃千芸、范秩嘉、陳宣廷、王富貴",
                            title: "設計與建置利用開源結合 AI 之校園資安監測平台 -以臺灣中部某大學為例"
                        },
                        {
                            author: "Yen-Chun Shen, Yun-Yi Fan and Jung-San Lee",
                            title: "模擬真實攻防演練以驗證臺灣高等教育場域之資安防護能力"
                        },
                        {
                            author: "Yi-Jia Chen and Hsu-Chun Hsiao",
                            title: "政府 Android 應用程式的網路安全"
                        },
                        {
                            author: "張世豪、陸紀霖、姜秉均、陳旻妤、蔡駿榤",
                            title: "使用聯邦式學習架構來提升低軌衛星系統安全與效率"
                        }
                    ]
                },
                {
                    id: "B4",
                    title: "多媒體安全",
                    children: [
                        {
                            author: "Tzu-Shan Chang, Kai-Hsiang Chang, Ruei-Jhong Hsu, Ming-Feng Tsai, Zi-Pin Luo and Chun-I Fan",
                            title: "基於影像辨識模型之安全測試平台"
                        },
                        {
                            author: "潘佑宗、蘇冠忠、洪維恩",
                            title: "優化位元流長度之三元表示 AMBTC 壓縮影像編碼方案"
                        },
                        {
                            author: "楊政興、Chi-Yao Weng、洪嘉伶、黃柏翰",
                            title: "Reversible data hiding scheme in encrypted images based on grouping encoding for improving embedding payload"
                        },
                        {
                            author: "張佳慧、蘇冠忠、洪維恩、陳珈儀",
                            title: "基於預測編碼的AMBTC壓縮技術"
                        },
                        {
                            author: "魏銪志、吳易哲",
                            title: "運用開源解決方案進行PACS顯式信任之研究"
                        },
                        {
                            author: "饒文婷、林有康、王世逸、蔡淵裕",
                            title: "植基於八元空間分割樹與多個最高有效位元預測之加密點雲模型可回復式資訊隱藏技術"
                        }
                    ]
                },
                {
                    id: "C4",
                    title: "隱私技術與其他",
                    children: [
                        {
                            author: "鄭哲瑋、魏銪志",
                            title: "個人資料去識別的遊戲惡意退款偵測之研究"
                        },
                        {
                            author: "Ruei-Hau Hsu and Tsung-Min Wang",
                            title: "Privacy-preserving Data Sharing System Based on Federated-AI-enabled MEC with Fine-grained and Bidirectional Access Control in 5G"
                        },
                        {
                            author: "Lo Wei-Chi and Chi Po-Wen",
                            title: "Comprehensive Sandbox Architecture for Real-Time Malware Detection and Analysis Using Machine Learning-Generated Sigma Rules"
                        },
                        {
                            author: "羅乃維、張棨揚、林政毅、蔡子勛、張智傑",
                            title: "基於機器學習的物聯網風險評估機制"
                        },
                        {
                            author: "凱程、周榆涵、徐晨芳、楊吳泉",
                            title: "具認證防偽機制之 QR Code 設計與實作"
                        },
                        {
                            author: "Jenq-Haur Wang and Chi-Pin Chen",
                            title: "Improving Code Coverage in Symbolic Execution Based on Longer-Path-First Principle"
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <div className="container">
            <div className="w-100 p-5">
                    <h1 className="text-center">論文發表場次</h1>
            </div>
            <div className="d-flex flex-column gap-5 mb-5">
                { datas.map((data) => {
                    return (
                        <table className="table table-border border col-md-12 shadow" cellPadding={0} cellSpacing={0}>
                            <tbody>
                                <>
                                    <tr className="text-white" colspan="4">
                                        <td className="p-3 text-center text-white" colspan="4" style={{backgroundColor: "#F57F17"}}>{data.date}</td>
                                    </tr>
                                    <tr className="text-black" style={{backgroundColor: "#B0BEC5"}}>
                                        <td className="p-3 text-center" style={{width: "10%", backgroundColor: "#FFE082"}}></td>
                                        <td className="p-3 text-center" style={{width: "10%", backgroundColor: "#FFE082"}}>順序</td>
                                        <td className="p-3 text-center" style={{width: "30%", backgroundColor: "#FFE082"}}>作者</td>
                                        <td className="p-3 text-center" style={{width: "50%", backgroundColor: "#FFE082"}}>主題</td>
                                    </tr>
                                    { 
                                        data.children.map(agenda => {
                                            return <>
                                                <tr className="text-black">
                                                    <th className="text-center align-middle text-white" rowSpan={agenda.children.length+1} style={{backgroundColor: "#F57C00"}}>
                                                        <p className="m-0">{agenda.id}</p>
                                                        <p className="m-0">{agenda.title}</p>
                                                    </th>
                                                </tr>
                                                <>
                                                    { agenda.children.map((child, index) => {
                                                        return (
                                                            <tr className="text-black">
                                                            <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                                                    <span>{agenda.id}-{(index+1).toString().padStart(2, "0")}</span>
                                                                </td>
                                                                <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                                                    <span>{child.author}</span>
                                                                </td>
                                                                <td className="p-3 text-center align-middle" style={{backgroundColor: "#FFFFFF"}}>
                                                                    <span>{child.title}</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </>
                                            </>
                                        })
                                    }
                                </>
                            </tbody>
                        </table>
                    )
                })}
                <div className="w-100">
                    <button className="p-2 btn btn-success text-white w-100 shadow"> Download PDF</button>
                </div>
            </div>
        </div>
    )
}