import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "#FFE0B2"}}>
                <div class="container">
                    <Link class="navbar-brand d-flex gap-2" to={"/"}>
                        <img src="https://cnc.ntut.edu.tw/var/file/4/1004/img/1544/Taipei-Tech-Logo.png" alt="Bootstrap" width="50"></img>
                        <span>第三十四屆全國資訊安全會議</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">關於大會</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/#About">關於大會</a></li>
                                    <li><a class="dropdown-item" href="/#Organization">大會組織</a></li>
                                </ul>
                            </li>
                            <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link" href="/#Information">會議資訊</a>
                            </li>
                            <li class="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">會議議程</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                                    <a class="dropdown-item" href="/#Agenda">每日議程</a>
                                    <a class="dropdown-item" href="/#Itinerary">參訪行程</a>
                                    <a class="dropdown-item" href="/#Session">論文發表場次</a>
                                </ul>
                            </li>
                            <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link" href="/#Paper">論文徵稿</a>
                            </li>
                            <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link" href="/#SignUp">會議報名</a>
                            </li>
                            <li class="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">交通與住宿</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                                    <a class="dropdown-item" href="/#Traffic">交通資訊</a>
                                    <a class="dropdown-item" href="/#Accommodation">住宿資訊</a>
                                    <a class="dropdown-item" href="/#CampusMap">校園平面圖</a>
                                    <a class="dropdown-item" href="/#Travel">旅遊資訊</a>
                                </ul>
                            </li>
                            <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link" href="/#Partner">合作夥伴</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}