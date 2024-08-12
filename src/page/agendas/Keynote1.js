export default function Keynote1(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center mb-5">Keynote 演講（一）細節資訊</h1>
                <h4 className="text-center">講者資訊</h4>
                <div className="d-flex flex-column flex-md-row gap-5">
                    <div className="col-12 col-md-3 d-flex flex-row justify-content-center">
                        <div className="mx-auto">
                            <img width={150} height={"auto"} src="https://www.cs.nycu.edu.tw/storage/avatars/sSwPaFV6KyAJ0kyjfKHTxi5YlOYcZLygH8306wWi.png"></img>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <p>講者：謝續平 教授</p>
                        <ul>
                            <li>國立陽明交通大學終身講座教授</li>
                            <li>國際電機電子學會會士(IEEE Fellow)</li>
                            <li>國際電腦學會傑出科學家(ACM Distinguished Scientist)</li>
                            <li>IEEE Transactions on Reliability總編輯</li>
                            <li>前中華民國資訊安全學會理事長</li>
                        </ul>
                        <div>
                            <p>簡歷：國立陽明交通大學資訊工程學系終身講座教授、IEEE Transactions on Reliability總編輯、IEEE Fellow、ACM Distinguished Scientist。曾獲得科技部傑出研究獎，每年全國資訊領域僅有1-2名研究人員獲獎；交大傑出教學獎，每年僅有少於百分之一的教授獲得該獎；IEEE Reliability Society Engineer of the Year年度傑出工程師。歷任美國IBM、Cisco、Foxconn與多家科技新創公司資安顧問，為SEMI國際半導體協會資安標準制定主要撰寫人之一。曾任IEEE Reliability Society Vice President、交通大學資訊工程學系主任、計算機與網路中心主任、國家資通安全會報區域聯防中心共同總主持人、行政院研考會電子化政府緊急危機應變中心主持人、中華民國資訊安全學會理事長、以及總統府國家安全會議、國家安全局、行政院國家資通安全會報、法務部、調查局等政府機關顧問。</p>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <h4 className="text-center">議程資訊</h4>
                <p>Title: Mastering Reliability, Security, and Trust in the Digital Age</p>
                <div>
                    <p>Abstract:</p>
                    <p>This talk explores the critical roles of reliability, security, and trust in the digital age, highlighting their evolution and future significance. We will begin by examining how reliability, historically focused on managing statistical errors and system faults, has been essential for ensuring the smooth operation of enterprise systems. Moving to the present, we will discuss the paramount importance of security in defending against threats from both external hackers and internal sources, which increasingly disrupt operations and compromise data integrity.</p>
                    <p>Looking to the future, the focus will shift to trust, emphasizing how risks can impact stakeholders' confidence in the continuity and dependability of enterprise operations. We will delve into how system errors affected reliability in the past, how current threats disrupt operations, and how potential risks could erode future trust. The talk will underscore the necessity of addressing all three factors—reliability, security, and trust—to maintain stakeholder confidence and ensure long-term success.</p>
                    <p>By providing a comprehensive overview and strategic insights, this talk aims to equip executives and decision-makers with the knowledge to build robust, secure, and trustworthy systems in an increasingly digital and interconnected world.</p>
                    <p>As the Editor-in-Chief of IEEE Transactions on Reliability, the Steering Committee Chair of the IEEE Conference on Dependable and Secure Computing, and the General Co-Chair of the ACM Conference on Computer and Communications Security, I also would like to take this opportunity to solicit your contributions and submissions. Thank you for your support.</p>
                </div>
            </div>
        </div>
    )
}