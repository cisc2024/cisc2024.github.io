export default function Invited(){
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="w-100 p-5">
                <h1 className="text-center mb-5">邀請演講細節資訊</h1>
                <h4 className="text-center">講者資訊</h4>
                <div className="d-flex flex-column flex-md-row gap-5">
                    <div className="col-12 col-md-3 d-flex flex-row justify-content-center">
                        <div className="mx-auto">
                            <img width={150} height={"auto"} src="https://kannwischer.eu/images/mjk2023.jpg"></img>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <p>講者：Dr. Matthias Kannwischer</p>
                        <ul>
                            <li>Chelpis</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <h4 className="text-center">議程資訊</h4>
                <p>Title: Accelerating lattice-based cryptography using constraint solving</p>
                <div>
                    <p>Abstract:</p>
                    <p>On August 13, 2024, NIST published the long-awaited post-quantum cryptography standards ML-KEM (FIPS 203), ML-DSA (FIPS 204), and SLH-DSA (FIPS 205).
                    In this talk, I will present the state of the art of high-speed implementations of both the lattice-based key-encapsulation mechanism ML-KEM, and the lattice-based digital signature scheme ML-DSA. The core arithmetic building block of ML-KEM and ML-DSA is polynomial arithmetic using the number-theoretic transform (NTT). Within the NTT, multiplications are performed modulo a fixed 12-bit prime for ML-KEM and a 23-bit prime for ML-DSA. I'll present an overview of the commonly used modular multiplications including Montgomery multiplication, Barrett multiplication, and Plantard multiplication.</p>
                    <p>I will also present a superoptimization tool named SLOTHY which has proved to be useful in obtaining the fastest implementations of lattice-based cryptography on various Arm-based platforms. The paper describing SLOTHY was recently named the second-best paper at the IACR Conference on Cryptographic Hardware and Embedded Systems 2024 (CHES).</p>
                </div>
            </div>
        </div>
    )
}