function Paper() {
    return (
        <div className="container">
            <div className="w-100 p-5">
                <h1 className="text-center">論文徵稿</h1>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 線上投稿 </h4>
                <div>
                    <p className="text-left">本大會採用EasyChair作為投稿系統，請投稿者至 <a href="https://easychair.org/conferences/?conf=cisc20240">EasyChair 投稿系統</a> 註冊並進行投稿。</p>
                </div>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 投稿時程 </h4>
                <table className="table table-bordered border-black text-center">
                    <tbody>
                        <tr>
                            <td className="p-3">論文投稿截止日</td>
                            <td className="p-3">2024/07/14</td>
                        </tr>
                        <tr>
                            <td className="p-3">論文通知接受日</td>
                            <td className="p-3">2024/07/26~2024/08/03</td>
                        </tr>
                        <tr>
                            <td className="p-3">論文完稿截稿日</td>
                            <td className="p-3">2024/08/04~2024/08/15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 徵稿主題 </h4>
                <p>全國資安會議所發表之論文，將採公開方式徵求稿件，並經一定之審稿制度審核。研討會論文內容包含（但不限於）下列主題，歡迎各位先進踴躍投稿。</p>
                <table className="table table-bordered border-black text-center">
                    <tbody>
                        <tr className="p-3">
                            <td className="p-3">網路及資訊安全</td>
                            <td className="p-3">密碼學與認證協定</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">多媒體安全</td>
                            <td className="p-3">資料庫安全</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">電子商務與行動商務安全</td>
                            <td className="p-3">雲端運算與安全技術</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">資通安全技術與管理</td>
                            <td className="p-3">物聯網安全與工控安全</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">數位鑑識與惡意程式分析</td>
                            <td className="p-3">區塊鏈安全與應用</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">5G / B5G 安全</td>
                            <td className="p-3">持續性滲透攻擊</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">系統安全</td>
                            <td className="p-3">網路管理</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">資料隱藏</td>
                            <td className="p-3">入侵行為偵測</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">關鍵資訊基礎設施安全</td>
                            <td className="p-3">應用程式安全</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">身分認證及生物辨識</td>
                            <td className="p-3">隱私保護</td>
                        </tr>
                        <tr className="p-3">
                            <td className="p-3">人工智慧與機器學習安全</td>
                            <td className="p-3"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 論文格式 </h4>
                <p>論文以摘要形式投稿，得以中文或英文撰寫。英文長度限600字，中文長度限800字。稿件格式為A4 大小，四邊各留 25mm，單行間距，無須列印頁碼。英文字體 Times New Roman 10 點，中文字體標楷體 10 點。詳細摘要格式見第三十四屆全國資訊安全會議網站所提供的 WORD、Latex 範例檔，存檔格式為 PDF。本次會議接受摘要投稿與全文投稿，摘要投稿僅需提交摘要，全文投稿以 6 頁為限。</p>
                <ul>
                    <li>XeLaTeX範例的詳細使用方式請參考 README。(提供來源：鄭欣明教授及萬子綾同學)</li>
                    <li>pdfTex範例亦可使用Overleaf線上編輯器，請參考線上範例。(提供來源：陳昱圻教授)</li>
                </ul>
                <div className="d-flex flex-row gap-5 my-5">
                    <a href="/CISC2024_format-0121rev.doc" target="_blank"><button className="btn btn-success w-100">論文格式範例下載 WORD</button></a>
                    <a href="/CISC2024_format_XeLaTeX.tex" target="_blank"><button className="btn btn-success w-100">論文格式範例下載 XeLaTeX</button></a>
                    <a href="/CISC2024_format_pdfTeX.tex" target="_blank"><button className="btn btn-success w-100">論文格式範例下載 pdfTex</button></a>
                    <a href="https://www.overleaf.com/read/trgjythkmjzj#02fc27" target="_blank"><button className="btn btn-success w-100">Overleaf 線上 pdfTex 範例</button></a>
                </div>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 論文審查 </h4>
                <p>論文審查以匿名方式進行，審查結果將於論文接受通知日，通知各論文的聯絡人。被接受的論文必須將修正後的版本於註冊截止日以前寄回。論文的修正，參照審查意見修改，並製作成PDF格式檔案傳送至本會議的easychair投稿系統。</p>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 論文推薦至期刊出版計畫 </h4>
                <p>為增加全國資訊安全會議之國際化，我們擬推薦優秀『全文投稿之論文』至 Journal of Information Science and Engineering (SCIE)、Journal of Internet Technology (SCIE)或同等級之期刊。</p>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 定稿／投稿教學 </h4>
                <a href="/CISC2024_easychair_tutorial.pdf" target="_blank"><button className="btn btn-success w-100">開啟教學手冊 PDF 檔</button></a>
            </div>
            <div className="mb-5">
                <h4 className="text-left py-3"> 論文定稿上傳教學影片 </h4>
                <iframe width="100%" height="800vh" src="https://www.youtube.com/embed/zYS2cYTADig?si=_mi623XLV-FXu6Px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
        </div>
    )
}

export default Paper;